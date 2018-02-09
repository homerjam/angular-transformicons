'use strict';

function __$$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var addrmPlusCheck = _interopDefault(require('transformicons/site/templates/includes/tcons/addrm-plus-check.hbs'));
var addrmPlusCircle = _interopDefault(require('transformicons/site/templates/includes/tcons/addrm-plus-circle.hbs'));
var addrmPlusMinusfold = _interopDefault(require('transformicons/site/templates/includes/tcons/addrm-plus-minusfold.hbs'));
var addrmPlusMinusrotate = _interopDefault(require('transformicons/site/templates/includes/tcons/addrm-plus-minusrotate.hbs'));
var addrmRemoveCheck = _interopDefault(require('transformicons/site/templates/includes/tcons/addrm-remove-check.hbs'));
var addrmRemoveChevronDown = _interopDefault(require('transformicons/site/templates/includes/tcons/addrm-remove-chevron-down.hbs'));
var addrmRemoveChevronLeft = _interopDefault(require('transformicons/site/templates/includes/tcons/addrm-remove-chevron-left.hbs'));
var addrmRemoveChevronRight = _interopDefault(require('transformicons/site/templates/includes/tcons/addrm-remove-chevron-right.hbs'));
var addrmRemoveChevronUp = _interopDefault(require('transformicons/site/templates/includes/tcons/addrm-remove-chevron-up.hbs'));
var gridCollapse = _interopDefault(require('transformicons/site/templates/includes/tcons/grid-collapse.hbs'));
var gridRearrange = _interopDefault(require('transformicons/site/templates/includes/tcons/grid-rearrange.hbs'));
var indicatorSvgchevron = _interopDefault(require('transformicons/site/templates/includes/tcons/indicator-svgchevron.hbs'));
var loaderCirclearrow = _interopDefault(require('transformicons/site/templates/includes/tcons/loader-circlearrow.hbs'));
var loaderSpinner360 = _interopDefault(require('transformicons/site/templates/includes/tcons/loader-spinner360.hbs'));
var mailEnvelope = _interopDefault(require('transformicons/site/templates/includes/tcons/mail-envelope.hbs'));
var menuArrow360 = _interopDefault(require('transformicons/site/templates/includes/tcons/menu-arrow360.hbs'));
var menuArrowleft = _interopDefault(require('transformicons/site/templates/includes/tcons/menu-arrowleft.hbs'));
var menuArrowup = _interopDefault(require('transformicons/site/templates/includes/tcons/menu-arrowup.hbs'));
var menuMinus = _interopDefault(require('transformicons/site/templates/includes/tcons/menu-minus.hbs'));
var menuXbutterfly = _interopDefault(require('transformicons/site/templates/includes/tcons/menu-xbutterfly.hbs'));
var menuXcross = _interopDefault(require('transformicons/site/templates/includes/tcons/menu-xcross.hbs'));
var searchXcross = _interopDefault(require('transformicons/site/templates/includes/tcons/search-xcross.hbs'));
var vidPlay = _interopDefault(require('transformicons/site/templates/includes/tcons/vid-play.hbs'));

var css = "button {\n  color: currentColor; }\n\n@-webkit-keyframes chevron-pulse {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 1; }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n@keyframes chevron-pulse {\n  0% {\n    opacity: 0; }\n  40% {\n    opacity: 1; }\n  80% {\n    opacity: 0; }\n  100% {\n    opacity: 0; } }\n\n.tcon {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  border: none;\n  cursor: pointer;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 4rem;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 4rem;\n  background: transparent;\n  outline: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-tap-highlight-color: transparent; }\n  .tcon > * {\n    display: block; }\n  .tcon:hover, .tcon:focus {\n    outline: none; }\n  .tcon::-moz-focus-inner {\n    border: 0; }\n\n.tcon-menu__lines {\n  display: inline-block;\n  height: 0.57143rem;\n  width: 4rem;\n  border-radius: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background: currentColor;\n  position: relative; }\n  .tcon-menu__lines::before, .tcon-menu__lines::after {\n    display: inline-block;\n    height: 0.57143rem;\n    width: 4rem;\n    border-radius: 0;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    background: currentColor;\n    content: '';\n    position: absolute;\n    left: 0;\n    -webkit-transform-origin: 0.28571rem center;\n            transform-origin: 0.28571rem center;\n    width: 100%; }\n  .tcon-menu__lines::before {\n    top: 1rem; }\n  .tcon-menu__lines::after {\n    top: -1rem; }\n  .tcon-transform .tcon-menu__lines {\n    -webkit-transform: scale3d(0.8, 0.8, 0.8);\n            transform: scale3d(0.8, 0.8, 0.8); }\n\n.tcon-menu--arrow, .tcon-menu--arrowleft {\n  width: auto; }\n  .tcon-menu--arrow.tcon-transform .tcon-menu__lines::before, .tcon-transform.tcon-menu--arrowleft .tcon-menu__lines::before, .tcon-menu--arrow.tcon-transform .tcon-menu__lines::after, .tcon-transform.tcon-menu--arrowleft .tcon-menu__lines::after {\n    top: 0;\n    width: 2.22222rem; }\n  .tcon-menu--arrow.tcon-transform .tcon-menu__lines::before, .tcon-transform.tcon-menu--arrowleft .tcon-menu__lines::before {\n    -webkit-transform: rotate3d(0, 0, 1, 45deg);\n            transform: rotate3d(0, 0, 1, 45deg); }\n  .tcon-menu--arrow.tcon-transform .tcon-menu__lines::after, .tcon-transform.tcon-menu--arrowleft .tcon-menu__lines::after {\n    -webkit-transform: rotate3d(0, 0, 1, -45deg);\n            transform: rotate3d(0, 0, 1, -45deg); }\n\n.tcon-grid {\n  padding: 1.2rem; }\n  .tcon-grid .tcon-grid__item {\n    width: 0.6rem;\n    height: 0.6rem;\n    background: currentColor;\n    color: currentColor;\n    -webkit-transition: 0.3s;\n    transition: 0.3s; }\n\n.tcon-grid.tcon-transform .tcon-grid__item {\n  -webkit-transform: rotate3d(0, 0, 1, -45deg) scale3d(0.8, 0.8, 0.8);\n          transform: rotate3d(0, 0, 1, -45deg) scale3d(0.8, 0.8, 0.8); }\n\n.tcon-plus {\n  height: 4rem;\n  position: relative;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  width: 4rem; }\n  .tcon-plus::before, .tcon-plus::after {\n    content: \"\";\n    border-radius: 2px;\n    display: block;\n    width: 85%;\n    height: 25%;\n    position: absolute;\n    top: 37%;\n    left: 8%;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    background: black; }\n  .tcon-plus:after {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg); }\n\n.tcon-remove {\n  height: 4rem;\n  position: relative;\n  -webkit-transform: scale(0.75);\n          transform: scale(0.75);\n  width: 4rem; }\n  .tcon-remove::before, .tcon-remove::after {\n    content: \"\";\n    display: block;\n    height: 25%;\n    width: 85%;\n    position: absolute;\n    top: 37%;\n    left: 8%;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    background: currentColor; }\n  .tcon-remove::before {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n  .tcon-remove::after {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n\n.tcon-search__item {\n  display: inline-block;\n  height: 3rem;\n  width: 3rem;\n  border-radius: 0;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n  background: transparent;\n  position: relative;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n  .tcon-search__item::before, .tcon-search__item::after {\n    display: inline-block;\n    height: 3rem;\n    width: 3rem;\n    border-radius: 0;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n    background: transparent;\n    content: '';\n    position: absolute;\n    width: 100%;\n    top: 0;\n    bottom: 0;\n    margin: auto; }\n  .tcon-search__item::before {\n    height: 0.4rem;\n    left: 0;\n    background: currentColor;\n    border-radius: 0.28571rem; }\n  .tcon-search__item::after {\n    right: 0;\n    background: currentColor;\n    border-radius: 50%;\n    width: 1.20001rem;\n    height: 1.20001rem;\n    border: 0.2rem solid black;\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%; }\n\n.tcon-svgchevron {\n  height: 4rem;\n  width: 4rem; }\n\n.tcon-svgchevron path {\n  -webkit-animation: chevron-pulse 3s infinite cubic-bezier(0.4, 0, 0.2, 1);\n          animation: chevron-pulse 3s infinite cubic-bezier(0.4, 0, 0.2, 1);\n  fill: transparent;\n  stroke: currentColor;\n  stroke-width: 1px; }\n\n.tcon-svgchevron path.a1 {\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s; }\n\n.tcon-svgchevron path.a2 {\n  -webkit-animation-delay: -0.5s;\n          animation-delay: -0.5s; }\n\n.tcon-svgchevron path.a3 {\n  -webkit-animation-delay: -1s;\n          animation-delay: -1s; }\n\n.tcon-menu--xbutterfly {\n  width: auto; }\n  .tcon-menu--xbutterfly .tcon-menu__lines::before, .tcon-menu--xbutterfly .tcon-menu__lines::after {\n    -webkit-transform-origin: 50% 50%;\n            transform-origin: 50% 50%;\n    -webkit-transition: top .3s .6s ease, -webkit-transform .3s ease;\n    transition: top .3s .6s ease, -webkit-transform .3s ease;\n    transition: top .3s .6s ease, transform .3s ease;\n    transition: top .3s .6s ease, transform .3s ease, -webkit-transform .3s ease; }\n  .tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines {\n    background: transparent; }\n    .tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::before, .tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::after {\n      top: 0;\n      -webkit-transition: top .3s ease, -webkit-transform .3s .5s ease;\n      transition: top .3s ease, -webkit-transform .3s .5s ease;\n      transition: top .3s ease, transform .3s .5s ease;\n      transition: top .3s ease, transform .3s .5s ease, -webkit-transform .3s .5s ease;\n      width: 4rem; }\n    .tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::before {\n      -webkit-transform: rotate3d(0, 0, 1, 45deg);\n              transform: rotate3d(0, 0, 1, 45deg); }\n    .tcon-menu--xbutterfly.tcon-transform .tcon-menu__lines::after {\n      -webkit-transform: rotate3d(0, 0, 1, -45deg);\n              transform: rotate3d(0, 0, 1, -45deg); }\n\n.tcon-menu--xcross {\n  width: auto; }\n  .tcon-menu--xcross.tcon-transform .tcon-menu__lines {\n    background: transparent; }\n    .tcon-menu--xcross.tcon-transform .tcon-menu__lines::before, .tcon-menu--xcross.tcon-transform .tcon-menu__lines::after {\n      -webkit-transform-origin: 50% 50%;\n              transform-origin: 50% 50%;\n      top: 0;\n      width: 4rem; }\n    .tcon-menu--xcross.tcon-transform .tcon-menu__lines::before {\n      -webkit-transform: rotate3d(0, 0, 1, 45deg);\n              transform: rotate3d(0, 0, 1, 45deg); }\n    .tcon-menu--xcross.tcon-transform .tcon-menu__lines::after {\n      -webkit-transform: rotate3d(0, 0, 1, -45deg);\n              transform: rotate3d(0, 0, 1, -45deg); }\n\n.tcon-menu--minus {\n  width: auto; }\n  .tcon-menu--minus.tcon-transform .tcon-menu__lines::before, .tcon-menu--minus.tcon-transform .tcon-menu__lines::after {\n    -webkit-transform: none;\n            transform: none;\n    top: 0;\n    width: 4rem; }\n\n.tcon-menu--arrow360left.tcon-transform {\n  -webkit-transform: scale3d(0.8, 0.8, 0.8) rotate3d(0, 0, 1, 360deg);\n          transform: scale3d(0.8, 0.8, 0.8) rotate3d(0, 0, 1, 360deg); }\n\n.tcon-menu--arrowup {\n  width: auto; }\n  .tcon-menu--arrowup.tcon-transform {\n    -webkit-transform: scale3d(0.8, 0.8, 0.8) rotate3d(0, 0, 1, 90deg);\n            transform: scale3d(0.8, 0.8, 0.8) rotate3d(0, 0, 1, 90deg); }\n\n.tcon-grid--collapse .tcon-grid__item {\n  -webkit-box-shadow: -0.9rem 0, -0.9rem 0.9rem, 0.9rem 0, 0.9rem -0.9rem, 0 -0.9rem, -0.9rem -0.9rem, 0 0.9rem, 0.9rem 0.9rem;\n          box-shadow: -0.9rem 0, -0.9rem 0.9rem, 0.9rem 0, 0.9rem -0.9rem, 0 -0.9rem, -0.9rem -0.9rem, 0 0.9rem, 0.9rem 0.9rem; }\n\n.tcon-grid--collapse.tcon-transform .tcon-grid__item {\n  -webkit-box-shadow: -0.6rem 0, 0 0 transparent, 0.6rem 0, 0 0 transparent, 0 -0.6rem, 0 0 transparent, 0 0.6rem, 0 0 transparent;\n          box-shadow: -0.6rem 0, 0 0 transparent, 0.6rem 0, 0 0 transparent, 0 -0.6rem, 0 0 transparent, 0 0.6rem, 0 0 transparent; }\n\n.tcon-grid--rearrange .tcon-grid__item {\n  -webkit-box-shadow: -0.9rem -0.9rem, 0 -0.9rem, 0.9rem -0.9rem, -0.9rem 0, 0.9rem 0, -0.9rem 0.9rem, 0 0.9rem, 0.9rem 0.9rem;\n          box-shadow: -0.9rem -0.9rem, 0 -0.9rem, 0.9rem -0.9rem, -0.9rem 0, 0.9rem 0, -0.9rem 0.9rem, 0 0.9rem, 0.9rem 0.9rem; }\n\n.tcon-grid--rearrange.tcon-transform .tcon-grid__item {\n  -webkit-box-shadow: 0 -0.6rem, 0 -1.2rem, 0.6rem 0, -1.2rem 0, 1.2rem 0, -0.6rem 0, 0 1.2rem, 0 0.6rem;\n          box-shadow: 0 -0.6rem, 0 -1.2rem, 0.6rem 0, -1.2rem 0, 1.2rem 0, -0.6rem 0, 0 1.2rem, 0 0.6rem; }\n\n.tcon-remove--check.tcon-transform::before {\n  -webkit-transform: rotate(-135deg) translate(5%, -10%);\n          transform: rotate(-135deg) translate(5%, -10%);\n  top: 50%;\n  width: 55%; }\n\n.tcon-remove--check.tcon-transform::after {\n  -webkit-transform: rotate(-45deg) translate(20%, 10%);\n          transform: rotate(-45deg) translate(20%, 10%);\n  top: 50%;\n  width: 85%; }\n\n.tcon-remove--chevron-left.tcon-transform::before {\n  left: 20%;\n  -webkit-transform: translate(0, -55%) rotate(-45deg);\n          transform: translate(0, -55%) rotate(-45deg);\n  width: 62%; }\n\n.tcon-remove--chevron-left.tcon-transform::after {\n  left: 20%;\n  -webkit-transform: translate(0, 55%) rotate(45deg);\n          transform: translate(0, 55%) rotate(45deg);\n  width: 62%; }\n\n.tcon-remove--chevron-right.tcon-transform::before {\n  left: 20%;\n  -webkit-transform: translate(0, 55%) rotate(-45deg);\n          transform: translate(0, 55%) rotate(-45deg);\n  width: 62%; }\n\n.tcon-remove--chevron-right.tcon-transform::after {\n  left: 20%;\n  -webkit-transform: translate(0, -55%) rotate(45deg);\n          transform: translate(0, -55%) rotate(45deg);\n  width: 62%; }\n\n.tcon-remove--chevron-down.tcon-transform::before {\n  left: 5%;\n  -webkit-transform: rotate(-135deg);\n          transform: rotate(-135deg);\n  width: 59%; }\n\n.tcon-remove--chevron-down.tcon-transform::after {\n  left: auto;\n  right: 10%;\n  -webkit-transform: rotate(135deg);\n          transform: rotate(135deg);\n  width: 60%; }\n\n.tcon-remove--chevron-up.tcon-transform::before {\n  left: 5%;\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n  width: 59%; }\n\n.tcon-remove--chevron-up.tcon-transform::after {\n  left: auto;\n  right: 10%;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  width: 60%; }\n\n.tcon-plus--check.tcon-transform::before {\n  -webkit-transform: rotate(-135deg) translate(5%, -10%);\n          transform: rotate(-135deg) translate(5%, -10%);\n  top: 50%;\n  width: 55%; }\n\n.tcon-plus--check.tcon-transform::after {\n  -webkit-transform: rotate(-45deg) translate(20%, 10%);\n          transform: rotate(-45deg) translate(20%, 10%);\n  top: 50%;\n  width: 85%; }\n\n.tcon-plus--minus.tcon-transform::before {\n  -webkit-transform: rotate(180deg) translate(0, 0);\n          transform: rotate(180deg) translate(0, 0);\n  width: 62%; }\n\n.tcon-plus--minus.tcon-transform::after {\n  -webkit-transform: rotate(-180deg) translate(-37.5%, 0);\n          transform: rotate(-180deg) translate(-37.5%, 0);\n  width: 62%; }\n\n.tcon-plus--minusfold {\n  height: 4rem;\n  position: relative;\n  -webkit-transform: scale(1);\n          transform: scale(1);\n  width: 4rem; }\n  .tcon-plus--minusfold::before, .tcon-plus--minusfold::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    -webkit-transition: .3s all ease-in-out;\n    transition: .3s all ease-in-out;\n    border-radius: 0.5rem;\n    top: 50%;\n    -webkit-transform: translate(50%, -50%) rotate(0);\n            transform: translate(50%, -50%) rotate(0);\n    width: 50%;\n    height: 0.33333rem;\n    background: currentColor; }\n  .tcon-plus--minusfold::after {\n    top: 50%;\n    width: 50%;\n    height: 0.33333rem;\n    -webkit-transform: translate(50%, -50%) rotate(90deg);\n            transform: translate(50%, -50%) rotate(90deg); }\n  .tcon-plus--minusfold.tcon-transform::after {\n    -webkit-transform: translate(50%, -50%) rotate(0);\n            transform: translate(50%, -50%) rotate(0); }\n\n.tcon-plus--circle {\n  border: 0.33333rem solid currentColor;\n  border-radius: 80%;\n  position: relative;\n  background: transparent; }\n  .tcon-plus--circle::before, .tcon-plus--circle::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    left: 0;\n    -webkit-transition: .3s all ease-in-out;\n    transition: .3s all ease-in-out;\n    border-radius: 0.5rem;\n    top: 50%;\n    -webkit-transform: translate(50%, -50%) rotate(0);\n            transform: translate(50%, -50%) rotate(0);\n    width: 50%;\n    height: 0.33333rem;\n    background: currentColor; }\n  .tcon-plus--circle::after {\n    top: 50%;\n    width: 50%;\n    height: 0.33333rem;\n    -webkit-transform: translate(50%, -50%) rotate(90deg);\n            transform: translate(50%, -50%) rotate(90deg); }\n  .tcon-plus--circle.tcon-transform::before {\n    -webkit-transform: translate(50%, -50%) rotate(45deg);\n            transform: translate(50%, -50%) rotate(45deg); }\n  .tcon-plus--circle.tcon-transform::after {\n    -webkit-transform: translate(50%, -50%) rotate(-45deg);\n            transform: translate(50%, -50%) rotate(-45deg); }\n\n.tcon-mail--envelope {\n  width: 40px;\n  height: 20px;\n  background: #3D3F41;\n  position: relative; }\n  .tcon-mail--envelope:before, .tcon-mail--envelope:after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    bottom: 0;\n    top: 0;\n    width: 40px; }\n  .tcon-mail--envelope:before {\n    left: 0;\n    border-left: 40px solid #BCBCBD;\n    border-top: 20px solid transparent; }\n  .tcon-mail--envelope:after {\n    right: 0;\n    border-right: 40px solid #A5ACAE;\n    border-top: 20px solid transparent; }\n  .tcon-mail--envelope.tcon-transform .tcon-mail--envelope__flap {\n    -webkit-transform: rotate3d(360, 0, 0, 180deg);\n            transform: rotate3d(360, 0, 0, 180deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%; }\n\n.tcon-mail--envelope__flap {\n  border-bottom: 10px solid transparent;\n  border-left: 20px solid transparent;\n  border-right: 20px solid transparent;\n  border-color: transparent;\n  border-bottom-color: #AEB3B5;\n  position: absolute;\n  -webkit-transform: rotate3d(0, 0, 0, 0deg);\n          transform: rotate3d(0, 0, 0, 0deg);\n  -webkit-transform-origin: 0 100%;\n          transform-origin: 0 100%;\n  -webkit-transition: 0.2s -webkit-transform ease-in-out;\n  transition: 0.2s -webkit-transform ease-in-out;\n  transition: 0.2s transform ease-in-out;\n  transition: 0.2s transform ease-in-out, 0.2s -webkit-transform ease-in-out;\n  top: -10px;\n  left: 0; }\n\n.tcon-search--xcross.tcon-transform {\n  -webkit-transform: scale3d(0.8, 0.8, 0.8);\n          transform: scale3d(0.8, 0.8, 0.8); }\n  .tcon-search--xcross.tcon-transform .tcon-search__item::before, .tcon-search--xcross.tcon-transform .tcon-search__item::after {\n    border-radius: 0.28571rem;\n    background: currentColor; }\n  .tcon-search--xcross.tcon-transform .tcon-search__item::after {\n    height: 0.4rem;\n    width: 100%;\n    top: 0;\n    right: 0;\n    border: 0;\n    -webkit-transform: rotate3d(0, 0, 1, 90deg);\n            transform: rotate3d(0, 0, 1, 90deg); }\n\n.tcon-vid--play {\n  height: 4rem;\n  padding-top: 0;\n  padding-bottom: 0;\n  width: 4rem;\n  -webkit-transition: 0.375s all ease-in-out;\n  transition: 0.375s all ease-in-out;\n  -webkit-transform-origin: center center;\n          transform-origin: center center; }\n  .tcon-vid--play:after {\n    border-style: solid;\n    border-width: 2rem 0 2rem 2rem;\n    border-color: transparent transparent transparent currentColor;\n    content: \"\";\n    display: block;\n    height: 0;\n    -webkit-transform: translateX(25%);\n            transform: translateX(25%);\n    width: 4rem; }\n  .tcon-vid--play.tcon-transform {\n    background: currentColor;\n    -webkit-transform: rotate(-360deg);\n            transform: rotate(-360deg); }\n\n.tcon-loader--spinner360 {\n  border-radius: 80%;\n  display: block;\n  height: 40px;\n  width: 40px;\n  position: relative;\n  -webkit-animation: tcon-spin360 0.675s linear infinite forwards;\n          animation: tcon-spin360 0.675s linear infinite forwards;\n  background: currentColor; }\n  .tcon-loader--spinner360:before, .tcon-loader--spinner360:after {\n    content: \"\";\n    display: block;\n    position: absolute; }\n  .tcon-loader--spinner360:before {\n    border-radius: 0 90px 90px 0;\n    height: 40px;\n    width: 50%;\n    top: 0;\n    right: 0;\n    z-index: 1;\n    background: currentColor;\n    background-image: -webkit-gradient(linear, left top, left bottom, from(currentColor), to(currentColor));\n    background-image: linear-gradient(currentColor, currentColor); }\n  .tcon-loader--spinner360:after {\n    border-radius: 80%;\n    height: 30px;\n    width: 30px;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    z-index: 1;\n    background: currentColor; }\n\n@-webkit-keyframes tcon-spin360 {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes tcon-spin360 {\n  to {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.tcon-visuallyhidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px; }\n  .tcon-visuallyhidden:active, .tcon-visuallyhidden:focus {\n    clip: auto;\n    height: auto;\n    margin: 0;\n    overflow: visible;\n    position: static;\n    width: auto; }\n";
__$$styleInject(css);

/* global angular */

const transformicons = {
  addrmPlusCheck,
  addrmPlusCircle,
  addrmPlusMinusfold,
  addrmPlusMinusrotate,
  addrmRemoveCheck,
  addrmRemoveChevronDown,
  addrmRemoveChevronLeft,
  addrmRemoveChevronRight,
  addrmRemoveChevronUp,
  gridCollapse,
  gridRearrange,
  indicatorSvgchevron,
  loaderCirclearrow,
  loaderSpinner360,
  mailEnvelope,
  menuArrow360,
  menuArrowleft,
  menuArrowup,
  menuMinus,
  menuXbutterfly,
  menuXcross,
  searchXcross,
  vidPlay,
};

const TRANSFORM_CLASS = 'tcon-transform';

angular.module('hj.transformicons', []);

angular.forEach(transformicons, (template, name) => {
  angular.module('hj.transformicons')
    .directive(name, () => ({
      restrict: 'EA',
      replace: true,
      template: template(),
      scope: {
        bindTransform: '=',
        bindEvents: '=',
      },
      link: ($scope, $element) => {

        $scope.$watch('bindTransform', (transform) => {
          if (transform === true) {
            $element.addClass(TRANSFORM_CLASS);
          } else {
            $element.removeClass(TRANSFORM_CLASS);
          }
        });

        if ($scope.bindEvents) {
          $element.on('click', () => {
            if ($element.hasClass(TRANSFORM_CLASS)) {
              $element.removeClass(TRANSFORM_CLASS);
            } else {
              $element.addClass(TRANSFORM_CLASS);
            }
          });
        }

      },
    }));
});

var main = 'hj.transformicons';

module.exports = main;
