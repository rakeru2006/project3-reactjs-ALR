import React, { Component } from "react";


class exp_pag extends Component {
  state = { pagos: [] }

  componentDidMount() {
    fetch('https://gymevolucion.herokuapp.com/pagos')
      .then(res => res.json())
      .then(pagos => this.setState({ pagos }));
  }


  render() {
    return (
      <>
        <table width="100%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
          <tbody>
            <tr>
              <td  bgcolor="#848484" valign="top">
                <center><h3><font color="white">pagos registrados</font></h3></center>
                <table width="100%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
                  <thead>
                    <tr>
                      <td  bgcolor="black"><font color="white">id_pago</font></td>
                      <td  bgcolor="black"><font color="white">id_socio</font></td>
                      <td  bgcolor="black"><font color="white">nombre</font></td>
                      <td  bgcolor="black"><font color="white">fec. a pagar</font></td>
                      <td  bgcolor="black"><font color="white">fec. de pago</font></td>
                      <td  bgcolor="black"><font color="white">fec. sig. pago</font></td>
                      <td  bgcolor="black"><font color="white">monto</font></td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.pagos.map( pago =>
                      <tr>
                        <td bgcolor="#D8D8D8">
                          {pago.id_pago}
                        </td>
                        <td bgcolor="#D8D8D8">
                          {pago.id_socio} 
                        </td>
                        <td bgcolor="#D8D8D8">
                          {pago.nom_socio} 
                        </td>
                        <td bgcolor="#D8D8D8">
                          {pago.f_pagar}
                        </td>
                        <td bgcolor="#D8D8D8">
                          {pago.f_pago}
                        </td>
                        <td bgcolor="#D8D8D8">
                          {pago.f_sigp}
                        </td>
                        <td bgcolor="#D8D8D8">
                          {pago.monto}
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

export default exp_pag;