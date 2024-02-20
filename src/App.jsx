import Navbar from './layout/Navbar/Navbar';
import Hero from './layout/Hero/Hero';
import About from './layout/AboutUs/About';
import Sectors from './layout/Sectors/Sectors';
import Footer from './layout/Footer/Footer';
import Stats from './layout/Stats/Stats';
import './App.scss';
import Newsletter from './layout/Newsletter/Newsletter';

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <main className='mainLayout container'>
        <About />
        <Sectors />
        <Stats />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
};

export default App;
