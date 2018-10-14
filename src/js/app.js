import 'whatwg-fetch';
import API_KEY from './config.js';

window.onload = () => {
  window.fetch('https://api.tumblr.com/v2/blog/onetinyhand/posts?api_key=' + API_KEY)
  .then((data) => {
    return data.json();
  })
  .then ((results) => {
    console.log('here are results:', results);
  })
  .catch((error) => {
    console.log('uh oh an error occurred:', error);
  })
  console.log('hello world!');
}