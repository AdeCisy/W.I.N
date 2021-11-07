import React from 'react';
import LandingPage from './Components/LandingPage';
import './App.css';
import ContactForm from './components/contactForm';
// import Nav from './components/Nav';
import WinSquad from './components/squadPictures';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/Components/LandingPage" component={LandingPage}>
              <LandingPage />
            </Route>
            <Route path="/Components/LandingPage/About" component={(WinSquad, ContactForm)}>
              <WinSquad />
              <ContactForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
