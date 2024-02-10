import React, {useState} from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Storage from '../Storage/Storage.js';
import { FaRegUser, FaLock  } from "react-icons/fa";
function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    
    function handleLogin() {
        
        if(username==='username' && password === 'password' ){
            navigate('/storage')
        }
    }
    return(
        <div className='wrapper'>
            <div>
                <form action="">
                    <h1>Login</h1>
                </form>
            </div>
            <div className='inputBox'>
                <input 
                type="text"
                placeholder='Username' 
                required
                value={username}
                onChange={event => setUsername(event.target.value)}
                />
                <FaRegUser className='icon'/>
            </div>
            <div className='inputBox'>
                <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                />
                <FaLock className='icon'/>
            </div>
            <div className='rememberForgot'>
                <label><input type="checkbox"/>Remember me </label>
                <a href="#">Forgot Password</a>
            </div>
            <button onClick={handleLogin}>Login</button>
            <div className='register-link'>
                <p>Dont have an account <a href="#">Register </a> </p>
            </div>
        </div>
    );
};
export default Login;