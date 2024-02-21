import Button from '../../components/Button/Button';
import ExpertDirector from '../../assets/expert-director.svg';
import ExpertAnalyst from '../../assets/expert-analyst.svg';
import classes from './experts.module.scss';

const experts = [
  {
    graphic: ExpertDirector,
    name: 'Kushal M Sagar',
    designation: 'DIRECTOR',
    layoutSwap: false,
  },
  {
    graphic: ExpertAnalyst,
    name: 'Rachel Micheal',
    designation: 'SENIOR ANALYST',
    layoutSwap: true,
  },
];

const Experts = () => {
  return (
    <section className={classes.experts}>
      <h3>What Our Experts Say</h3>
      <div className={classes.experts__opinions}>
        {experts.map((expert) => (
          <div
            className={`${classes.experts__opinions__expert} ${
              expert.layoutSwap
                ? classes.experts__opinions__expert__orderSwap
                : ''
            }`}
          >
            <div className={classes.experts__opinions__expert__graphic}>
              <img src={expert.graphic} alt='ExpertImage' />
            </div>
            <div
              className={`${classes.experts__opinions__expert__opinion} ${
                expert.layoutSwap
                  ? classes.experts__opinions__expert__opinion__orderSwap
                  : ''
              }`}
            >
              <span
                className={classes.experts__opinions__expert__opinion__heading}
              >
                <h5>{expert.name}</h5>
                <h6>{expert.designation}</h6>
              </span>
              <span className={classes.experts__opinions__expert__opinion__hr}>
                <hr />
                <hr />
              </span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                ipsum sit nisi eget ut lectus consequat rhoncus id. Ut
                adipiscing lorem facilisis ridiculus nunc non in. At erat est
                lectus eu tortor egestas nisi, bibendum ipsum. Aliquam vulputate
                tristique consectetur facilisi et pellentesque. Iaculis lorem
                nulla sed tellus elementum velit, sit ac. In pretium, in aliquam
                ac sagittis id quis.
              </p>
            </div>
          </div>
        ))}
      </div>
      <Button variant='primary' size='large'>
        View more Expert Opinions
      </Button>
    </section>
  );
};

export default Experts;
