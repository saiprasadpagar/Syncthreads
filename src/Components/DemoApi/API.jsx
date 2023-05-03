import React, { useState } from "react";

const API = () => {
  const [data ,  setData] =useState()

//We can use promises insted of Call back function to avoid Callback hell
//Backend Guy Will Create Promises
  let userData = new Promise(function (resolve, reject) {
    let a = 1 + 1;
    if (a === 2) {
      return resolve("API is Working");
    } else {
      return reject("API is Not Working");
    }
  });
  

  //AsyncAwait Method: Consumer(frontend guy) wil handle userdata Api buy using Async/Await
    async function HandlePromise() {
    const Responce = await userData;
    console.log(Responce)
    setData(Responce)
  }
  
  

  return (
    <>
      <h2>Async Await Method</h2>
      <h2>Output:{data}</h2>
      <button onClick={HandlePromise}> Payment</button>
    </>
  );
};

export default API 
