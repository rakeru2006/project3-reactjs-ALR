import React from "react";

const Item = (props) => {
  function makeFakeEmailAddress(props) {
    var employeeName = props.employee_name.toLowerCase().split(" ");
    var fakeEmailAddress = `${employeeName[0]}.${employeeName[1]}@fakecompany.com`;
    return fakeEmailAddress;
  }
  
  function makeFakePhoneNumber() {
    var fragment1 = Math.floor(Math.random() * 800 + 200);
    var fragment2 = Math.floor(Math.random() * 1000);
    var fragment3 = Math.floor(Math.random() * 10000);
    var fakePhoneNumber = `(${fragment1}) ${fragment2}-${fragment3}`;
    return fakePhoneNumber;
  }

  return (
    <div className="row item-row">
      <div className="col-sm-1">{props.id}</div>
      <div className="col-md-3">{props.employee_name}</div>
      <div className="col-md-5">{makeFakeEmailAddress(props)}</div>
      <div className="col-md-2">{makeFakePhoneNumber()}</div>
      <div className="col-sm-1">{props.employee_age}</div>
    </div>
  );
};

export default Item;
