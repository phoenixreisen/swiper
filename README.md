# Phoenix Slider "Swiper"

**Die Komponente stellt einen Mithril-Wrapper für den Slider "Swiper" zur Verfügung.** Diesem werden letztendlich
nur noch eine Reihe von Mithril-Komponenten sowie der `State` der aufrufenden Komponente übergeben. Der Rest ist vorkonfiguriert. Die Styles kommen aus dem [Design-System](https://design-system.phoenixreisen.net).

Die Komponente ist Teil des [Phoenix Reisen Design-Systems](https://design-system.phoenixreisen.net).

## Demo

https://phoenixreisen.github.io/swiper/

## Anwendung

[Mithril](https://mithril.js.org/) wird benötigt.

```bash
npm install --save @phoenixreisen/swiper
```

```js
import Slider from '@phoenixreisen/swiper';
import m from 'mithril';

// Slide-Content Beispiel
const Slide = m("article", {"class":"slide"}, "Slide Content");

const Page: m.Component<{}> = {
    view({state}) {
        return ([
            m(Slider, {
                parentState: state,
                slides: [Slide, Slide, Slide]
            }),
        ]);
    },
};

m.mount(document.querySelector('.example-app'), Page);
```

## Test

```bash
[npm install]

npm run test
```

## Deployment

```bash
[npm install]                       # Ahängigkeiten installieren
npm version [major|minor|patch]     # increase version x.x.x => major.minor.patch
npm publish                         # upload to npm
git push
```