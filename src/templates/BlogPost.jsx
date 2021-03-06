import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { BLOCKS, INLINES } from '@contentful/rich-text-types'
import slugify from '@sindresorhus/slugify'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { parseHtml } from 'contentful-html-rich-text-converter'
import { getImagePath } from '@utils'
import { GatsbyImage } from 'gatsby-plugin-image'
import HelmetHelper from '@components/HelmetHelper'
import TableOfContents from '@components/TableOfContent'
import Layout from '@components/Layout'
import BottomCta from '@components/BottomCta'
import sampleSize from 'lodash/sampleSize'
import ArticleMiniPreview from '@components/ArticleMiniPreview'
import Typography from '@atoms/Typography'
// import * as styles from './blog-post.module.css'

const getSubstring = (str = '') => str.substring(0, 155)

const createExternalLink = (node, children) => {
  return (
    <a
      href={node.data.uri}
      rel="noopenner noreferrer"
      target="_blank"
      className="
        relative
        before:md:content-['#']
        before:absolute
        before:inset-x-hash
        before:text-md
        before:text-gray-300
        hover:md:before:content-['#']
        hover:before:text-brand-default"
    >
      {children}
    </a>
  )
}

const createLandLink = (children) => {
  return (
    <a
      rel={`#${slugify(children[0])}`}
      className="
        relative
        before:md:content-['#']
        before:absolute
        before:inset-x-hash
        before:text-md
        before:text-gray-300
        hover:md:before:content-['#']
        hover:before:text-brand-default"
    >
      {children}
    </a>
  )
}

const BlogPostTemplate = (props) => {
  const post = get(props, 'data.contentfulBlogPost')

  const allSimilarPosts = get(props, 'data.similarPosts.nodes')
  const sampleSimilarPosts = sampleSize(allSimilarPosts, 4)

  const bodyRichText = parseHtml(post.body.childMarkdownRemark.html)

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2>{createLandLink(children)}</h2>
      },
      [BLOCKS.HEADING_3]: (node, children) => {
        return <h3>{createLandLink(children)}</h3>
      },
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        // find the asset in the assetMap by ID
        const asset = node.data.target.fields

        // render the asset accordingly
        return <img src={asset.file.url} alt={asset.title} />
      },
      [INLINES.HYPERLINK]: (node, children) => {
        return createExternalLink(node, children)
      },
    },
  }

  const header = (
    <div className="max-w-screen-md mx-auto">
      <div className="flex items-center justify-between pb-6 sm:pb-8">
        <div>
          <h1 className="text-3xl sm:text-5xl md:text-6-2/3xl font-bold mt-5 mb-4 sm:mb-5 leading-snug">
            {post.title}
          </h1>

          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <GatsbyImage
                className="h-8 w-8 rounded-full mr-2"
                alt={post.author.name}
                title={post.author.name}
                image={post.author.image.gatsbyImageData}
              />
              <div className="text-sm sm:text-md text-gray-700">
                {post.author.name}
              </div>
            </div>
            <div className="text-sm sm:text-md text-gray-700">
              {post.publishDate}
            </div>
            <div className="text-sm sm:text-md text-gray-700 capitalize">
              {post.tags[0]}
            </div>
          </div>
        </div>
      </div>

      <GatsbyImage
        className="hidden sm:flex mx-auto max-w-3xl rounded-xl"
        alt={post.title}
        title={post.title}
        image={post.heroImage.gatsbyImageData}
      />
    </div>
  )

  const body = (
    <div className="section-content max-w-screen-md mx-auto">
      {bodyRichText && documentToReactComponents(bodyRichText, options)}
    </div>
  )

  return (
    <Layout location={props.location}>
      <HelmetHelper
        title={post.title}
        description={getSubstring(post.description.description)}
        image={getImagePath(post.heroImage.resize.src)}
      >
        <meta property="og:type" content="article" />
      </HelmetHelper>
      <div className="pt-8 pb-0">
        {header}
        <div className="md:flex py-6">
          <TableOfContents body={bodyRichText} />
          {body}
          <div className="section-placeholder" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-14">
        <div className="mb-6">
          <Typography.H2>Related posts</Typography.H2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {sampleSimilarPosts.map((similarPost) => (
            <div key={post.slug}>
              <ArticleMiniPreview data={similarPost} />
            </div>
          ))}
        </div>
      </div>

      <BottomCta />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
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
      body {
        childMarkdownRemark {
          html
        }
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      tags
      description {
        description
      }
    }
    similarPosts: allContentfulBlogPost(filter: { slug: { ne: $slug } }) {
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
            height: 110
            width: 200
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
