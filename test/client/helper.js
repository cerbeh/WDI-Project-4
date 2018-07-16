process.env.NODE_ENV = 'test';

// allows us to write tests in ES6
require('babel-register')();

// prevent webpack from loading css and scss
const nullFunc = () => null;
require.extensions['.css'] = nullFunc;
require.extensions['.scss'] = nullFunc;
require.extensions['.jpg'] = nullFunc;
require.extensions['.gif'] = nullFunc;
require.extensions['.png'] = nullFunc;

// load in enzyme
const { configure } = require('enzyme');
// set enzyme up to use React 16, which is the version we are using
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

// create a virtual DOM in the terminal
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const { window } = jsdom;

global.document = window.document;

window.localStorage = (function(){
  const storage = {};
  return {
    getItem: function(key) {
      return storage[key] || null;
    },
    removeItem: function(key) {
      delete storage[key];
    },
    setItem: function(key, item) {
      storage[key] = item;
    }
  };
})();

global.google = window.google = {
  maps: {
    Map: function Map() { },
    Marker: function Marker() { }
  }
};

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

copyProps(window, global);
