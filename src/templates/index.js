import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div style={{ background: `cyan`, padding: 64 }}>
    <h1>{data.wpPost.title}</h1>
    <div>{data.wpPost.flexibleContent.post}</div>
  </div>
)

export const query = graphql`
  query post($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      title
      slug
      flexibleContent {
        post
      }
    }
  }
`
