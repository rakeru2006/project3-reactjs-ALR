import React, { useState } from "react";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'; 
import { render } from "ejs";

const NavBar = () => {
    const [dropdown1, setDropdown1]=useState(false);
    const [dropdown2, setDropdown2]=useState(false);

    const opencloseDropdown1=()=>{
        setDropdown1(!dropdown1);
    }

    const opencloseDropdown2=()=>{
        setDropdown2(!dropdown2);
    }

    return (
        
        <nav class="navbar navbar-expand-lg navbar-light bg-dark" >
            <img src="gym-192x192.png" height="80" width="80"></img>
            <a href="/">Gym Evolucion</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <main class="container">
                <div className="App">
                    <Dropdown isOpen={dropdown1} toggle={opencloseDropdown1}>
                        <DropdownToggle caret id="m1">
                            Catalogos del sistema
                        </DropdownToggle>
                        <DropdownMenu aria-labelledby="m1">
                            <a href="/list_soc" class="dropdown-item">Socios</a>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                <div className="App">
                    <Dropdown isOpen={dropdown2} toggle={opencloseDropdown2}>
                        <DropdownToggle caret id="m2">
                            Procesos de la empresa
                        </DropdownToggle>
                        <DropdownMenu aria-labelledby="m2">
                            <a href="/exp_soc" class="dropdown-item">Exporta socios</a>
                            <a href="/exp_pag" class="dropdown-item">Exporta pagos</a>
                            <a href="/rep_pag" class="dropdown-item">Reporta pagos</a>
                        </DropdownMenu>
                    </Dropdown>




                    
                </div>



            </main>

        </nav>
    );
};

export default NavBar;