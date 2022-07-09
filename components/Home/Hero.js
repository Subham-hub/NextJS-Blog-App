import React from 'react'
import Image from 'next/image'
import classes from './css/Hero.module.css'

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sub.jpg"
          alt="An image showing sub"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Sub</h1>
      <p>I blog about web development</p>
    </section>
  )
}

export default Hero
