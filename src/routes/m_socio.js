import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import Mod_soc from "../containers/mod_socio";
import 'bootstrap/dist/css/bootstrap.min.css';

function l_soc() {
  return (
    <Router>
        <NavBar />
        <Mod_soc />
    </Router>
  );
}

export default l_soc;