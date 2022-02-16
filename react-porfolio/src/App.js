import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/projects" component={Projects}/>
          <Route component={About}/>
        </Switch>
        <Footer>

        </Footer>
      </Router>
    </div>
  );
}

export default App;
