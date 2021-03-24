import React, { Component } from "react";
import List from "../components/List";
import axios from "axios";

class list_soc extends Component {
  state = {
    employees: [],
    employeesToDisplay: [],
    searchTerm: "",
  };

  componentDidMount() {
    this.getEmployees();
  }

  clearFilter = () => {
    this.setState({
      employeesToDisplay: this.state.employees,
      searchTerm: "",
    });
  };

  getEmployees = () => {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        this.setState({
          employees: response.data.data,
          employeesToDisplay: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const employees = [...this.state.employees];
    const filteredEmployees = employees.filter((employee) => {
      const regex = new RegExp(this.state.searchTerm, "gi");
      return employee.employee_name.match(regex);
    });

    this.setState({
      employeesToDisplay: filteredEmployees,
    });
  };

  render() {
    return (
      <>
        <table width="100%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
          <tbody>
            <tr>
              <td  bgcolor="#848484" valign="top">
                <right><h2><a href="">Agregar Socio</a></h2></right>
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

                      <tr>
                        <td bgcolor="#D8D8D8">
                           cliente.1 
                        </td>
                        <td bgcolor="#D8D8D8">
                           cliente.2 
                        </td>
                        <td bgcolor="#D8D8D8">
                           cliente.3 
                        </td>
                        <td bgcolor="#D8D8D8">
                           cliente.4 
                        </td>
                        <td  bgcolor="#1E1E5D" width="60">
                          <center><a href="" >Pagos</a></center>
                        </td>
                        <td bgcolor="#2B2D83" width="60">
                          <center><a href="" >Editar</a></center>
                        </td>


                      </tr>

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
