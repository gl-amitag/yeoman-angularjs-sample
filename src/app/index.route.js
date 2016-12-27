export function routerConfig($componentLoaderProvider, $locationProvider) {
  'ngInject';
  $componentLoaderProvider.setTemplateMapping(function(name) {
    return `app/${ name }/views/${ name }.html`;
  });
  $locationProvider.html5Mode(true);
}
/**
 *
 * @memberof SampleApp
 * @ngdoc Controller
 * @name RouterController
 *
 * @description RouterController.
 */
export class RouterController {
  constructor($router) {
    'ngInject';
    $router.config([
      { path: '/', component: 'main' }
    ]);
  }
}
