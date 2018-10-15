import htmlTmpl from '../views/Search.html';
import Posts from '../models/Posts.js';
import { debug } from 'util';

export default {
  bindings: {
    'onSearch': '<'
  },
  controller: function($scope) {
    $scope.submit = () => {
      console.log('something happened', $scope.text);
      if ($scope.text && $scope.text.trim() !== '') {
        Posts.fetch($scope.text.trim()).then(({blogInfo, posts}) => {
        if (posts.length) {
          this.onSearch(posts);
        } else {
        }
        
        }).catch(({error}) => {
        });
      }
      $scope.text = '';
    }
  },
  template: htmlTmpl
}
