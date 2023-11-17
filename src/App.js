import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Motivation from './components/Motivation';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Programs />
      <Motivation />
      <Pricing />
      <Testimonials />
    </div>
  );
}

export default App;
