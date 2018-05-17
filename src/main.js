/* global angular */

import addrmPlusCheck from 'transformicons/site/templates/includes/tcons/addrm-plus-check.hbs';
import addrmPlusCircle from 'transformicons/site/templates/includes/tcons/addrm-plus-circle.hbs';
import addrmPlusMinusfold from 'transformicons/site/templates/includes/tcons/addrm-plus-minusfold.hbs';
import addrmPlusMinusrotate from 'transformicons/site/templates/includes/tcons/addrm-plus-minusrotate.hbs';
import addrmRemoveCheck from 'transformicons/site/templates/includes/tcons/addrm-remove-check.hbs';
import addrmRemoveChevronDown from 'transformicons/site/templates/includes/tcons/addrm-remove-chevron-down.hbs';
import addrmRemoveChevronLeft from 'transformicons/site/templates/includes/tcons/addrm-remove-chevron-left.hbs';
import addrmRemoveChevronRight from 'transformicons/site/templates/includes/tcons/addrm-remove-chevron-right.hbs';
import addrmRemoveChevronUp from 'transformicons/site/templates/includes/tcons/addrm-remove-chevron-up.hbs';
import gridCollapse from 'transformicons/site/templates/includes/tcons/grid-collapse.hbs';
import gridRearrange from 'transformicons/site/templates/includes/tcons/grid-rearrange.hbs';
import indicatorSvgchevron from 'transformicons/site/templates/includes/tcons/indicator-svgchevron.hbs';
import loaderCirclearrow from 'transformicons/site/templates/includes/tcons/loader-circlearrow.hbs';
import loaderSpinner360 from 'transformicons/site/templates/includes/tcons/loader-spinner360.hbs';
import mailEnvelope from 'transformicons/site/templates/includes/tcons/mail-envelope.hbs';
import menuArrow360 from 'transformicons/site/templates/includes/tcons/menu-arrow360.hbs';
import menuArrowleft from 'transformicons/site/templates/includes/tcons/menu-arrowleft.hbs';
import menuArrowup from 'transformicons/site/templates/includes/tcons/menu-arrowup.hbs';
import menuMinus from 'transformicons/site/templates/includes/tcons/menu-minus.hbs';
import menuXbutterfly from 'transformicons/site/templates/includes/tcons/menu-xbutterfly.hbs';
import menuXcross from 'transformicons/site/templates/includes/tcons/menu-xcross.hbs';
import searchXcross from 'transformicons/site/templates/includes/tcons/search-xcross.hbs';
import vidPlay from 'transformicons/site/templates/includes/tcons/vid-play.hbs';

import './style.scss';

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
        bindTransform: '=?',
        bindEvents: '=?',
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

export default 'hj.transformicons';
