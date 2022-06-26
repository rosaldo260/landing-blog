import React from 'react'
import slugify from '@sindresorhus/slugify'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const createJumpLink = (children) => {
  return (
    <a
      href={`#${slugify(children[0])}`}
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

const TableOfContent = ({ body }) => {
  // console.log(body)
  // the body is the json object returned by the rich text field
  const headingTypes = [BLOCKS.HEADING_2]

  const headings = body.content.filter((item) =>
    headingTypes.includes(item.nodeType)
  )

  const document = {
    nodeType: 'document',
    content: headings,
  }

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return <li>{createJumpLink(children)}</li>
      },
      // [BLOCKS.HEADING_3]: (node, children) => {
      //   return <h3>{createJumpLink(children)}</h3>
      // },
    },
  }

  return (
    <div className="section-table">
      <div className="section-sticky">
        <div className="text-sm font-bold">Contents</div>
        <ul>{documentToReactComponents(document, options)}</ul>
      </div>
    </div>
  )
}

export default TableOfContent
