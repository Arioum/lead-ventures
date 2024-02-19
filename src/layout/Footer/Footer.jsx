import leadLogo from "../../assets/brand-logo.svg";
import classes from "./footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className='footerContainer'>
        <div className='footer_left'>
          <img src={leadLogo} alt='' />
        </div>
        <div className='footer__right'></div>
      </div>
      <div className={classes.footer__copyright}>
        ©Designed & Built by{" "}
        <a href='https://github.com/Arioum' target='_blank'>
          Arioum
        </a>
        . All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
