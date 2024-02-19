import Button from '../../components/Button/Button';
import leadLogo from '../../assets/brand-logo.svg';
import classes from './navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={`container ${classes.navbar}`}>
      <div>
        <img src={leadLogo} alt='logo' className={classes.navbar__logo} />
      </div>
      <div className={classes.navbar__navLinkContainer}>
        <a href='/' className={classes.navbar__navLinkContainer__navItems}>
          About Us
        </a>
        <a href='/' className={classes.navbar__navLinkContainer__navItems}>
          Team
        </a>
        <a href='/' className={classes.navbar__navLinkContainer__navItems}>
          Portfolio
        </a>
        <a href='/' className={classes.navbar__navLinkContainer__navItems}>
          Pricing
        </a>
        <a href='/' className={classes.navbar__navLinkContainer__navItems}>
          Help
        </a>
      </div>
      <div className={classes.navbar__btnContainer}>
        <Button variant='secondary' size='small'>
          Log in
        </Button>
        <Button variant='primary' size='small'>
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
