import React from 'react'
import Head from 'next/head'

import PostContent from '../../components/Posts/PostDetails/PostContent'
import { getPostData, getPostsFiles } from '../../lib/posts-util'

const PostDetailPage = ({ post }) => (
  <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content={post.excerpt} />
    </Head>
    <PostContent post={post} />
  </>
)

export const getStaticProps = (context) => ({
  props: { post: getPostData(context.params.slug) },
  revalidate: 600,
})

export const getStaticPaths = () => {
  const postFilesName = getPostsFiles()
  const slugs = postFilesName.map((fileName) => fileName.replace(/\.md$/, ''))
  return { paths: slugs.map((slug) => ({ params: { slug } })), fallback: false }
}

export default PostDetailPage
