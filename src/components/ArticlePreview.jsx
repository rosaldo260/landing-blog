import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ArticlePreview = ({ data }) => {
  return (
    <Link to={`/blog/${data.slug}`}>
      <div className="space-y-4">
        <GatsbyImage
          className="rounded"
          alt={data.title}
          title={data.title}
          image={data.heroImage.gatsbyImageData}
        />
        <div>
          <h3 className="my-3 text-lg font-bold">{data.title}</h3>
          <div className="section-description mb-6">
            <p className="text-blueGray-400">{data.description.description}</p>
          </div>
          <div className="flex items-center">
            <GatsbyImage
              className="h-8 w-8 rounded-full mr-2"
              alt={data.author.name}
              title={data.author.name}
              fluid={data.author.image.fluid}
            />
            <div className="text-sm font-normal text-gray-600 mr-4">
              {data.author.name}
            </div>
            <div className="text-sm font-normal text-gray-600">
              {data.publishDate}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

ArticlePreview.propTypes = {
  data: PropTypes.shape({
    slug: PropTypes.string,
    description: PropTypes.shape({
      description: PropTypes.string,
    }),
    heroImage: PropTypes.shape({
      gatsbyImageData: PropTypes.shape({
        aspectRatio: PropTypes.number,
      }),
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
    publishDate: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string,
      title: PropTypes.string,
      company: PropTypes.string,
      image: PropTypes.shape({
        fluid: PropTypes.shape({
          aspectRatio: PropTypes.number,
        }),
      }),
    }),
  }).isRequired,
}

export default ArticlePreview
