import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Join from './components/Join';
import Motivation from './components/Motivation';
import Pricing from './components/Pricing';
import Programs from './components/Programs';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Programs />
      <Motivation />
      <Pricing />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
