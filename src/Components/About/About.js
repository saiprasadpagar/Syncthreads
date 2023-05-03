import React from "react";
import Overview from "./Overview";
import Team from "./Team";
import { Routes , Route } from "react-router-dom"
import { Link } from "react-router-dom";

const AboutPage =()=>{
    return(<>
<div style = {{ backgroundColor:"crimson" , height:"200px"}}>
<h2 >About Component</h2>
<p>Click On Teams or Overview to see Nested Route ...3000/about/team </p><br/>
<Link to="team" className="Link">Teams</Link>
<Link to="overview" className="Link">Overview</Link>
</div>
<Routes>
<Route path = "overview" element ={<Overview/>}/>
<Route path = "team" element ={<Team/>}/>
</Routes>



    </>
    
    );
};

export default AboutPage;