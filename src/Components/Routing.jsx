import HeaderPage from "./Header/Header";
import FooterPage from "./Footer/Footer";
import HomePage from "./Home/Home";
import AboutPage from "./About/About";
import ContactPage from "./Contact/Contact";
import API from "./DemoApi/API";
import ServicesPage from "./Services/services"
import Login from "./Login/loginForm";
import Card1 from "./Home/Cards/card1";
import Card2 from "./Home/Cards/card2";
import Card3 from "./Home/Cards/card3";
import Card4 from "./Home/Cards/card4";
import Card5 from "./Home/Cards/card5";
import Card6 from "./Home/Cards/card6";
import PageNotFound from "./PageNotFound"
import {BrowserRouter as Router ,  Routes , Route } from "react-router-dom"


const BasicRouting =()=>{

    return(<>

<Router>
<HeaderPage/>
<Routes>
<Route path= "/"     element =  {<HomePage/>} />
<Route path = "about/*" element ={<AboutPage/>}/>
<Route path = "contact" element ={<ContactPage/>}/>
<Route path = "api" element ={<API/>}/>
<Route path = "services"   element={<ServicesPage/>} />
<Route path = "login"   element={<Login/>} />
<Route path = "*" element ={<PageNotFound/>}/>
<Route path = "card1" element ={<Card1/>}/>
<Route path = "card2" element ={<Card2/>}/>
<Route path = "card3" element ={<Card3/>}/>
<Route path = "card4" element ={<Card4/>}/>
<Route path = "card5" element ={<Card5/>}/>
<Route path = "card6" element ={<Card6/>}/>
</Routes>
<FooterPage/>
</Router>


    </>
    
    );
    };

    export default BasicRouting
