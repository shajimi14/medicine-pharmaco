import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../store/authSlice";
import Navbar from "../Navbar";
import {useNavigate} from "react-router-dom";
import checkGuest from "./checkguest";

function Login() {
    var [email, setEmail] = useState('');
    var [password, setPassword] = useState('');
    var [errorMessage, setErrorMessage] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    function attemptLogin() {
        axios.post('https://medicalstore.mashupstack.com/api/login',{
            email:email,
            password:password
        }).then(response=>{
            setErrorMessage('')
            var user = {
                email:email,
                token:response.data.token
            }
            dispatch(setUser(user));
    navigate("/");
        }).catch(error=>{
            if(error.response.data.errors){
                setErrorMessage(Object.values(error.response.data.errors).join(''))
            }else if(error.response.data.message){
                setErrorMessage(error.response.data.message)
            }else{
                setErrorMessage('Failed to login user. Please contact admin')
            }
        })
    }
    return (<div>
        <Navbar/>
        <div className="container">
    <div className="row">
        <div className="col-md-6">
            <img src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?t=st=1713454316~exp=1713457916~hmac=4b387354ec2c8f596cc2b98950f03b4124999c7d649188062fe8345a7d8ba389&w=740" alt="Login Illustration" className="img-fluid" />
        </div>
        <div className="col-md-6">
            <div className="col-8 offset-2">
                <h1 className="text-center mt-2 pt-2">Login</h1>
                {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
                <div className="form-group">
                    <label style={{fontSize:"20px ",fontWeight:"bold" }} className="text-primary">Email:</label>
                    <input
                        type="text"
                        className="form-control"
                        style={{ color: 'aqua' }}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)} placeholder="email"
                    />
                </div>
                <div className="form-group">
                    <label style={{fontSize:"20px ",fontWeight:"bold" }} className="text-primary">Password:</label>
                    <input
                        type="password"
                        className="form-control "
                        style={{ color: 'aqua' }}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <br />
                <div className="form-group">
                    <button
                        className="btn btn-primary btn-block"
                        style={{ backgroundColor: '#007bff', color: 'white' }}
                        onClick={attemptLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>)
}

export default checkGuest(Login);