import './App.css';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Motivation from './components/Motivation'
function App() {
  return (
    <div className="app-container">
      <Hero />
      <Programs />
      <Motivation />
    </div>
  );
}

export default App;
