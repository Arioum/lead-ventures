import Navbar from "./layout/Navbar/Navbar";
import Hero from "./layout/Hero/Hero";
import About from "./layout/AboutUs/About";
import Footer from "./layout/Footer/Footer";
import "./App.scss";

const App = () => {
  return (
    <>
      <div className='App'>
        <Navbar />
        <Hero />
        <main>
          <About />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default App;
