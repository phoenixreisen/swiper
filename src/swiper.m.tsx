/** @jsx m */

import Swiper, {Navigation, Pagination, Scrollbar} from 'swiper';
import 'swiper/swiper-bundle.css';
import m from 'mithril';

Swiper.use([Navigation, Pagination, Scrollbar]);

//--- Types -----

type AttrProps = {
    parentState: any,
    slides: Array<m.Vnode<any, any>>,
}

type StateProps = {
    slider: Swiper
}

//--- Komponente -----

export const Slider: m.Component<AttrProps, StateProps> = {

    oncreate(vnode: m.VnodeDOM<AttrProps, StateProps>) {
        const {state, attrs, dom} = vnode;
        state.slider = new Swiper('.swiper-container', {
            simulateTouch: false,
            shortSwipes: false,
            longSwipes: true,
            pagination: {
                clickable: true,
                el: '.swiper-pagination',
                renderBullet: (index, className) => {
                    return '<span class="' + className + '">' + (index + 1) + '</span>';
                },
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
        Object.assign(attrs.parentState, {sliderEl: dom});
    },

    onupdate({state}: m.Vnode<AttrProps, StateProps>) {
        const {slider} = state;
        slider.update?.();
    },

    view({attrs}: m.Vnode<AttrProps>) {
        const {slides} = attrs;
        return (
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    {slides.map((slide: m.Vnode<any, any>, index: number) => {
                        return <div key={`slide-${index}`} class="swiper-slide">{slide}</div>;
                    })}
                </div>
                <div class="swiper-scrollbar"></div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"><i class="fas fa-arrow-circle-left"></i></div>
                <div class="swiper-button-next"><i class="fas fa-arrow-circle-right"></i></div>
            </div>
        );
    }
}

export default Slider;