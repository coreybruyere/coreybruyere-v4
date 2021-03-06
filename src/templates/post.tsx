import * as React from 'react'
import { graphql } from 'gatsby'
/** @jsx jsx */
import { jsx, Link } from 'theme-ui'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

interface PostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: {
          name: string
          url: string
        }
      }
    }
    markdownRemark: {
      html: string
      excerpt: string
      frontmatter: {
        title: string
        tags: string[]
      }
    }
  }
}

const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => (
  <IndexLayout title={data.markdownRemark.frontmatter.title} description={data.markdownRemark.excerpt}>
    <Page>
      <Container>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <h2>Post</h2>
        {data.markdownRemark.frontmatter.tags &&
          data.markdownRemark.frontmatter.tags.map(tag => (
            <Link px={2} href={`/tags/${tag}`}>
              {tag}
            </Link>
          ))}
        {/* eslint-disable-next-line react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
    </Page>
  </IndexLayout>
)

export default PostTemplate

export const query = graphql`
  query PostTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        tags
      }
    }
  }
`
