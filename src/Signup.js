import React, { useState } from 'react'
import { auth } from './config/fire';
import { useDispatch } from 'react-redux';
import { tokenSlice } from './features/Auth/authSlice';
import {  useNavigate ,Link} from 'react-router-dom';
import './Login.css'

const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirm,setConfirm] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(confirm===password){
          auth.createUserWithEmailAndPassword(email, password).then(u => {
            dispatch(tokenSlice(u.user.uid));
            if(u.user.uid){
              navigate("/");
            }
          }).catch(err => {
              alert("email already in use")
          })
        }else{
          alert("Confirm Password does not match")
        }
    }

  return (
    <div className="login-container"> 
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        id="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="login-input" 
      ></input>
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="login-input" 
      ></input>
      <input
        type="password"
        id="password"
        placeholder="Confirm Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        className="login-input" 
      ></input>
      <button type="submit" className="login-button">Signup</button>
      <Link to="/login" className="signup-link">Already have an account?</Link> 
    </form>
  </div>
  )
}

export default Signup