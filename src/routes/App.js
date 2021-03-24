import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import MainPage from "../containers/MainPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <NavBar />
      <Route exact path="/" component={MainPage} />
    </Router>
  );
}

export default App;
