import './App.css';
import Myblogs from './components/mydata';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h2 className="headfont">	&#128722;Cart Data&#128722;</h2>
      
      <Router>
        <Switch>
        <Route path="/" exact component={Myblogs}/>
        <Route path="/cart/:cartId" exact/>
        <Route> 404 Not Found</Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
