import { Link} from "react-router-dom";

// const mystyle={
    
//     margin: "3px",
//     width: "50px",
//     padding: "8px",
//     listStyleType: "none",
//     textDecoration: "none",
//     backgroundColor: "rgb(124, 233, 114)",
//     border: "2px solid black"}





const FooterPage =()=>{
    return (<>
    
    <footer className = "mainFooter">
<p> All Rights Recived &copy; to Saiprasad Pagar </p>
<nav>
<ul >
<Link to="about" > About</Link>
<Link to="contact" >Contact</Link>
<Link to="product" >Product</Link>
<Link to="services" >Services</Link>
</ul>
</nav>
    </footer>
   
    </>
    );
};

export default FooterPage;