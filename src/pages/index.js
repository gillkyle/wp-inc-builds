import React from "react"
import { graphql, Link } from "gatsby"

export default function Home({ data }) {
  return (
    <div>
      Hello world!
      {data.allWpPost.nodes.map(post => (
        <div>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  query HomePage {
    allWpPost(sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        slug
        uri
      }
    }
  }
`
