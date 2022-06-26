import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import ArticlePreview from '@components/ArticlePreview'
import Layout from '@components/Layout'
import Hero from '../components/hero'

class RootIndex extends React.Component {
  render() {
    // const posts = get(this, 'props.data.allContentfulBlogPost.nodes')
    // const [author] = get(this, 'props.data.allContentfulPerson.nodes')

    // console.log(posts)

    return (
      <Layout location={this.props.location}>
        {/* <Hero
          image={author.heroImage.gatsbyImageData}
          title={author.name}
          // content={author.shortBio}
        /> */}
        {/* <ArticlePreview posts={posts} /> */}
      </Layout>
    )
  }
}

export default RootIndex

// export const pageQuery = graphql`
//   query HomeQuery {
//     allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
//       nodes {
//         title
//         description {
//           childMarkdownRemark {
//             html
//           }
//         }
//         body {
//           childMarkdownRemark {
//             html
//           }
//         }
//         author {
//           name
//           image {
//             gatsbyImageData(
//               layout: CONSTRAINED
//               placeholder: BLURRED
//               width: 100
//             )
//           }
//         }
//         slug
//         publishDate(formatString: "MMMM Do, YYYY")
//         tags
//         heroImage {
//           gatsbyImageData(
//             layout: FULL_WIDTH
//             placeholder: BLURRED
//             width: 424
//             height: 212
//           )
//         }
//       }
//     }
//     allContentfulPerson(
//       filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
//     ) {
//       nodes {
//         name
//         title
//         heroImage: image {
//           gatsbyImageData(
//             layout: CONSTRAINED
//             placeholder: BLURRED
//             width: 1180
//           )
//         }
//       }
//     }
//   }
// `
