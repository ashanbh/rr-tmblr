import 'whatwg-fetch';
import API_KEY from '.././config.js';

const fetchData = (blogName) => {
  return window.fetch('https://api.tumblr.com/v2/blog/' + blogName + '/posts?api_key=' + API_KEY)
  .then((data) => {
    return data.json();
  })
  .then ((results) => {
    if (results.response && results.response.blog && results.response.posts) {
      const {blog: blogInfo, posts} = results.response;
      return {blogInfo, posts};
    } else {
      throw 'Cannot parse tumblr response';
    }
  })
  .catch((error) => {
    return {error}
  });
}

export default fetchData;