import Button from "../../components/Button/Button";
import DotPatternSVG from "../../assets/dot-pattern.svg";
import MouseSVG from "../../assets/mouse-scroll.svg";
import classes from "./hero.module.scss";

const Hero = () => {
  return (
    <header className={classes.header}>
      <section className={classes.sectionTop}>
        <div className={classes.header__text}>
          <h1>
            <span>We</span>
            <br />
            Invest in world-changing startups
          </h1>
          <h2>
            Join leading investors funding the next wave of world-changing
            startups.
          </h2>
          <Button variant='primary' size='medium'>
            Learn more
          </Button>
        </div>
        <div className={classes.header__img}>
          <img src={DotPatternSVG} alt='' />
        </div>
      </section>
      <section className={classes.sectionBottom}>
        <img src={MouseSVG} alt='' width={24} />
      </section>
    </header>
  );
};

export default Hero;
