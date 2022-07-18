import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const ArticleMiniPreview = ({ data }) => {
  return (
    <Link to={`/blog/${data.slug}`}>
      <div className="flex items-center">
        <div className="w-3/5 pr-4">
          <h3 className="my-3 text-lg font-bold">{data.title}</h3>
          <div className="section-description mb-4">
            <p className="text-md text-blueGray-400">
              {data.description.description}
            </p>
          </div>
          <div className="text-xs font-normal text-gray-600">
            {data.publishDate}
          </div>
        </div>
        <div className="w-2/5 p-1">
          <GatsbyImage
            className="rounded"
            alt={data.title}
            title={data.title}
            image={data.heroImage.gatsbyImageData}
          />
        </div>
      </div>
    </Link>
  )
}

ArticleMiniPreview.propTypes = {
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

export default ArticleMiniPreview
