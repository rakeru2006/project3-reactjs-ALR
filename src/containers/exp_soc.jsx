import React, { Component } from "react";


class exp_soc extends Component {
  state = { users: [] }

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
                <center><h3><font color="white">Clientes registrados</font></h3></center>
                <table width="100%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
                  <thead>
                    <tr>
                      <td bgcolor="black"><font color="white">id_socio/font></font></td>
                      <td bgcolor="black"><font color="white">Nombre</font></td>
                      <td bgcolor="black"><font color="white">Telefono</font></td>
                      <td bgcolor="black"><font color="white">Correoe</font></td>
                      <td bgcolor="black"><font color="white">Direccion</font></td>
                      <td bgcolor="black"><font color="white">Colonia</font></td>
                      <td bgcolor="black"><font color="white">Ciudad</font></td>
                      <td bgcolor="black"><font color="white">Estado</font></td>
                      <td bgcolor="black"><font color="white">Codpos</font></td>
                      <td bgcolor="black"><font color="white">Miembro_desde</font></td>
                      <td bgcolor="black"><font color="white">Ultimo_pago</font></td>
                      <td bgcolor="black"><font color="white">Siguiente_pago</font></td>
                      <td bgcolor="black"><font color="white">periodo</font></td>
                      <td bgcolor="black"><font color="white">estatus</font></td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.users.map( user =>
                      <tr>
                        <td bgcolor="#D8D8D8">
                        {user.id}
                        </td>
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
                           {user.dir}
                        </td>
                        <td bgcolor="#D8D8D8">
                           {user.col}
                        </td>
                        <td bgcolor="#D8D8D8">
                           {user.city}
                        </td>
                        <td bgcolor="#D8D8D8">
                           {user.state}
                        </td>
                        <td bgcolor="#D8D8D8">
                           {user.cp}
                        </td>
                        <td bgcolor="#D8D8D8">
                           {user.md}
                        </td>
                        <td bgcolor="#D8D8D8">
                           {user.lp}
                        </td>
                        <td bgcolor="#D8D8D8">
                           {user.np}
                        </td>
                        <td bgcolor="#D8D8D8">
                           {user.per}
                        </td>
                        <td bgcolor="#D8D8D8">
                           {user.stat}
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

export default exp_soc;