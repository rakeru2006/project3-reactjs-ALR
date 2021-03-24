import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import Exp_soc from "../containers/exp_soc";
import 'bootstrap/dist/css/bootstrap.min.css';

function l_soc() {
  return (
    <Router>
        <NavBar />
        <Exp_soc />
    </Router>
  );
}

export default l_soc;