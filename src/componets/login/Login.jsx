import "./login.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope , faKey } from '@fortawesome/free-solid-svg-icons'

export default function Login() {



  
    
  
  return (
    <div className="Login col-12 col-sm-6 col-md-3 m-auto   mt-5">
        <div className="card cardlogin shadow p-3 ">
            <h1 className="text-center anton-regular">Customer Login</h1>
            <label>Email</label>
             <div className="input-email mb-3">
            <FontAwesomeIcon className="icon-email" icon={faEnvelope} />
           <input  type="email" className="form-control"   placeholder="inter the Email" />
           </div>
           <div className="input-password">
           <FontAwesomeIcon className="icon-password" icon={faKey} />
            <label>Password</label>
           <input type="password" className="form-control mb-5" placeholder="inter your password" />
           </div>
           <div className="">
        <button className="btn btn-primary w-100" >Login</button>
        </div>
            <span className="text-center">Don't have account?<a href="#" >click here</a></span>
        </div>
    </div>
  )
}
