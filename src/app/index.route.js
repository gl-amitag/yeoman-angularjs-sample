export function routerConfig($componentLoaderProvider) {
  'ngInject';
  $componentLoaderProvider.setTemplateMapping(function(name) {
    return `app/${ name }/views/${ name }.html`;
  });
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
