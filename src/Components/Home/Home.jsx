// const home = {
//   backgroundColor : "lightgreen" , height:"200px" , width:"100%" ,  padding: 0 ,
//   margin: 0}
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  // -----------------------------------------------------------------------
  const handleCard1 = () => {
    navigate("card1");
  };

  const handleCard2 = () => {
    navigate("card2");
  };

  const handleCard3 = () => {
    navigate("card3");
  };

  const handleCard4 = () => {
    navigate("card4");
  };

  const handleCard5 = () => {
    navigate("card5");
  };

  const handleCard6 = () => {
    navigate("card6");
  };
  return (
    <>
      <main>
        <div className="CardContainer">
          <div id="card1" className="box1" onClick={handleCard1}>
            <h2>Create APIs:</h2>
            <p>Cards: No Dashbord with unique ID</p>
            <p>Routing: Do not use private routing</p>
            <p>Login: Login then route on Home page</p>
            <p>Login: If not login then msg user not login</p>
        
            <p>Responsive: MediaQury / Flex, Grid</p>
          </div>
          <div className="box2" onClick={handleCard2}>
          <h2>Google-maps-react</h2>
          <h2>Leaflet</h2>
        <h2>Mapbox-gl JS API</h2>
            
            <p>Other MapIntegration=: Leaflet/Mapbox GL JS/ MapGL/OpenLayers/Google
              Maps React/React Simple Maps/React-map-gl/MapKit JS
            </p>
          </div>
          <div className="box3" onClick={handleCard3}>
            <h2>Store User Data in Database</h2>
            <h2>GraphQL</h2>
            <p>Create one Sing up Form</p>
          </div>

          <div className="box4" onClick={handleCard4}>
            <h2>Fetch API: Cart summary / payment (Async / Await)</h2>
            <h2>Use Protected Routing</h2>
            <h2>UseNavigate & useLocation for Cards</h2>
          </div>

          <div className="box5" onClick={handleCard5}>
            
          <h2>Form Validation</h2>
          </div>

          <div className="box6" onClick={handleCard6}>
          <h2>React Google Map NPM</h2>
          </div>
        </div>
      </main>
    </>
  );
};
export default HomePage;
