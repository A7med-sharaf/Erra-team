
// import"./login.css"  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faKey } from '@fortawesome/free-solid-svg-icons'
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { icon, text } from "@fortawesome/fontawesome-svg-core";
import Swal from 'sweetalert2';

export default function Login() {

const phoneRegxes=/^\+201\d{9}$/;
const coderegex = /^[a-zA-Z0-9]{4}$/;
const inputPhone=useRef();
const condeiput=useRef() ;
const navgit=useNavigate()
  
const handlogin=()=>{
let testphone=phoneRegxes.test(inputPhone.current.value)
let testcoderegex=coderegex.test(condeiput.current.value)

let data={
  "use_phone":inputPhone.current.value,
  "use_code":condeiput.current.value
}
  if( testphone && testcoderegex){
    axios.post("https://support.israaosman.com/php/index.php/api/auth/login", data).then((res)=>{
      if(res.data.err){
        // alert(res.data.msg)
        console.log(res.data);
        Swal.fire({
          icon:"error",
          text:res.data.msg,
        })
        
      }else{
       
        navgit("home")
        Swal.fire({
          icon:"success",
          text:res.data.msg,
        })

      }
      
    })
    // alert("data is valid")
  }else{
    alert("data is invalid")
  }
}
  return (
    <div className="Login col-12 col-sm-6 col-md-3 m-auto   mt-5">
        <div className="card cardlogin shadow p-3 ">
            <h1 className="text-center ">Customer Login</h1>
            <label>phone</label>
             <div className="input-email mb-3">
            <FontAwesomeIcon className="icon-email" icon={faEnvelope} />
           <input  ref={inputPhone} type="email" className="form-control text-center"   placeholder="Inter the phone +249" />
           </div>
           <div className="input-password">
           <FontAwesomeIcon className="icon-password" icon={faKey} />
            <label>Password</label>
           <input ref={condeiput} type="text" className="form-control mb-5 text-center" placeholder="Inter your password" />
           </div>
           <div className="">
        <button className="btn btn-primary w-100" onClick={handlogin}>Login</button>
        </div>
            <span className="text-center">Don't have account?<a href="#" >click here</a></span>
        </div>
    </div>
  )
}
