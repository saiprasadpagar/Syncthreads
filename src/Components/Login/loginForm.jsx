import React, { useState } from "react";
// import AddMobile from "./addMobile";
const Login = () => {
  const [data, setdata] = useState({agree:false});
  

  const HandleOnChange = (e) => {
    // return ({name:value})
    const { name, value } = e.target;
    return setdata({ ...data, [name]: value });
  };

  console.log(data);

  const HandleSubmit = (e) => {
    return e.preventDefault();
  };




  // ----------------------------------------------------------------------------
  return (
    <>
      <hr />
      <h1>Sign up Form:</h1>

     
        <form onSubmit={HandleSubmit}>
        <div
        style={{
          display: "grid",
          gridTemplateColumns: "60px 200px",
          gridGap: 10,
          width: 350,
        }}
      >
          <lable>Username </lable>
          <input onChange={HandleOnChange} name="username" />
          <lable>Password</lable>
          <input type="password" onChange={HandleOnChange} name="password" />
          <lable>Email </lable>
          <input type="email" onChange={HandleOnChange} name="email" />
          <lable>Mobile</lable>
          <input onChange={HandleOnChange} name="mobile" />
          
          <lable>City</lable>
          <select name="city" onChange={HandleOnChange}>
            <option value = "">Select</option>
            <option value = "pune">Pune</option>
            <option value = "mumbai">Mumbai</option>
            <option value = "nashik">Nashik</option>
            <option value = "delhi">Delhi</option>
            <option value = "thane">Thane</option>
            <option value = "auragabad">Auragabad</option>
            </select>
      
           
          <lable>Comment</lable>
          <textarea name="comment" onChange={HandleOnChange}/>
          </div>
          <lable>Mobile No</lable>

          {/* <AddMobile/> */}
<div>

          <lable htmlFor="male">Male</lable>
          <input type="radio" name="gender" value="male" id="male" onChange={HandleOnChange}/>
          
          <lable htmlFor ="female">FeMale</lable>
          <input type="radio" name="gender" value="female" id="female" onChange={HandleOnChange}/><br/>
          <input type="checkbox" name="agree" onChange={(state)=>{setdata({...data , agree:!state.agree})}}></input>
          
          <lable>I agree the terms & Conditions</lable>
          <br/>
          
          <input type="submit" />
          <input type="reset" />
          
          </div>
        </form>
     
      {/* ----------------------------------------Grid for Table---------------------------------------------- */}
      <h2>Grid Table:</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "Auto Auto Auto Auto",
          border: "2px solid black",
        }}
      >
        <h3 className="topbar">Username</h3>
        <h3 className="topbar">Password</h3>
        <h3 className="topbar">Gmail</h3>
        <h3 className="topbar">Mobile</h3>
      </div>

      <div>
        <h2>HTML Table:</h2>
        <table style={{ border: "2px solid green", width: "100%" }}>
        <colgroup>
    <col span="8" style = {{backgroundColor:"lightgreen"}}/>   </colgroup>
    <tr>
    <th>Username</th>
    <th>Password</th>
    <th>Email</th>
    <th>Mobile</th>
    <th>Gender</th>
    <th>City</th>
    <th>Message</th>
    <th>Agree</th>
  </tr>

  <tr style = {{backgroundColor:"red"}}>
    <td>{data.username}</td>
    <td>{data.password}</td>
    <td>{data.email}</td>
    <td>{data.mobile}</td>
    <td>{data.gender}</td>
    <td>{data.city}</td>
    <td>{data.comment}</td>
    <td>{data.agree}</td>
  </tr>
        </table>
      </div>
      
    </>
  );
};

export default Login;
