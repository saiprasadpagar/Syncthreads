const initialState = {
    id:123,
    name:"saiprasad",
    city:"pune",
    company:"TCS"
};         

const UserDataReducer =(state = initialState , action)=>{
switch(action.type){
case "userData" : return {
    ...state, city:"mumbai"
}
default: return state;
   } 

};

export default UserDataReducer;