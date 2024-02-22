import Navbar from './layout/Navbar/Navbar';
import Hero from './layout/Hero/Hero';
import About from './layout/AboutUs/About';
import Sectors from './layout/Sectors/Sectors';
import Stats from './layout/Stats/Stats';
import Experts from './layout/Experts/Experts';
import Portfolio from './layout/Portfolio/Portfolio';
import Blogs from './layout/Blogs/Blogs';
import Newsletter from './layout/Newsletter/Newsletter';
import Footer from './layout/Footer/Footer';
import './App.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className='mainLayout container'>
        <About />
        <Sectors />
        <Stats />
        <Experts />
        <Portfolio />
        <Blogs />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default App;
