!function r(e,s,o){function t(u,c){if(!s[u]){if(!e[u]){var f="function"==typeof require&&require;if(!c&&f)return f(u,!0);if(n)return n(u,!0);var i=new Error("Cannot find module '"+u+"'");throw i.code="MODULE_NOT_FOUND",i}var p=s[u]={exports:{}};e[u][0].call(p.exports,function(r){var s=e[u][1][r];return t(s?s:r)},p,p.exports,r,e,s,o)}return s[u].exports}for(var n="function"==typeof require&&require,u=0;u<o.length;u++)t(o[u]);return t}({"/Users/skone/Projects/syrup/fixtures/project/src/bar.js":[function(r,e){"use strict";e.exports={bar:!0}},{}],"/Users/skone/Projects/syrup/fixtures/project/src/foo.jsx":[function(r,e){"use strict";var s=r("./bar");if(s);e.exports={foo:s.bar}},{"./bar":"/Users/skone/Projects/syrup/fixtures/project/src/bar.js"}]},{},["/Users/skone/Projects/syrup/fixtures/project/src/foo.jsx"]);
//# sourceMappingURL=foo.js.map