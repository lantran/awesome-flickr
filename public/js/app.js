/**
 * Created by lantran on 5/26/14.
 */

angular.module('flickr', ['ngRoute', 'flickrServices'] )
    .config(flickrRouter);

function flickrRouter($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'partials/main.html',
            controller: function($scope){
            }
        })
}