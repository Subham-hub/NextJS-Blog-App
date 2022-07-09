import React from 'react'
import PostItem from './PostItem'
import classes from './css/PostGrid.module.css'

const PostsGrid = ({ posts }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} {...post} />
      ))}
    </ul>
  )
}

export default PostsGrid
