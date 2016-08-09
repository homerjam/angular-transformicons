import './transformicons.scss';

let transformicons = [
  'addrm-plus-check',
  'addrm-plus-circle',
  'addrm-plus-minusfold',
  'addrm-plus-minusrotate',
  'addrm-remove-check',
  'addrm-remove-chevron-down',
  'addrm-remove-chevron-left',
  'addrm-remove-chevron-right',
  'addrm-remove-chevron-up',
  'grid-collapse',
  'grid-rearrange',
  'indicator-svgchevron',
  'loader-circlearrow',
  'loader-spinner360',
  'mail-envelope',
  'menu-arrow360',
  'menu-arrowleft',
  'menu-arrowup',
  'menu-minus',
  'menu-xbutterfly',
  'menu-xcross',
  'search-xcross',
  'vid-play',
];

// http://stackoverflow.com/questions/2970525/converting-any-string-into-camel-case
function camelize (str) {
  return str.replace(/(_|-)/g, ' ').replace(/(?:^\w|[A-Z]|\b\w)/g, function (letter, index) {
    return index === 0 ? letter.toLowerCase() : letter.toUpperCase();
  }).replace(/\s+/g, '');
}

transformicons = transformicons.map(template => {
  return {
    name: camelize(template),
    template: require('Transformicons/site/templates/includes/tcons/' + template + '.hbs'),
  };
});

const TRANSFORM_CLASS = 'tcon-transform';

angular.module('hj.transformicons', []);

transformicons.forEach(transformicon => {
  angular.module('hj.transformicons')
    .directive(transformicon.name, () => {
      return {
        restrict: 'EA',
        replace: true,
        template: transformicon.template,
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
      };
    });
});

export default 'hj.transformicons';
