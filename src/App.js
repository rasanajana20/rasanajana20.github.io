import Hero from './pages/heroSection/hero';
import Content from './pages/contentSection/content';
import Creation from './pages/creationSection/creation';
import Footer from './pages/footer/footer';
import './App.css';

// reload the browser to load mobile responsive images
function App() {
  return (
    <div style={{overflow: 'hidden'}}>
      <Hero />
      <Content />
      <Creation />
      <Footer />
    </div>
  );
}

export default App;
