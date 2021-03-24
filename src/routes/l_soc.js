import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from '../components/NavBar';
import List_soc from "../containers/list_soc";
import 'bootstrap/dist/css/bootstrap.min.css';

function l_soc() {
  return (
    <Router>
        <NavBar />
        <List_soc />
    </Router>
  );
}

export default l_soc;
