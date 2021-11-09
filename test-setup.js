import ignore from 'ignore-styles';
import jsdom from 'jsdom';
import test from 'ospec';

const dom = new jsdom.JSDOM('', {
    // für `requestAnimationFrame`
    pretendToBeVisual: true,
});

Object.assign(global, {
    window: dom.window,
    document: dom.window.document,
    HTMLElement: dom.window.HTMLElement,
    requestAnimationFrame: dom.window.requestAnimationFrame,
});

ignore.default(['.css', '.sass', '.scss']);

test.after(function() {
    dom.window.close();
});