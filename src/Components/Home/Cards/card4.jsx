import { React, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const Card4 = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(currentValue);
  }, [currentValue]);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setCurrentValue(value);
  };

  const addHandler = () => {
    if (currentValue == "") {
      alert("Enter Value");
    } else {
      setData([...data, { id: uuidv4(), name: currentValue }]);
      setCurrentValue("");
    }
  };

  const handleDelete = (id) => {
    let result = window.confirm("Press a button!");
    if (result === true) {
      const newTodos = data.filter((elem) => {
        return elem.id !== id;
      });

      setData(newTodos);
    }
  };

  return (
    <>
      <h3>To Do App</h3>
      <p>All Cards Keep Save</p>
      <p>
        Delete Functionalitiy & When click on card get popup with pop delete
        cross button
      </p>
      <input
        typr="text"
        onChange={onChangeHandler}
        placeholder="Add Dotos"
        value={currentValue}
      />
      <button onClick={addHandler}>Add List</button>
      <br />

      <div className="todo-grantparent">
        <div className="todo-parent">
          {data.map((elem) => {
            return (
              <>
                <div className="todo-child">
                  {elem.name}
                  <button className="todo-cross-button">X</button>

                  <button
                    onClick={() => {
                      handleDelete(elem.id);
                    }}
                    className="todo-delete-button"
                  >
                    Delete
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Card4;
