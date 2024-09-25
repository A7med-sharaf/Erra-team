import "./signup.css"

export default function Signup() {
    
  return (
        <div className=" col-12 col-sm-6 col-md-3 m-auto   d-flex justify-content-center align-content-center mt-5">
        <div className="card shadow p-3">
            <h1 className="text-center">signup</h1>
            <div className="input-f mt-3">
                <label htmlFor="" className="lable">Fistname</label>
                <input type="text" className="form-control" />
            </div>
            <div className="input-l mt-3">
                <label htmlFor="" className="lable">Lastname</label>
                <input type="text" className="form-control" />
            </div>
            <div className="input-p mt-3">
                <label htmlFor="" className="lable">Password</label>
                <input type="text" className="form-control" />
            </div>
            <div className="input-c mt-3">
                <label htmlFor="" className="lable">Confirm Password</label>
                <input type="text" className="form-control" />
            </div>

            <div className="btn">
                <button className="btn btn-primary w-100" >
                Register Now
                </button>
            </div>
            <div className="check mt-3 text-center">
                <input type="checkbox"  />
                <span>Accepte all trmes & condition? <a href="#">login now</a></span>
            </div>
        </div>
        </div>
    
  )
}
