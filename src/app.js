import Search from './controllers/Search.js';
import htmlTmpl from './views/App.html';

angular.module('rr-tumblr', [])
// I'm sure there is a better way to do this but in webpack I'm going to do this for now
.component('search', Search)
.component('app', {
  controller: function($scope) {
    this.posts = [];
    this.blogInfo = {};
  },
  template: htmlTmpl
});