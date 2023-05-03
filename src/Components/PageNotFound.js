import {Link} from "react-router-dom"
const PageNotFound =()=>{
    return (<>
<div style={{backgroundColor:"orange" , textAlign:"center"}}>
<h1 >404</h1>
<h2> Sorry ! Page Not Found</h2>
<Link to="/">Go to Home Page</Link>
</div>
    </>
    );
};
export default PageNotFound;