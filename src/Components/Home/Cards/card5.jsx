import { React, useState, useEffect } from "react";

const Card5 = () => {
  const [currentValue, setCurrentValue] = useState("");
  const [data, setData] = useState([]);

  const onChangeHandler = (event) => {
    //Capture current input field value on change
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const SubmitHandler = () => {
    //Push new value on click of submit button also retain old value
    setData([...data, currentValue]);
  };

  return (
    <>
      
      <h2>im Card No.5</h2>
      <h1>Store Data into Array then render on UI </h1>
      <input type="text" name="myname" onChange={onChangeHandler} />
      <button onClick={SubmitHandler}>Submit</button>
      <table>
      <th>Array Data :</th>

      {data.map((elem)=>{
return<><td>{elem}</td> </>
      })}

      
      </table>
      
    </>
  );
};

export default Card5;
