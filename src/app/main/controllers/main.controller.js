/**
 *
 * @memberof SampleApp
 * @ngdoc Controller
 * @name MainController
 *
 * @description MainController.
 */
export class MainController {
  /**
   * MainController Initializer
   *
   * @param  {Module} $timeout - $timeout Module
   * @param  {Module} webDevTec - webDevTec Module
   * @param  {Module} toastr - toastr Module
   */
  constructor ($timeout, webDevTec, toastr) {
    'ngInject';

    this.awesomeThings = [];
    this.classAnimation = '';
    this.creationDate = 1482817755064;
    this.toastr = toastr;
    this.$timeout = $timeout;
    this.webDevTec = webDevTec;

    this.activate();
  }

  /**
   * TBD activate
   *
   * @return {Boolean} - True/False.
   */
  activate() {
    this.getWebDevTec(this.webDevTec);
    this.$timeout(() => {
      this.classAnimation = 'rubberBand';
    }, 4000);
  }

  /**
   * TBD getWebDevTec
   *
   * @param  {Object} webDevTec - Test
   * @return {Boolean} - True/False.
   */
  getWebDevTec(webDevTec) {
    this.awesomeThings = webDevTec.getTec();

    angular.forEach(this.awesomeThings, (awesomeThing) => {
      awesomeThing.rank = Math.random();
    });
  }

  showToastr() {
    this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    this.classAnimation = '';
  }
}
