import htmlTmpl from '../views/Search.html';
import Posts from '../models/Posts.js';

export default {
  controller: function($scope) {
    $scope.submit = () => {
      console.log('something happened', $scope.text, $scope.$parent.$ctrl);
      if ($scope.text.trim() !== '') {
        Posts.fetch($scope.text.trim()).then(({blogInfo, posts}) => {
          $scope.$parent.$ctrl.error = null;
          $scope.$parent.$ctrl.blogInfo = blogInfo;
          $scope.$parent.$ctrl.posts = posts;
        }).catch(({error}) => {
          $scope.$parent.$ctrl.error = error;
        });
      }
      $scope.text = '';
    }
  },
  template: htmlTmpl
}
