// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require("axios");

const endpoint = "https://dev.to/api/articles/";

function errorHandler(e) {
  console.debug("axios failed", e);
}

async function getPostIds(username) {
  try {
    const { data } = await axios.get(
      `${endpoint}?username=${username}&tag=${username}`
    );
    return data.map(entry => {
      return entry.id;
    });
  } catch (e) {
    errorHandler(e);
  }
}

async function getPostContents(username) {
  try {
    const ids = await getPostIds(username);
    let posts = [];
    for (let id of ids) {
      const { data } = await axios.get(`${endpoint}${id}`);
      posts.push(data);
    }

    return posts;
  } catch (e) {
    errorHandler(e);
  }
}

module.exports = function(api) {
  api.loadSource(async store => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api
    const posts = await getPostContents("cdvillard");

    console.log(posts);

    const contentType = store.addContentType({
      typeName: "DevPosts"
    });

    for (const item of posts) {
      contentType.addNode({
        id: item.id,
        title: item.title,
        description: item.description,
        cover_image: item.cover_image,
        publish_date: item.readable_publish_date,
        tag_list: item.tag_list,
        slug: item.slug,
        canonical_url: item.canonical_url,
        body: item.body_html
      });
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api
  });
};
