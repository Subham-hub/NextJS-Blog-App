import React from 'react'
import Head from 'next/head'

import AllPosts from '../../components/Posts/AllPosts'
import { getAllPosts } from '../../lib/posts-util'

const AllPostsPage = ({ allPosts }) => (
  <>
    <Head>
      <title>All Posts</title>
      <meta
        name="description"
        content="A list of all programming related posts"
      />
    </Head>
    <AllPosts posts={allPosts} />
  </>
)

export const getStaticProps = () => ({ props: { allPosts: getAllPosts() } })

export default AllPostsPage
