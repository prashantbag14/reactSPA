import './App.css';
import About from './components/about';
import Footer from './components/footer';
import Header from './components/header';
import Navigation from './components/navigationbar';
import News from './components/news';
import Portfolio from './components/portfolio';
import './css/bootstrap.min.css';
import './css/bootstrap-icons.css';
import './css/magnific-popup.css';
import './css/aos.css';
import './css/templatemo-nomad-force.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <About/>
      <hr className="wid"/>
      <Portfolio/>
      <hr className="wid"/>
      <News/>
      <hr className="wid"/>
      <Footer/>
    </div>
  );
}

export default App;
