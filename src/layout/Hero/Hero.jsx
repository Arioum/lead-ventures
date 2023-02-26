import React from 'react'
import Button from '../../components/Button/Button'
import DotPatternSVG from '../../assets/dot-pattern.svg'
import classes from './hero.module.scss'

const Hero = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__text}>
        <h1>
          <span>We</span><br />
          Invest in world-changing startups
        </h1>
        <h2>Join leading investors funding the next wave of world-changing startups.</h2>
        <Button variant='primary' size='medium'>Learn more</Button>
      </div>
      <div className={classes.header__img}>
        <img src={DotPatternSVG} alt="" />
      </div>
    </header>
  )
}

export default Hero