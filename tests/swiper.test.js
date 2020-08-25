const m = require('mithril');
const mq = require("mithril-query");
const test = require("ospec");

test.spec('Slider Wrapper', () => {
    const Slider = require('../dist/swiper.m.js').Slider;
    const Slide = m("article", {"class":"slide"}, "Slide Content");

    test('renders correctly', () => {

        const Page = {
            view({state}) {
                return ([
                    m(Slider, {
                        parentState: state,
                        slides: [Slide, Slide, Slide]
                    }),
                ]);
            },
        };
        const rendered = mq(Page);

        // Swiper
        test(rendered.should.have(3, '.swiper-slide')).equals(true);
        test(rendered.should.have('.swiper-container')).equals(true);
        test(rendered.should.have('.swiper-scrollbar')).equals(true);
        test(rendered.should.have('.swiper-pagination')).equals(true);
        test(rendered.should.have('.swiper-button-next')).equals(true);
        test(rendered.should.have('.swiper-button-prev')).equals(true);

        // Custom Classes
        test(rendered.should.have('.swiper-wrapper')).equals(true);
        test(rendered.should.have('.fas.fa-arrow-circle-left')).equals(true);
        test(rendered.should.have('.fas.fa-arrow-circle-right')).equals(true);
    });
});