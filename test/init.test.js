const jsdom = require('jsdom');
const {JSDOM} = jsdom;

const dom = new JSDOM('<!DOCTYPE html><p>Hello world</p>');

global.window = dom.window;
global.document = dom.window.document;

const root = require('../src');

test('something', () => {
    expect(root).toBeTruthy();
});

test('something', () => {

    root.addController('tst', () => {

    });

    expect(global.document.querySelectorAll('p').length).toBe(1);

// Problems:
// 1. My code uses global variables, such as

// the code uses window+document as global variables, so I can only test it
// in a browser.

});
