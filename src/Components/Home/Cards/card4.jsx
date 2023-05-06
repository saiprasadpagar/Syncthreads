import { React, useEffect, useState } from "react";

const Card4 = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  const onChangeHandler = (event) => {
    const { value } = event.target;
    setCurrentValue(value);
  };

  const addHandler = () => {
    setData([...data, currentValue]);
  };



//method 2
  const handleDelete = (index) => { 
    const cloneData = JSON.parse(JSON.stringify(data)); //Deep Copy
   let newData = cloneData.splice(index, 1 )   

console.log(data)
console.log(newData)
   
setData(cloneData)
return data
  }
    
    
    //method:1
  //   const newTodos = data.filter((elem, i) => {
  //     return i !== index;
  //   });

    // setData(newTodos);
  //   // return data;
  // };

  return (
    <>
      <h3>To Do App</h3>
      <p>All Cards Keep Save</p>
      <p>
        Delete Functionalitiy & When click on card get popup with pop delete
        cross button
      </p>
      <input typr="text" onChange={onChangeHandler} />
      <button onClick={addHandler}>Add List</button>
      <br />

      <div className="todo-grantparent">
        <div className="todo-parent">
          {data.map((elem, index) => {
            return (
              <>
                <div id={index} className="todo-child">
                  {`${elem} index = ${index}`}
                  <button className="todo-cross-button">X</button>

                  <button
                    onClick={() => {
                      handleDelete(index);
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
