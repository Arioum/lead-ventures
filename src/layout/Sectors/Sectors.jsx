import SectorGraphic from '../../assets/section-sectors.svg';
import classes from './sectors.module.scss';

const Sectors = () => {
  return (
    <section className={classes.sectors}>
      <div className={classes.sectors__graphic}>
        <img src={SectorGraphic} alt='SectorGraphic' />
      </div>
      <div className={classes.sectors__textArea}>
        <h3>Main sectors we support</h3>
        <h2 className={classes.sectors__textArea__funding}>funding</h2>
        <p className='h3paragraph'>
          We work across a broad range of sectors but have principal interests
          in health, climate/sustainability, education and social equity, and
          impactful disruptive technologies.
        </p>
      </div>
    </section>
  );
};

export default Sectors;
