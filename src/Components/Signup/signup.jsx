import React, { useState, useContext } from "react";
import Logo from '../../../asset/olx-logo.png';
import './signup.css';
import { Toaster, toast } from "sonner"; // Ensure this package exists or replace with 'react-hot-toast'
import { fireContext } from "../../context/fireContex";
import { Authcontext } from "../../context/fireContex";
import { useNavigate } from "react-router-dom";


export default function Signup() {
    const navigate = useNavigate()
    const firebaseProp = useContext(fireContext) 
    const {setUser}=useContext(Authcontext)    // using the context
    const [signState, setSign] = useState('Sign Up');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const formSubmit = async(e) => {
        e.preventDefault();
        if(signState==='Sign Up'){

            if (validation()) {
            firebaseProp.signup(username,email,password,phone)
            setUser(username,phone)
                navigate('/')
                
            }

        }else{

            if(validation()){
                const res=await firebaseProp.login(email,password)
                if(res)navigate('/');
                
                
            }
        }
    };

    const validation = () => {
        if (signState === 'Sign Up') {
            if (!username.trim() || !email.trim() || !password.trim() || !phone.trim()) {
                toast.error('Please fill all the fields');
                return false;
            }
            if (username.length < 4) {
                toast.error('Username must be at least 4 characters');
                return false;
            }
            if (!email.endsWith('@gmail.com')) {
                toast.error('Enter a valid email');
                return false;
            }
            if (phone.length < 10) {
                toast.error('Enter a valid phone number');
                return false;
            }
            if (password.length < 6) {
                toast.error('Password must be at least 6 characters');
                return false;
            }
        } else {
            if (!email || !password) {
                toast.error('Please fill all the fields');
                return false;
            }
            if (!email.endsWith('@gmail.com')) {
                toast.error('Enter a valid email');
                return false;
            }
            if (password.length < 6) {
                toast.error('Password must be at least 6 characters');
                return false;
            }
        }
        return true;
    };
    return(
        <>
       <div className="mainDiv">
       <div className="signupParentDiv">
            <img width="150px" height="120px" src={Logo} alt="OLX Logo"></img>
            <form onSubmit={formSubmit}>
            {signState === 'Sign Up' && <input type="text" id="username" placeholder='Username'onChange={(e) => setUsername(e.target.value)}/>}
            <input type="email" id="email" value={email} placeholder='Email'onChange={(e) => setEmail(e.target.value)}/>
            {signState==='Sign Up' &&<input type="number" id="phone" value={phone} placeholder='Phone'onChange={(e) => setPhone(e.target.value)}/>}
            <input type="password" id="Password" value={password} placeholder='Password'onChange={(e) => setPassword(e.target.value)}/>
            <button type='submit'>{signState}</button> 
            </form>
            <a onClick={() => setSign(signState === 'Sign Up' ? 'Sign In' : 'Sign Up')}>
            {signState === 'Sign Up' ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </a>
        </div>
       </div>
        </>
    )
}

