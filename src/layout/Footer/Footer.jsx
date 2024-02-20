import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaLinkedin,
} from 'react-icons/fa6';
import leadLogo from '../../assets/brand-logo.svg';
import classes from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <section className={classes.footer__body}>
        <div className={classes.footer__body__left}>
          <img src={leadLogo} alt='logo' />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa ipsum
            sit nisi eget ut lectus consequat rhoncus id. Ut adipiscing lorem
            facilisis ridiculus nunc non in.
          </p>
          <div className={classes.footer__body__left__socials}>
            <FaLinkedin />
            <FaSquareInstagram />
            <FaSquareXTwitter />
          </div>
        </div>
        <div className={classes.footer__body__right}>
          <div>
            <h6>Navigate</h6>
            <a href='/'>Home</a>
            <a href='/'>About Us</a>
            <a href='/'>What we Do</a>
            <a href='/'>Portfolio</a>
            <a href='/'>Team</a>
            <a href='/'>Join Us</a>
          </div>
          <div>
            <h6>Contacts</h6>
            <p>Mobile : +123 759 684</p>
            <p>Telephone : +1758 247 651</p>
            <p>E-mail : Lead.ventures@example.com</p>
          </div>
        </div>
      </section>
      <div className={classes.footer__copyright}>
        <span>©Designed & Built by </span>
        <a href='https://github.com/Arioum' target='_blank'>
          Arioum
        </a>
        <span>. All Rights Reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
