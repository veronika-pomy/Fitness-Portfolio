import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Motivation from './components/Motivation';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Join from './components/Join';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Programs />
      <Motivation />
      <Pricing />
      <Testimonials />
      <Join />
    </div>
  );
}

export default App;
