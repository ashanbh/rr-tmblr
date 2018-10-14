import htmlTmpl from '../views/PostsList.html';

export default {
    bindings: {
      posts: '='
    },
    controller: function($scope) {
      console.log('rerendering..');
    },
  template: htmlTmpl
}