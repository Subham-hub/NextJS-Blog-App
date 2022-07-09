import React from 'react'
import PostsGrid from '../Posts/PostsGrid'

import classes from './css/FeaturedPosts.module.css'

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={classes.latest}>
      <h2>FeaturedPosts</h2>
      <PostsGrid posts={posts} />
    </section>
  )
}

export default FeaturedPosts
