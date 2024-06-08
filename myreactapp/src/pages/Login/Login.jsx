import React , {useState} from 'react'
import './Login.css'
import logo from '../../assets/logo.png'


const Login = () => {
  const[signState , setSignState] = useState ("sign in");
   return (
    <div className='login'>
      <img src={logo} className='login-logo'alt="" />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form >
          {signState=="sign up"?
          <input type='text' placeholder='your name'/>:<></>}
          <input type='email' placeholder='Email'/>
          <input type='password' placeholder='Password'/>
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">remember me</label>
            </div>
            <p>need help?
            </p>
          </div>
        </form>
        <div className="form-switch">
          {signState=="sign in"?
          <p>new to netflix?<span onClick={()=>{setSignState("sign up")}}>sign up now</span></p>:
          <p>already have an account?<span onClick={()=>{setSignState("sign in")}}>sign in now</span></p>
          }
          
          
        </div>
      </div>
      
    </div>
  )
}

export default Login