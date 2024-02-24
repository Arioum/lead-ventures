import Button from '../../components/Button/Button';
import LogoBekis from '/assets/portfolio-logos/bekis.svg';
import LogoDonsee from '/assets/portfolio-logos/donsee.svg';
import LogoUpLite from '/assets/portfolio-logos/up-lite.svg';
import LogoLmpGroup from '/assets/portfolio-logos/lmp-group.svg';
import LogoFunland from '/assets/portfolio-logos/funland.svg';
import LogoKalinGo from '/assets/portfolio-logos/kalin-go.svg';
import LogoDigvent from '/assets/portfolio-logos/digvent.svg';
import LogoJvMotors from '/assets/portfolio-logos/jv-motors.svg';
import LogoMaltov from '/assets/portfolio-logos/maltov.svg';
import LogoBanfari from '/assets/portfolio-logos/banfari.svg';
import LogoLoav from '/assets/portfolio-logos/loav.svg';
import LogoGriff from '/assets/portfolio-logos/griff.svg';
import LogoLabelvale from '/assets/portfolio-logos/labelvale.svg';
import classes from './portfolio.module.scss';

const Portfolio = () => {
  return (
    <section className={classes.portfolio}>
      <h3>Our Portfolio</h3>
      <p>
        We invest in companies that represent the future. We source and evaluate
        the most innovative companies and help them succeed.
      </p>
      <div className={classes.portfolio__grid}>
        <div className={classes.portfolio__grid__col}>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoBekis} alt='Bekis' />
          </div>
        </div>
        <div className={classes.portfolio__grid__col}>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoDonsee} alt='Donsee' />
          </div>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoUpLite} alt='Uplite' />
          </div>
        </div>
        <div className={classes.portfolio__grid__col}>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoLmpGroup} alt='Lmp Group' />
          </div>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoFunland} alt='Funland' />
          </div>
        </div>
        <div className={classes.portfolio__grid__col}>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoKalinGo} alt='Kalin.go' />
          </div>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoDigvent} alt='Digvent' />
          </div>
        </div>
        <div className={classes.portfolio__grid__col}>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoJvMotors} alt='Jv Motors' />
          </div>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoMaltov} alt='Maltov' />
          </div>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoBanfari} alt='Banfari' />
          </div>
        </div>
        <div className={classes.portfolio__grid__col}>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoLoav} alt='Loav' />
          </div>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoGriff} alt='Griff' />
          </div>
        </div>
        <div className={classes.portfolio__grid__col}>
          <div className={classes.portfolio__grid__col__item}>
            <img src={LogoLabelvale} alt='Labelvale' />
          </div>
        </div>
      </div>
      <Button size='large' variant='primary'>
        View more Companies
      </Button>
      <p>
        Expertise gives us a deep understanding of opportunity, performance, and
        potential for growth. Our team’s unique industry insight, financial
        expertise, and deep technical competence are unparalleled.
      </p>
    </section>
  );
};

export default Portfolio;
