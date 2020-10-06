import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => (
  <div style={{ background: `cyan`, padding: 64 }}>{data.wpPost.title}</div>
)

export const query = graphql`
  query post($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      title
      slug
    }
  }
`
