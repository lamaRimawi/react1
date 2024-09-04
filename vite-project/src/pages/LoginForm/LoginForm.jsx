import React from 'react'
import './LoginForm.css'

function LoginForm() {
  return (
      <div className={'mt-5 mb-5 container'}>
        <div className="container  login-container row">
          <div className="card  col-md-5 shadow">
            <div className="card-body">

              <div id="alertMessage" className="alert alert-dismissible fade show d-none" role="alert">
                <span id="alertText"></span>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>

              <h3 className="card-title text-center mb-4">Sign In</h3>
              <form id="loginForm" className="needs-validation" noValidate>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" placeholder="email@example.com" required/>
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                  </div>

                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" placeholder="Password" required/>
                  <div className="invalid-feedback">
                    Please enter your password.
                  </div>

                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="rememberMe"/>
                  <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                </div>
                <button type="submit" className="btn btn-primary btn-hover w-100" id="signIn">Sign in</button>
              </form>

              <div className="text-center mt-2">
                <a href="register.html">New around here? Sign up</a>
              </div>
            </div>
          </div>

      <div className={'col-2'}></div>

        <div className="card  col-md-5 shadow">
          <div className="card-body">
            <div id="alertMessage" className="alert alert-dismissible fade show d-none" role="alert">
              <span id="alertText"></span>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <h3 className="card-title text-center mb-4">Sign Up</h3>
            <form id="registerForm" className="needs-validation" noValidate>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">User Name</label>
                <input type="text" className="form-control" id="name" placeholder="Enter user name" required/>
                <div className="invalid-feedback">
                  Please enter a valid name.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="email@example.com" required/>
                <div className="invalid-feedback">
                  Please enter a valid email address.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password" required/>
                <div className="invalid-feedback">
                  Please enter your password.
                </div>
              </div>
              <button type="submit" className={"btn btn-primary w-100"} id="signup">Sign Up</button>
            </form>
            <div className="text-center mt-2">
              <a href="login.html">Have an account? Sign In</a>
            </div>
          </div>
        </div>
</div>
      </div>
  )
}

export default LoginForm
