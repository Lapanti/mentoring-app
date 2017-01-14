import {
  button,
  div,
  h1,
  h2,
  h3,
  input,
  label,
  makeDOMDriver,
  option,
  select,
  span,
  VNode,
} from '@cycle/dom';
import { DOMSource } from '@cycle/dom/xstream-typings';
import { run } from '@cycle/xstream-run';
import { Stream } from 'xstream';

interface ISources {
  DOM: DOMSource;
}

const main = (sources: ISources) => ({
  DOM: sources.DOM.select('input').events('input')
        .map((ev) => (ev.target as HTMLInputElement).value)
        .startWith('World')
        .map((name: string) =>
          div([
            h1('Mentoring agreement'),
            div('.parties', [
              label('Between'),
              input('.your-name', { attrs: { type: 'text', placeholder: 'Your name' } } ),
              label('and'),
              input('.mentor-name', { attrs: { type: 'text', placeholder: 'Mentor\'s name' } } ),
            ]),
            div('.content', [
              h2('What?'),
              span('.side-note', '(Check the ones relevant for this agreement)'),
              div('.content--checkboxes', [
                label('Career coaching'),
                input('.career-coaching', { attrs: { type: 'checkbox' } } ),
                label('Support with a specific skill'),
                input('.support-skill', { attrs: { type: 'checkbox' } } ),
                input('.support-skill-name', { attrs: { type: 'text', placeholder: 'E.g. Java or UX design' } } ),
                label('Support on working towards checkpoint goals'),
                input('.checkpoint-goals', { attrs: { type: 'checkbox' } } ),
                label('Continuous sparring on project work'),
                input('.continuous-sparring', { attrs: { type: 'checkbox' } } ),
              ]),
            ]),
            div('.details', [
              h3('Until when?'),
              span('.side-note', '(When should we check the agreement again?)'),
              select('.how-long', { attrs: { name: 'how-long' } }, [
                option({ attrs: { value: '3 months' } }, '3 months'),
                option({ attrs: { value: '6 months' } }, '6 months'),
                option({ attrs: { value: 'Custom' } }, 'Custom'),
              ]),
              input('.how-long-custom', { attrs: { type: 'text', placeholder: 'E.g. 9 months' } } ),
              h3('How?'),
              select('.how', { attrs: { name: 'how' } }, [
                option({ attrs: { value: 'Meetings' } }, 'Meetings'),
                option({ attrs: { value: 'Discussions' } }, 'Discussions'),
                option({ attrs: { value: 'Lunches' } }, 'Lunches'),
                option({ attrs: { value: 'Custom' } }, 'Custom'),
              ]),
              input('.how-custom', { attrs: { type: 'text', placeholder: 'E.g. Online' } } ),
              h3('How often?'),
              span('.side-note', '(Make sure to arrange that you meet with your mentor)'),
              select('.how-often', { attrs: { name: 'how-often' } }, [
                option({ attrs: { value: 'Weekly' } }, 'Weekly'),
                option({ attrs: { value: 'Bi-weekly' } }, 'Bi-weekly'),
                option({ attrs: { value: 'Monthly' } }, 'Monthly'),
                option({ attrs: { value: 'Custom' } }, 'Custom'),
              ]),
              input('.how-often-custom', { attrs: { type: 'text', placeholder: 'E.g. Every third week' } } ),
              h3('Will we have a retro?'),
              input('.retro', { attrs: { type: 'checkbox' } } ),
              label('Should supervisor be involved?'),
              input('.retro-supervisor', { attrs: { type: 'checkbox' } } ),
            ]),
          ]),
        ),
});

run(main, {
  DOM: makeDOMDriver('#app'),
});
