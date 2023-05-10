import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "../../../Redux/Action/Actions";

const Card2 = () => {
  const myState = useSelector((state) => state.CounterReducer); //consumer give up Access state

  //  useEffect(()=>{
  // console.log(myState)
  //  },[myState])

  const dispach = useDispatch();

  const addHandler = () => {
    dispach(incNumber(5));
  };

  const subHandler = () => {
    dispach(decNumber(5));
  };

  return (
    <>
      <h2>Card No.2</h2>
      <h3>Test Counter Redux Working or Not</h3>

      <button onClick={addHandler}>Add</button>
      <h1>{myState}</h1>
      <button onClick={subHandler}>Sub</button>
    </>
  );
};

export default Card2;
