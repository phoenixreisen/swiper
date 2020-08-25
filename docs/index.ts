import {Slider} from '../src/swiper.m';
import m from 'mithril';

// Beispiel-Slide-Content
const Slide = m("article", {"class":"slide"}, "Slide Content");

const Root: m.Component<{}> = {
    view({state}) {
        return ([
            m(Slider, {
                parentState: state,
                slides: [Slide, Slide, Slide]
            }),
        ]);
    },
};

m.mount(document.querySelector('.example-app'), Root);