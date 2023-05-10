export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decNumber = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

export const userDataAction = () => {
  return {
    type: "userData",
    payload: "sai",
  };
};

//----------------------------Notes-----------------------------------
//Actions are javascript object that contain information
//Actions tells What to do
//create Actions using Action Creator Function & it retun one object
//type:"" properties must be Constant string.

/**
 const IncNumber = (we can acces argument as a parameter at from dispach() )=>{
return {
type:"INCREMENT"
}
}
  */
