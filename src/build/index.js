const axios = require("axios");

// dev.to api for posts: "https://dev.to/api/articles?username=cdvillard&tag=cdvillard"
// github content api: "https://api.github.com/repos/cdvillard/cdvillard/contents/src/blog/posts"


// Retrieves all posts
async function getAllPosts (url) {
  const endpoint = url;
  try {
    const { data } = await axios.get(endpoint);
    return data;
  } catch (e) {
    errorHandler(e);
  }
}

// Retrieves specific zero-indexed post from an expected GitHub Content API endpoint
async function getPostFromGitHubByIndex (url, index) {
  try {
    const posts = await getAllPosts(url);
    const { data } = await axios.get(posts[index].download_url);
    return data;
  } catch (e) {
    errorHandler(e);
  }
}

function errorHandler (e) {
    console.debug('axios failed', e);
}

// Gets all ids of returned posts, assuming property is present in the object
async function getPostIds (url) {
  try {
    const ids = await getAllPosts(url)
      .then(response => {
        return response.map(post => post.id);
      });
    return ids;
  } catch(e) {
    errorHandler(e);
  }
};

// TO-DOs
// [ ] Collect all posts from dev.to api (see commented URL at top)
// [ ] Create md file for each dev.to post collected
// [ ] Dynamically generate a page per post rendering content
// [ ] Finish custom script posting to Dev.to
// [ ] Create post describing all of this nonesense and test cross-post
// [ ] Share this code for critique/ridicule and home someone fixes it