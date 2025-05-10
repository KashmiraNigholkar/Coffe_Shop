import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Login</h1>
        Email:<input type="text"  placeholder='email'/>
        <br /><br />
        Password: <input type="text" placeholder='password' />
        <br /><br />
        <button>SUBMIT</button>
    </div>
  )
}

export default Login