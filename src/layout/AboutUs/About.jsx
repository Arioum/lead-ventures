import React from 'react'
import Button from '../../components/Button/Button'
import classes from './about.module.scss'
import AboutUsSVG from '../../assets/about-us-graphic.svg'

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.about__sectionLeft}>
        <h2>About Us</h2>
        <h4>We deliver a unique formula of direct capital investment combined with investor introduction, legal and strategy services to high-caliber startups from pre-seed to Series B.</h4>
        <Button variant='primary' size='medium'>Learn More</Button>
      </div>
      <div className={classes.about__sectionRight}>
        <img src={AboutUsSVG} alt="" />
      </div>
    </section>
  )
}

export default About