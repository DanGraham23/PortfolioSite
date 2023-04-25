import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <div className='hr-div'></div>
      <About />
      <div className='hr-div'></div>
      <Projects />
      <div className='hr-div'></div>
      <Footer />
    </div>
  );
}

export default App;
