import React,{Component} from 'react';
import '../components/App.css';
import ReactDom from "react-dom"; 


class list_soc extends Component {
  state = { users: [] }


  submitForm(id){  
    console.log("Hola");
    console.log(id);
  }




  componentDidMount() {
    fetch('https://gymevolucion.herokuapp.com/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
      return (
        <>
        <table width="100%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
          <tbody>
            <tr>
              <td  bgcolor="#848484" valign="top">
                <right><h2><a href="/ag_socio">Agregar Socio</a></h2></right>
                <center><h3><font color="white">Clientes registrados</font></h3></center>
                <table width="100%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
                  <thead>
                    <tr>
                      <td bgcolor="black"><font color="white">Nombre</font></td>
                      <td bgcolor="black"><font color="white">Telefono</font></td>
                      <td bgcolor="black"><font color="white">Correo_e </font></td>
                      <td bgcolor="black"><font color="white">Siguiente pago </font></td>
                      <td bgcolor="black"><font color="white"></font></td>
                      <td bgcolor="black"><font color="white"></font></td>

                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map( user =>
                      <tr>
                        <td bgcolor="#D8D8D8">
                          {user.name_c}
                        </td>
                        <td bgcolor="#D8D8D8">
                          {user.tel}
                        </td>
                        <td bgcolor="#D8D8D8">
                          {user.email}
                        </td>
                        <td bgcolor="#D8D8D8">
                          {user.np} 
                        </td>
                        <td  bgcolor="#1E1E5D" width="60">
                          <center><a href="" >Pagos</a></center>
                        </td>
                        <td bgcolor="#2B2D83" width="60">
                          <input 
                            onClick={ this.submitForm.bind(this,user.id)}
                            type="button" 
                            class="btn btn-primary" 
                            value="Editar"/>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>

        </>
      );
  }

}


export default list_soc;
