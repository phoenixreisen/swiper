const m = require('mithril');
const mq = require("mithril-query");
const test = require("ospec");
const fs = require('fs');

/** Global Scope Stuff */
Object.assign(global, m, { location: {
    protocol: 'http:',
    host: 'www.phoenixreisen.com',
    pathname: '/'
}});

test.spec('Dateicheck', () => {
    test('Logodatei vorhanden', () => {
        const fileExists = fs.existsSync('src/favicon.png');
        test(fileExists).equals(true);
    });
});

test.spec('Topbar', () => {
    const Topbar = require('../test/topbar.m.js').default;

    test('wird korrekt ohne Buttons gerendert', () => {
        const rendered = mq(Topbar, {
            name: 'Phoenix Test App',
            faviconUrl: 'favicon.jpg',
            faviconTarget: 'meinereise.phoenixreisen.com',
            backUrl: 'phoenixreisen.com'
        });

        test(rendered.should.contain('Phoenix Test App')).equals(true);
        test(rendered.should.have('.top-bar.noprint')).equals(true);
        test(rendered.should.have('img[src="favicon.jpg"]')).equals(true);
        test(rendered.should.have('a[href="phoenixreisen.com"]')).equals(true);
        test(rendered.should.have('a[href="meinereise.phoenixreisen.com"]')).equals(true);

        test(rendered.vnode.state.isVisible).equals(false);
        test(rendered.should.not.have('top-bar__avatar')).equals(true);
        test(rendered.should.not.have('top-bar__nav-btn')).equals(true);
        test(rendered.should.not.have('top-bar--visible')).equals(true);
    });

    test('wird korrekt mit Buttons gerendert', () => {
        const rendered = mq(Topbar, {
            name: 'Phoenix Test App II',
            toggleNav: () => console.info('nav toggled'),
            toggleAvatar: () => console.info('avatar toggled'),
        });
        test(rendered.should.have('.top-bar__avatar.noprint')).equals(true);
        test(rendered.should.have('.top-bar__nav-btn.noprint')).equals(true);
    });

    test('wird eingeblendet, wenn state.isVisible true wird', () => {
        const rendered = mq(Topbar, {name: 'Phoenix Test App II'});
        // User ruft Seite auf. Topbar ist nicht sichtbar.
        test(rendered.vnode.state.isVisible).equals(false);
        test(rendered.should.not.have('.top-bar--visible')).equals(true);

        // User scrollt quasi nach unten...
        rendered.vnode.state.isVisible = true;
        rendered.redraw();

        // Topbar wird durch Setzen einer CSS-Klasse sichtbar.
        test(rendered.vnode.state.isVisible).equals(true);
        test(rendered.should.have('.top-bar--visible')).equals(true);
    });
});