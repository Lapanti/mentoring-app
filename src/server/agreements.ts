import kn from './db';

const knex = kn('agreement');

export interface IAgreement {
  id: number;
  your_name: string;
  your_email: string;
  mentor_name: string;
  mentor_email: string;
  career_coaching: boolean;
  support_skill: boolean;
  skill_name: string;
  checkpoint_goals: boolean;
  continuous_sparring: boolean;
  how_long: string;
  how_long_custom: string;
  how: string;
  how_custom: string;
  how_often: string;
  how_often_custom: string;
  retro: boolean;
  retro_supervisor: boolean;
}

export function getById(id: string) {
  return knex.select().where({ id });
}
