import React from "react";
import { userDataAction } from "../../../Redux/Action/Actions.js";
// import { userDataAction } from "../../../Redux/Action/Actions";
import { useDispatch, useSelector } from "react-redux";

const Card3 = () => {
  const userData = useSelector((state) => state.UserDataReducer);
  const dispatch = useDispatch();
  console.log(userData);

  const onclickUpdateData = () => {
    dispatch(userDataAction());
  };

  return (
    <>
      <h2>Card No.3</h2>
      <div>
        <h2>Test Access Data from Store Globally</h2>
        <p>
          I Wannaa Access userData here so i have Created Action, Reducer &
          added reducer inside store
        </p>
        <h3>
          Name:{userData.name} City:{userData.city}
        </h3>
        <button onClick={onclickUpdateData}>Update initial State</button>
      </div>
    </>
  );
};

export default Card3;
