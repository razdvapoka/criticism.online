import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Markdown from "react-markdown"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data: { contentfulPage: pageData } }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <h1 className="">{pageData.title}</h1>
      <p>{pageData.description}</p>
      <Markdown>{pageData.content.content}</Markdown>
    </Layout>
  )
}

export const query = graphql`
  {
    contentfulPage(title: { eq: "main" }) {
      description
      title
      content {
        content
      }
    }
  }
`

export default IndexPage
