require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const { resolve } = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const {
    data: { allWpPost },
  } = await graphql(/* GraphQL */ `
    {
      allWpPost(sort: { fields: modifiedGmt, order: DESC }) {
        nodes {
          uri
          id
          title
          slug
        }
      }
    }
  `)

  allWpPost.nodes.forEach(async post => {
    await actions.createPage({
      component: resolve(`./src/templates/index.js`),
      path: `/blog/${post.slug}/`,
      context: {
        id: post.id,
      },
    })
  })
}
