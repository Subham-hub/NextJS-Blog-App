import React from 'react'
import Image from 'next/image'
import PostHeader from './PostHeader'
import ReactMarkdown from 'react-markdown'
import classes from './css/PostContent.module.css'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark'
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'

SyntaxHighlighter.registerLanguage('js', js)
SyntaxHighlighter.registerLanguage('css', css)

const PostContent = ({ post }) => {
  const customRenderes = {
    // image(image) {
    //   return (
    //     <Image
    //       src={'/images/posts/' + post.slug + '/' + image.src}
    //       alt={image.alt}
    //       width="600"
    //       height="300"
    //     />
    //   )
    // },

    paragraph(paragraph) {
      const { node } = paragraph
      if (node.children[0].type === 'image') {
        const image = node.children[0]
        return (
          <div className={classes.image}>
            <Image
              src={'/images/posts/' + post.slug + '/' + image.url}
              alt={image.alt}
              width="600"
              height="300"
            />
          </div>
        )
      }
      return <p>{paragraph.children}</p>
    },
    code(code) {
      const { language, value } = code
      return (
        <SyntaxHighlighter
          language={language}
          children={value}
          style={atomDark}
        />
      )
    },
  }
  return (
    <article className={classes.content}>
      <PostHeader
        title={post.title}
        image={`/images/posts/${post.slug}/${post.image}`}
      />
      <ReactMarkdown renderers={customRenderes}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
