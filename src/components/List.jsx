import React from "react";
import Item from "./Item";

const List = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h3 className="h3-employee-count">
          I found {props.employees.length} employees
        </h3>
      </div>
      <div className="row list-headers">
        <div className="col-sm-1">ID #</div>
        <div className="col-md-3">Full Name</div>
        <div className="col-md-5">Email Address</div>
        <div className="col-md-2">Phone Number</div>
        <div className="col-sm-1">Age</div>
      </div>
      <div>
        {props.employees.map((employee) => (
          <Item {...employee} key={employee.id} />
        ))}
      </div>
    </div>
  );
};

export default List;
