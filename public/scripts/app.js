'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])// push above factory and also make all requests XMLHttpRequest
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
  }])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider', '$locationProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider, $locationProvider) {
    if(window.history && window.history.pushState){
        $locationProvider.html5Mode(true);
    }
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard');

    $stateProvider
      .state('home', {
        url:'',
        controller: 'MainCtrl',
        templateUrl: '/home',
        resolve: {
          loadMyDirectives:function($ocLazyLoad){
            return $ocLazyLoad.load(
            {
                name:'sbAdminApp',
                files:[
                '/scripts/controllers/main.js',
                '/scripts/directives/header/header.js',
                '/scripts/directives/header/header-notification/header-notification.js',
                '/scripts/directives/sidebar/sidebar.js',
                '/scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                ]
            }),
            $ocLazyLoad.load(
            {
               name:'toggle-switch',
               files:["/bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                      "/bower_components/angular-toggle-switch/angular-toggle-switch.css"
                  ]
            }),
            $ocLazyLoad.load(
            {
              name:'ngAnimate',
              files:['/bower_components/angular-animate/angular-animate.js']
            })
            $ocLazyLoad.load(
            {
              name:'ngCookies',
              files:['/bower_components/angular-cookies/angular-cookies.js']
            })
            $ocLazyLoad.load(
            {
              name:'ngResource',
              files:['/bower_components/angular-resource/angular-resource.js']
            })
            $ocLazyLoad.load(
            {
              name:'ngSanitize',
              files:['/bower_components/angular-sanitize/angular-sanitize.js']
            })
            $ocLazyLoad.load(
            {
              name:'ngTouch',
              files:['/bower_components/angular-touch/angular-touch.js']
            })
          }
        }
    })
      .state('home.dashboard',{
        url:'/dashboard',
        templateUrl:'/dashboard',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              '/scripts/directives/timeline/timeline.js',
              '/scripts/directives/notifications/notifications.js',
              '/scripts/directives/chat/chat.js',
              '/scripts/directives/dashboard/stats/stats.js'
              ]
            })
          }
        }
      })
      .state('home.appearance_widgets',{
        templateUrl:'/appearance/widgets',
        url:'/appearance/widgets'
      })
      .state('home.appearance_plugins',{
        templateUrl:'/appearance/plugins',
        url:'/appearance/plugins'
      })
      .state('home.appearance_themes',{
        templateUrl:'/appearance/themes',
        url:'/appearance/themes'
      })
      .state('home.appearance_layouts',{
        templateUrl:'/appearance/layouts',
        url:'/appearance/layouts'
      })
      .state('home.appearance_menus',{
        templateUrl:'/appearance/menus',
        url:'/appearance/menus'
      })
      .state('home.forms_add',{
        templateUrl:'/forms/add',
        url:'/forms/add'
      })
      .state('home.forms_list',{
        templateUrl:'/forms/list',
        url:'/forms/list'
      })
      .state('home.forms_edit',{
        templateUrl:'/forms/edit',
        url:'/forms/edit'
      })
      .state('home.api_add',{
        templateUrl:'/api/add',
        url:'/api/add'
      })
      .state('home.api_list',{
        templateUrl:'/api/list',
        url:'/api/list'
      })
      .state('home.api_edit',{
        templateUrl:'/api/edit',
        url:'/api/edit'
      })
      .state('home.users_add',{
        templateUrl:'/users/add',
        url:'/users/add'
      })
      .state('home.users_list',{
        templateUrl:'/users/list',
        url:'/users/list'
      })
      .state('home.users_edit',{
        templateUrl:'/users/edit',
        url:'/users/edit'
      })
      .state('home.logic_add',{
        templateUrl:'/logic/add',
        url:'/logic/add'
      })
      .state('home.logic_list',{
        templateUrl:'/logic/list',
        url:'/logic/list'
      })
      .state('home.logic_edit',{
        templateUrl:'/logic/edit',
        url:'/logic/edit'
      })
      .state('home.database',{
        templateUrl:'/database',
        url:'/database'
      })
      .state('home.analytics',{
        templateUrl:'/analytics',
        url:'/analytics',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                '/bower_components/angular-chart.js/dist/angular-chart.min.js',
                '/bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['/scripts/controllers/chartContoller.js']
            })
          }
        }
      })
      .state('home.crons',{
        templateUrl:'/crons',
        url:'/crons'
      })
      .state('home.cache',{
          templateUrl:'/cache',
          url:'/cache'
      })
      .state('home.apps',{
        templateUrl:'/apps',
        url:'/apps'
      })
    }]);

    
