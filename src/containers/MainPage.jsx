import React, { Component } from "react";
//import List from "../components/List";
import axios from "axios";

class MainPage extends Component {
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
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <center>
            <img src="gym-512x512.png" class="mr-3" alt="..." width="480" height="310" />
        </center>
      </>
    );
  }
}

export default MainPage;
