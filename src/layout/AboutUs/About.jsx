import Button from '../../components/Button/Button';
import classes from './about.module.scss';
import AboutUsSVG from '../../assets/about-us-graphic.svg';

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.about__sectionLeft}>
        <h3>About Us</h3>
        <p className='h3paragraph'>
          We deliver a unique formula of direct capital investment combined with
          investor introduction, legal and strategy services to high-caliber
          startups from pre-seed to Series B.
        </p>
        <Button variant='primary' size='medium'>
          Learn More
        </Button>
      </div>
      <div className={classes.about__sectionRight}>
        <img src={AboutUsSVG} alt='' />
      </div>
    </section>
  );
};

export default About;
