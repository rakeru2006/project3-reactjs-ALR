import React, { Component } from "react";
import List from "../components/List";
import axios from "axios";

class rep_pag extends Component {
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
                <center><h3><font color="white">Reporte de pagos</font></h3></center>
                <table width="100%" border="1" cellpadding="0" cellspacing="0" bordercolor="#000000">
                  <thead>
                    <tr>
                      <td  bgcolor="black"><font color="white">fec. de pago</font></td>
                      <td  bgcolor="black"><font color="white">monto</font></td>
                    </tr>
                  </thead>
                  <tbody>

                      <tr>
                      <td bgcolor="#D8D8D8">
                           pago.0 
                        </td>
                        <td bgcolor="#D8D8D8" align="right">
                           pago.1 
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

export default rep_pag;