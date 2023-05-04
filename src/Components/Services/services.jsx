import React from "react";
import {Link} from "react-router-dom";
import { Outlet } from "react-router-dom";
const ServicesPage =()=>{
    return(<>

<h2 style = {{ backgroundColor:"crimson" , height:"200px"}}>Services Component</h2>
<nav>
<Link to="marketing">Marketing</Link>
<Link to="branding">Branding</Link>
<Link to="development">Development</Link>
</nav>
<Outlet/>
    </>
    
    );
};

export default ServicesPage;