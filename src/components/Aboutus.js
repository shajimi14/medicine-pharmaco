import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import checkAuth from "./auth/checkAuth";

function Aboutus() {
    const navigate = useNavigate();
    function goToHomePage(){
        navigate('/')
    }
    return <div>
        <Navbar></Navbar>
  
    <div className="container">
      <div className="row">
        <div className="col-md-6 order-md-2">
          <h1 style={{ color: "aqua",marginTop:"50px" }}>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <Link to="/" className="btn btn-info">Go Home</Link>
        </div>
        <div className="col-md-6 order-md-1">
          <div style={{ backgroundImage: 'url("https://img.freepik.com/free-vector/about-us-concept-illustration_114360-639.jpg?t=st=1713449257~exp=1713452857~hmac=65772c0e1031dd4a2b5b9f0705159b2282d39d3a19506afb164adb1ccae72493&w=740")', backgroundSize: 'cover', height: '90vh', }}></div>
        </div>
      </div>
    </div>


    </div>
}

export default checkAuth(Aboutus);