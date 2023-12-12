import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='login-section'>
            <input className='input-field' type="text" placeholder='Input your email'/> <br />
            <input className='input-field' type="text" placeholder='Input your password'/>
        </div>
    );
};

export default Login;