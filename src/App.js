import './App.css';
import Header from './components/header/Header';
import Feature from './components/features/Feature';
import About from './components/about/About';
import Service from './components/services/Service';
import Gallery from './components/gallery/Gallery';
import Testimonial from './components/testimonials/Testimonial';
import Team from './components/team/Team';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Feature />
      <About />
      <Service />
      <Gallery />
      <Testimonial />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;


// what is the difference between px % em rem vh vw vmax vmin - (minHeigh maxHight minWidth maxWidth) read that before start the responsiveness