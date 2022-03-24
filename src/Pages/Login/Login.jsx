import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import {useState} from "react";
import { useAuth } from "../../Context/AuthContext/auth-context";

const Login = () => {
    const navigate = useNavigate();
    const {authDispatch} = useAuth();
    const [userData,setUserData] = useState({email:"",password:""});

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
      }
    const loginHandler = async (event)=>{
        event.preventDefault();
        try{
            const response = await axios.post("/api/auth/login",{	email: userData.email,
				password: userData.password});
            if(response.status === 200){
                authDispatch({type:'LOGIN',payload:{user:response.data.foundUser,token:response.data.encodedToken}});
                localStorage.setItem("token",response.data.encodedToken);
                localStorage.setItem("user",JSON.stringify(response.data.foundUser));
                navigate("/");
                alert("Logged in");
            }
            else {
                throw new Error();
            }
        }
        catch (error){
            console.log(error);
        }
    }
    return (
        <>
        <div className="auth-container">
            <h2 className="form-heading center-text">Login</h2>
            <form action="" method="post">
                <div className="input-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" className="textfield" required autoComplete="off" id="email" value={userData.email} onChange={changeHandler}/>
                </div>
                <div className="input-group">
                    <label htmlFor="lpassword">Password</label>
                    <input type="password" name="password" required id="lpassword" value={userData.password} onChange={changeHandler} autoComplete="off"/>
                </div>
                <div className="choice-group">
                    <input type="checkbox" name="remember" id="remember"/>
                    <label htmlFor="remember" className="remember">Remember me</label>
                    <a className="forgot-pass">Forgot your Password?</a>
                </div>
                <button type="submit" className="btn btn-primary" onClick={loginHandler}>Login</button>
            </form>
            <div className="signup-group">
                <Link to="/signup" className="signup-link">Create New Account</Link>
                <span className="material-icons-outlined">navigate_next</span>
            </div>
        </div>
        </>
    );
}

export {Login};