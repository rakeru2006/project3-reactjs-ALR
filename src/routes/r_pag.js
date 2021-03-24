import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import Rep_pag from "../containers/rep_pag";
import 'bootstrap/dist/css/bootstrap.min.css';

function r_pag() {
  return (
    <Router>
        <NavBar />
        <Rep_pag />
    </Router>
  );
}

export default r_pag;