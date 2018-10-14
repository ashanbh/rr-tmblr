import fetchData from '../helpers/tumblrFetcher.js';

export default {
   fetch: function(blogName) {
    return fetchData(blogName);
   },
};
