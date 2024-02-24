import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import Button from '../../components/Button/Button';
import leadLogo from '../../assets/brand-logo.svg';
import classes from './navbar.module.scss';

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) setMenuToggle(false);
    });
  });

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
      <button
        className={classes.navbar__menu}
        onClick={() => setMenuToggle(!menuToggle)}
      >
        {menuToggle ? <IoClose size={30} /> : <FiMenu size={25} />}
      </button>
      {menuToggle && (
        <div className={classes.navbar__menuOverlay}>
          <div>
            <a href='/' className={classes.navbar__navItems}>
              About Us
            </a>
            <a href='/' className={classes.navbar__navItems}>
              Team
            </a>
            <a href='/' className={classes.navbar__navItems}>
              Portfolio
            </a>
            <a href='/' className={classes.navbar__navItems}>
              Pricing
            </a>
            <a href='/' className={classes.navbar__navItems}>
              Help
            </a>
          </div>
          <div className={classes.navbar__menuOverlay__btnCont}>
            <Button variant='secondary' size='small'>
              Log in
            </Button>
            <Button variant='primary' size='small'>
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
