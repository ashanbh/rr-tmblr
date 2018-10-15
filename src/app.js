import PostsList from './controllers/PostsList.js';
import PostsListItem from './controllers/PostsListItem.js';
import Search from './controllers/Search.js';
import htmlTmpl from './views/App.html';

angular.module('rr-tumblr', [])
// I'm sure there is a better way to do this but in webpack I'm going to do this for now
.component('search', Search)
.component('posts', PostsList)
.component('post', PostsListItem)
.component('app', {
  controller: function($scope) {
    $scope.posts = [];
    this.blogInfo = {};
    this.whiteListTypes = ['text', 'photo', 'video'];
    this.onSearch = (posts) => {
      $scope.$apply(() => {
        $scope.posts = posts.filter((post) => {
          return ~(this.whiteListTypes.indexOf(post.type));
        });
        console.log('something was searched!', posts);
      })
    
    }
  },
  template: htmlTmpl
});