import React from 'react'
import './Signup.css';
const Signup = () => {
   return (
    <div className="loginpage">
      <form action="" className="login-form">
        <h1>Signup</h1>
        <div className="form-floating">
  <input type="text" className="form-control" id="floatingname" placeholder="Name"/>
  <label for="floatingName">Name</label>
</div>
<div className="form-floating ">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="email">Email address</label>
</div>
<div className="form-floating">
  <input type="tel" className="form-control" id="floatingphone" placeholder="Mobile Number"/>
  <label for="floatingPassword">Mobile Number</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Create Password</label>
  
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Confirm Password</label>
  
</div>


<button className="btn btn-success w-50 d-block mx-auto">Login</button>
      </form>
     
    </div>
  )
}

export default Signup;
