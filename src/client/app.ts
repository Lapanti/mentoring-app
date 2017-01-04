import { button, div, h1, hr, input, label, makeDOMDriver, VNode } from '@cycle/dom';
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
            label('Name:'),
            input('.input', { attrs: { types: 'text' } } ),
            hr(),
            h1(`Hello ${name}!`),
          ]),
        ),
});

run(main, {
  DOM: makeDOMDriver('#app'),
});
