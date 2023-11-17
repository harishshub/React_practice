import React, { useState } from "react";
import "./register.css";
export default function Register() {
  const initialCheck ={
    name: { required: false },
    email: { required: false },
    password: { required: false },
    custom_error: null
  }
  const [check, setCheck] = useState(initialCheck);

  const [load, setLoad] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    let check=initialCheck; 
    let anyCheck=false;
    if(inputs.name==''){
      check.name.required=true;
      anyCheck=true;
    }
    if(inputs.email==''){
      check.email.required=true;
      anyCheck=true;
    }
    if(inputs.password==''){
      check.password.required=true;
      anyCheck=true;
    }
    setCheck(check);
    if(!anyCheck){
      setLoad(true);
    }
  };

  const [inputs, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setInput({ ...inputs, [event.target.name]: [event.target.value] });
  };

  return (
    <section className="register-block">
      <div className="container">
        <div className="row">
          <div className="col register-sec">
            <h2 className="text-center">Register Now</h2>
            <form onSubmit={submit} className="register-form" action="">
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-uppercase">
                  Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  onChange={handleInput}
                  name="name"
                  id=""
                />
                {check.name.required ? (
                  <span className="text-danger">Name is required.</span>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1" className="text-uppercase">
                  Email
                </label>

                <input
                  onChange={handleInput}
                  type="text"
                  className="form-control"
                  name="email"
                  id=""
                />
                {check.email.required ? (
                  <span className="text-danger">Email is required.</span>
                ) : null}
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  className="text-uppercase"
                >
                  Password
                </label>
                <input
                  onChange={handleInput}
                  className="form-control"
                  type="password"
                  name="password"
                  id=""
                />
                {check.password.required ? (
                  <span className="text-danger">Password is required.</span>
                ) : null}
              </div>
              <div className="form-group">
                <span className="text-danger">
                  {check.custom_error ? <p>{check.custom_error}</p> : null}
                </span>
                {load ? (
                  <div className="text-center">
                    <div className="spinner-border text-primary " role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : null}

                <input
                  disabled={load}
                  type="submit"
                  className="btn btn-login float-right"
                  value="Register"
                />
              </div>
              <div className="clearfix"></div>
              <div className="form-group">
                Already have account ? Please <a href="#">Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
