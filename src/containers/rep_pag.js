import React, { Component } from "react";

class rep_pag extends Component {
  state = { rep_pagos: [] }

  componentDidMount() {
    fetch('https://gymevolucion.herokuapp.com/rep_pagos')
      .then(res => res.json())
      .then(rep_pagos => this.setState({ rep_pagos }));
  }
  render() {
    return (
      <>
        <table width="100%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
          <tbody>
            <tr>
              <td  bgcolor="#848484" valign="top"> 
                <center><h3><font color="white">Reporte de pagos</font></h3></center>
                <table width="100%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
                  <thead>
                    <tr>
                      <td  bgcolor="black"><font color="white">fec. de pago</font></td>
                      <td  bgcolor="black"><font color="white">monto</font></td>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.rep_pagos.map( rep_pago =>
                      <tr>
                        <td bgcolor="#D8D8D8">
                          {rep_pago.fecha}  
                        </td>
                        <td bgcolor="#D8D8D8" align="right">
                          {rep_pago.monto} 
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

export default rep_pag;