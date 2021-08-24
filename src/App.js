
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loginscreen from './Loginscreen';
import Register from './Register';
import { navigationLinks, BeforeLogin } from './Links';
import Catalogsearch from './Catalogsearch';
import { useState } from 'react';
import Footer from './Footer';
function App() {
  const [links, changeLinks] = useState(BeforeLogin)
  return (
    <Router>
      <div className="App">
        <navigationLinks.Provider value={{ links: links, setLinks: changeLinks }}>
          <Navbar></Navbar>

          <div className="content">
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>

              <Route path="/register">
                <Register></Register>
              </Route>

              <Route path="/loginscreen">
                <Loginscreen></Loginscreen>
              </Route>

              <Route path="/catalogsearch">
                <Catalogsearch></Catalogsearch>
              </Route>             
            </Switch>
          
          </div>
        </navigationLinks.Provider>
      </div>
<Footer></Footer>
    </Router>
  );
}

export default App;
