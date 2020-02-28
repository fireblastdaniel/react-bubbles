import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({username: '', password: ''})

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/api/login', credentials)
      .then( res => {
        console.log(res)
        window.localStorage.setItem('token', res.data.payload)
        props.history.push('/bubble')
      })
      .catch( err => console.log(err) )
  }



  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      {/* <p>Build a login page here</p> */}
      <form onSubmit={login} className = 'login-form'>
        <label>
          Username: 
          <input type='text' name='username' onChange={handleChange}/>
        </label>

        <label>
          Password:
          <input type='text' name='password' onChange={handleChange}/>
        </label>
        <input type='submit' className='submit-btn'/>
      </form>
    </>
  );
};

export default Login;
