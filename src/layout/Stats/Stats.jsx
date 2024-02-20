import classes from './stats.module.scss';

const Metrics = () => {
  return (
    <section className={classes.stats}>
      <div className={classes.stats__item}>
        <h5>12000+</h5>
        <p>Startups raised money from thousands of syndicates and funds</p>
      </div>
      <div className={classes.stats__item}>
        <h5>$10 B</h5>
        <p>Assets supported</p>
      </div>
      <div className={classes.stats__item}>
        <h5>$253 M</h5>
        <p>Total raised funds</p>
      </div>
    </section>
  );
};

export default Metrics;
