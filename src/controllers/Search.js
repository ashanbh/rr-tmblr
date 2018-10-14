import htmlTmpl from '../views/Search.html';
import Posts from '../models/Posts.js';

export default {
  bindings: {
    'posts': '='
  },
  controller: function($scope) {
    debugger;
    $scope.submit = () => {
      debugger;
      console.log('something happened', $scope.text, $scope.$parent.$ctrl);
      if ($scope.text && $scope.text.trim() !== '') {
        Posts.fetch($scope.text.trim()).then(({blogInfo, posts}) => {
          // $scope.posts.error = null;
          // $scope.posts.blogInfo = blogInfo;
          console.log(this.posts);
          this.posts = posts;
        }).catch(({error}) => {
          $scope.$parent.$ctrl.error = error;
        });
      }
      $scope.text = '';
    }
  },
  template: htmlTmpl
}
