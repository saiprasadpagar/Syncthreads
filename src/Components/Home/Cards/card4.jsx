import { React, useState } from "react";

const Card4 = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [data, setData] = useState([]);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setCurrentValue(value);
  };

  const addHandler = () => {
    setData([...data, currentValue]);
  };

  return (
    <>
      <h3>To Do App</h3>
      <input typr="text" onChange={onChangeHandler} />
      <button onClick={addHandler}>Add List</button><br/>
      <div className="todo-cards">
      {data.map((elem) => {
        return (
          
            <div className="todo-li">{elem}</div>
          
        );
      })}
      </div>
    </>
  );
};

export default Card4;
