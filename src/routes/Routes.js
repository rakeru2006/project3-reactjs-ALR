import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import List_soc from './l_soc';
import Exp_soc from './e_soc';
import Exp_pag from './e_pag';
import Rep_pag from './r_pag';
import Ag_socio from './agr_socio';
import Mo_socio from './m_socio';
//import App from 'App.js'


function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}   />
                <Route exact path="/list_soc" component={List_soc}   />
                <Route exact path="/exp_soc" component={Exp_soc}   />
                <Route exact path="/exp_pag" component={Exp_pag }   />
                <Route exact path="/rep_pag" component={Rep_pag }   />
                <Route exact path="/ag_socio" component={Ag_socio }   />
                <Route exact path="/m_socio" component={Mo_socio }   />
            </Switch>
        </BrowserRouter>

    );

}

export default Routes;