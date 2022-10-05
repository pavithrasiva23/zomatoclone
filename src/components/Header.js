import React, {useState,useEffect} from "react";
import Login from "./users/Login";
import SignUp from "./users/SignUp";
import { GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

 function Header(props) {
  let [userLogin,setUserLogin] = useState(null);
    let {bgColor}=props;
    let onSuccess= (response)=>{
    let token=response.credential;
    localStorage.setItem("auth_token", token);
     Swal.fire({
      icon: 'success',
      title: 'Login Successfully',
      }).then(()=>{ window.location.reload();})
   
    };
    let onError= ()=>{
alert("Something went wrong try again...");
    };

    let logout=()=>{
      Swal.fire({
        title: 'Are you sure to logout?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {          
            localStorage.removeItem("auth_token");
        window.location.reload();          
        }
      })
        
    }
    useEffect(()=>{      
      let token = localStorage.getItem("auth_token");
      if(token){
      var decoded = jwt_decode(token);
      setUserLogin(decoded);    
      }else{
        setUserLogin(null);
      }     
    },[]);
  return (
    <>
    <GoogleOAuthProvider clientId="498868939741-a958dhmq7ctblnpbkpnesut5g2aup1b6.apps.googleusercontent.com">
    <Login success={onSuccess}
     error={onError}/>
    <SignUp success={onSuccess}
     error={onError}/>    
    <header className={"col-12 py-2 mb-4 "+ bgColor}>        
    <div className="container d-lg-flex justify-content-between ">
    <p className="m-0 brand">e!</p>
    
    {
      userLogin === null?   
      (<div>
        <button className="btn text-white me-3"
       data-bs-toggle="modal"
        data-bs-target="#login">
            Login
            </button>
      <button className="btn text-white border border-white"
       data-bs-toggle="modal"
        data-bs-target="#sign-up">
        Create an account
      </button>
      </div>):(
     
      <div><span className="btn text-white me-3">Welcome,{userLogin.name}</span>
          
      <button className="btn btn-outline-warning " onClick={logout}>
        Logout
      </button>
      </div>
      )}
   
    </div>
    </header>
    </GoogleOAuthProvider>;
    </>
  );
}





export default Header;