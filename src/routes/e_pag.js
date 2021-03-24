import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import Exp_pag from "../containers/exp_pag";
import 'bootstrap/dist/css/bootstrap.min.css';

function l_pag() {
  return (
    <Router>
        <NavBar />
        <Exp_pag />
    </Router>
  );
}

export default l_pag;