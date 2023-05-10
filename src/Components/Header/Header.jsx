
import { Link , NavLink } from "react-router-dom";
const HeaderPage =()=>{
    return (<>
   
   <div  className="mainHeader">
<h1 style= {{textAlign:"center"}}>Testing Repository</h1>

<nav>
<div>
<ul>
<NavLink to="/" className="Link">Home</NavLink>
<Link to="about" className="Link">About</Link>
<Link to="services" className="Link">Services</Link>
<Link to="contact" className="Link">Contact</Link>
<Link to="api" className="Link">API</Link>
</ul>
</div>

<div>
<Link to="login" className ="btn-login">Login</Link>
</div>

</nav>


</div>











    </>
    );
};

export default HeaderPage;