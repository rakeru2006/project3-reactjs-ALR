import React,{Component} from 'react';
import axios from "axios";
import '../components/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

    class agr_socio extends Component {
    constructor(props){
        super(props);
        this.state={
            nombre: '',
            tel: '',
            email: '',
            dir: '',
            col: '',
            ciu: '',
            edo: '',
            cod: '',
            md: '',
            sp: '',
            pe: '',
            pa: ''
        }
    }
  

    valueToNombre = (nombre) => {
      console.log(this.state);
      this.setState({
        nombre: nombre
      })
    };

    valueToTel = (tel) => {
        console.log(this.state);
        this.setState({
            tel: tel
        })
     };
  
    valueToEmail = (email) => {
        console.log(this.state);  
        this.setState({
            email: email
        })
    };

    valueToDir = (dir) => {
        console.log(this.state);
        this.setState({
          dir: dir
        })
    };

    valueToCol = (col) => {
        console.log(this.state);  
        this.setState({
            col: col
        })
    };

    valueToCiu = (ciu) => {
        console.log(this.state);  
        this.setState({
            ciu: ciu
        })
    };

    valueToEdo = (edo) => {
        console.log(this.state);  
        this.setState({
            edo: edo
        })
    };

    valueToCod = (cod) => {
        console.log(this.state);  
        this.setState({
            cod: cod
        })
    };

    valueToMd = (md) => {
        console.log(this.state);  
        this.setState({
            md: md
        })
    };

    valueToSp = (sp) => {
        console.log(this.state);  
        this.setState({
            sp: sp
        })
    };

    valueToPe = (pe) => {
        console.log(this.state);  
        this.setState({
            pe: pe
        })
    };

    valueToPa = (pa) => {
        console.log(this.state);  
        this.setState({
            pa: pa
        })
    };

    submitForm = () => {
        const newUser = {
            method: 'HEAD',
            mode: 'no-cors',
            nombre: this.state.nombre,
            tel: this.state.tel,
            email: this.state.email,
            dir: this.state.dir,
            col: this.state.col,
            ciu: this.state.ciu,
            edo: this.state.edo,
            cod: this.state.cod,
            md: this.state.md,
            sp: this.state.sp,
            pe: this.state.pe,
            pa: this.state.pa
        };
        console.log(newUser);
        axios.post('https://gymevolucion.herokuapp.com/ins_user',newUser)
        .then((response) => {
            console.log(response);
        }).catch((e) => {
            console.log(e);
        });
    }

    //componentDidMount() {
    //  fetch('/users')
    //   .then(res => res.json())
    //  .then(users => this.setState({ users }));
    //}

  render() {
      return (
        <>
            <br/><br/>
            <div>
                <form>
                    <div class="input-group mb-3">
                        &nbsp;&nbsp;<label htmlFor="nombre">Nombre </label>&nbsp;&nbsp;
                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            class="form-control"
                            placeholder="Nombre del cliente"
                            autoComplete="off"
                            value={this.state.nombre}
                            onChange={ (ev) => { this.valueToNombre(ev.target.value)}}
                        />
                    </div>
                    <div class="input-group mb-3">
                        &nbsp;&nbsp;<label htmlFor="tel">Telefono </label>&nbsp;&nbsp;
                        <input
                            id="tel"
                            name="tel"
                            type="text"
                            class="form-control"
                            class="form-control"
                            placeholder="999-999-99-99"
                            autoComplete="off"
                            value={this.state.tel}
                            onChange={ (ev) => { this.valueToTel(ev.target.value)}}
                        />
                        
                        &nbsp;&nbsp;<label htmlFor="email">Correo Electronico </label>&nbsp;&nbsp;
                        <input
                            id="email"
                            name="email"
                            type="email"
                            class="form-control"
                            placeholder="micorre@gmail.com"
                            autoComplete="off"
                            value={this.state.email}
                            onChange={(ev) => this.valueToEmail(ev.target.value)}
                        />
                    </div>  
                    <div class="input-group mb-3">
                        &nbsp;&nbsp;<label htmlFor="dir">Dirección</label>&nbsp;&nbsp;
                        <input
                            id="dir"
                            name="dir"
                            type="text"
                            class="form-control"
                            placeholder="dirección"
                            autoComplete="off"
                            value={this.state.dir}
                            onChange={(ev) => this.valueToDir(ev.target.value)}
                        />
                        
                        &nbsp;&nbsp;<label htmlFor="col">Colonia</label>&nbsp;&nbsp;
                        <input
                            id="col"
                            name="col"
                            type="text"
                            class="form-control"
                            placeholder="colonia"
                            autoComplete="off"
                            value={this.state.col}
                            onChange={(ev) => this.valueToCol(ev.target.value)}
                        />
                    </div>
                    <div class="input-group mb-3">
                        &nbsp;&nbsp;<label htmlFor="ciu">Ciudad</label>&nbsp;&nbsp;
                        <input
                            id="ciu"
                            name="ciu"
                            type="text"
                            class="form-control"
                            placeholder="ciudad"
                            autoComplete="off"
                            value={this.state.ciu}
                            onChange={(ev) => this.valueToCiu(ev.target.value)}
                        />

                        &nbsp;&nbsp;<label htmlFor="edo">Estado</label>&nbsp;&nbsp;
                        <input
                            id="edo"
                            name="edo"
                            type="text"
                            placeholder="Estado"
                            class="form-control"
                            autoComplete="off"
                            value={this.state.edo}
                            onChange={(ev) => this.valueToEdo(ev.target.value)}
                        />

                        &nbsp;&nbsp;<label htmlFor="cod">Codigo Postal</label>&nbsp;&nbsp;
                        <input
                            id="cod"
                            name="cod"
                            type="text"
                            class="form-control"
                            placeholder="00000"
                            autoComplete="off"
                            value={this.state.cod}
                            onChange={(ev) => this.valueToCod(ev.target.value)}
                        />
                    </div>
                    <div class="input-group mb-3">
                        &nbsp;&nbsp;<label htmlFor="md">Miembro desde </label>&nbsp;&nbsp;
                        <input
                            id="cod"
                            name="md"
                            type="date" 
                            class="form-control"
                            placeholder="00/00/0000"
                            autoComplete="off"
                            value={this.state.md}
                            onChange={(ev) => this.valueToMd(ev.target.value)}
                        />

                        &nbsp;&nbsp;<label htmlFor="sp">Siguiente Pago </label>&nbsp;&nbsp;
                        <input
                            id="sp"
                            name="sp"
                            type="date" 
                            class="form-control"
                            placeholder="00/00/0000"
                            autoComplete="off"
                            value={this.state.sp}
                            onChange={(ev) => this.valueToSp(ev.target.value)}
                        />

                        &nbsp;&nbsp;<label htmlFor="pe">Periodo </label>&nbsp;&nbsp;
                        <select id="pe" name="pe" class="form-control" onChange={(ev) => this.valueToPe(ev.target.value)}>
                        <option >Choose...</option>
                        <option selected>Mensual</option>
                        <option>Semanal</option>
                        <option>Dia</option>
                        </select>

                        &nbsp;&nbsp;<label htmlFor="pa">Pago </label>&nbsp;&nbsp;
                        <input
                            id="pa"
                            name="pa"
                            type="text"
                            class="form-control"
                            placeholder="0.0"
                            autoComplete="off"
                            value={this.state.pa}
                            onChange={(ev) => this.valueToPa(ev.target.value)}
                        /><br/>
                    </div>
                    <br/><br/>
                    &nbsp;&nbsp;
                    <input 
                        onClick={this.submitForm}
                        type="button" 
                        class="btn btn-primary" 
                        value="Agregar"/>
                </form>
            </div>
        </>
      );
  }

}


export default agr_socio;
