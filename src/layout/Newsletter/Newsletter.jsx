import MegaPhoneFill from '../../assets/megaphone-filled.svg';
import MegaPhoneOut from '../../assets/megaphone-outline.svg';
import classes from './newsletter.module.scss';

const Newsletter = () => {
  return (
    <section className={classes.newsletter}>
      <img src={MegaPhoneFill} alt='MegaPhoneFilled' />
      <img src={MegaPhoneOut} alt='MegaPhoneOutlined' />
      <div className={classes.newsletter__left}>
        <h4>
          Sign up to our weekly
          <span>newsletter</span>
        </h4>
        <p>
          Receive the latest news, blogs, post that can shake up the way you
          perceive investment
        </p>
      </div>
      <div className={classes.newsletter__right}>
        <input type='email' placeholder='Enter your Email' />
        <button>Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
