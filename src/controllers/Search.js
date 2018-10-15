import htmlTmpl from '../views/Search.html';
import Posts from '../models/Posts.js';

export default {
  controller: function($scope) {
    $scope.submit = () => {
      console.log('something happened', $scope.text, $scope.$parent.$ctrl);
      if ($scope.text && $scope.text.trim() !== '') {
        Posts.fetch($scope.text.trim()).then(({blogInfo, posts}) => {
        document.querySelector('.postList').innerHTML = '';
        if (posts.length) {
          posts.map((post) => {
            if (post.type === 'photo') {
              const img = document.createElement('img');
              img.src = post.photos[0].alt_sizes[0].url;
              document.querySelector('.postList').appendChild(img);
            }
            
         });
        } else {
          document.querySelector('.postList').innerHTML = 'Could not display!';
        }
        
        }).catch(({error}) => {
          document.querySelector('.postList').innerHTML = 'Could not display!';
        });
      }
      $scope.text = '';
    }
  },
  template: htmlTmpl
}
