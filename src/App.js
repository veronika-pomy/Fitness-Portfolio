import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Motivation from './components/Motivation';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Join from './components/Join';
import Footer from './components/Footer';

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
