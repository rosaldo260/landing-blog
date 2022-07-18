import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Config } from '@constants'
import HelmetHelper from '@components/HelmetHelper'
import Layout from '@components/Layout'
import ArticlePreview from '@components/ArticlePreview'
import BottomCta from '@components/BottomCta'
import Typography from '@atoms/Typography'

const BlogIndex = (props) => {
  const posts = get(props, 'data.allContentfulBlogPost.nodes')

  return (
    <Layout>
      <div className="relative bg-white">
        <HelmetHelper
          title={`LinkedIn Outreach, Automation & Growth Blog - ${Config.NAME}`}
          description={`${Config.NAME}'s blog on LinkedIn outreach, automation & growth helps agencies, sales teams, startups, and recruiters to scale LinkedIn outreach.`}
        />
        <div className="py-16 px-5 text-center bg-white">
          <Typography.H1>The {Config.NAME} Blog</Typography.H1>
          <Typography.SUBHEADER component="h2">
            Learn how to leverage LinkedIn outreach to generate more businesses
            opportunities with detailed tutorials and case studies.
          </Typography.SUBHEADER>
        </div>
        <div className="max-w-7xl mx-auto pb-20 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {posts.map((post) => (
              <div key={post.slug}>
                <ArticlePreview data={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <BottomCta />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        author {
          name
          title
          company
          image {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              width: 60
              height: 60
            )
          }
        }
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            placeholder: BLURRED
            height: 220
            width: 400
            layout: FULL_WIDTH
          )
        }
        description {
          description
        }
      }
    }
  }
`
