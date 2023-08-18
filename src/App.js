import './App.css';
import About from './Component/About';
import Banner from './Component/Banner';
import Blog from './Component/Blog';
import Cta from './Component/Cta';
import Delivery from './Component/Delivery';
import Food from './Component/Food-Menu';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Hero from './Component/Hero';
import Promo from './Component/Promo';
import Testimonial from './Component/Testimonial';

function App() {
  return (
    <>
      <Header />
      <Hero/>
      <Promo/>
      <About/>
      <Food/>
      <Cta/>
      <Delivery/>
      {/* <Testimonial/> */}
      <Banner/>
      <Blog/>
      <Footer/>
    </>
  );
}

export default App;
