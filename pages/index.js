import React from 'react'
import Head from 'next/head'

import FeaturedPosts from '../components/Home/FeaturedPosts'
import Hero from '../components/Home/Hero'
import { getFeaturedPosts } from '../lib/posts-util'

const HomePage = ({ featuredPosts }) => {
  return (
    <>
      <Head>
        <title>Sub's blog</title>
        <meta
          name="description"
          content="I post about programming and web dev"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </>
  )
}

export const getStaticProps = () => ({
  props: { featuredPosts: getFeaturedPosts() },
})

export default HomePage
