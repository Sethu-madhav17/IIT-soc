import React from 'react'
import './Login.css'
function Login()
{
  return (
    <div className="loginpage">
      <form action="" className="login-form d-flex flex-column row-gap-3 justify-content-center">
        <p className="gradient-text">Login</p>
<div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label for="email">Email address</label>
</div>
<div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label for="floatingPassword">Password</label>
</div>
<button className="btn btn-success w-30 d-block mx-auto">Login</button>
      </form>
     
    </div>
  )
}

export default Login;
