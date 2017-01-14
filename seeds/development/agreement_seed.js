
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('agreement').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('agreement').insert({
          id: 1,
          your_name: 'Lauri Lavanti',
          your_email: 'lauri.lavanti@futurice.com',
          mentor_name: 'Juho Vähä-Herttua',
          mentor_email: 'juho.vaha-herttua@futurice.com',
          career_coaching: true,
          support_skill: true,
          skill_name: 'Javascript',
          checkpoint_goals: true,
          continuous_sparring: true,
          how_long: 'Custom',
          how_long_custom: 'Forever',
          how: 'Custom',
          how_custom: 'Whatever floats my boat',
          how_often: 'Custom',
          how_often_custom: 'Whenever',
          retro: true,
          retro_supervisor: true
        }),
        knex('agreement').insert({
          id: 2,
          your_name: 'Pekka Neuvo',
          your_email: 'pekka.neuvo@futurice.com',
          mentor_name: 'Lauri Lavanti',
          mentor_email: 'lauri.lavanti@futurice.com',
          career_coaching: false,
          support_skill: false,
          checkpoint_goals: false,
          continuous_sparring: true,
          how_long: '3 months',
          how: 'Lunches',
          how_often: 'Monthly',
          retro: false
        })
      ]);
    });
};
