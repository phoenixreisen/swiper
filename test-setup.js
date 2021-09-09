import register from 'ignore-styles';
import Slider from 'swiper';
import jsdom from 'jsdom';
import test from 'ospec';

const dom = new jsdom.JSDOM('', {
    // für `requestAnimationFrame`
    pretendToBeVisual: true,
});

Object.assign(global, {
    window: dom.window,
    document: dom.window.document,
    requestAnimationFrame: dom.window.requestAnimationFrame,
});

const ignore = register.default;
ignore(['.css', '.sass', '.scss']);

test.after(function() {
    dom.window.close();
});