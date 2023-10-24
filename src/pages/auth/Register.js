import React, { useEffect, useState } from 'react'
import styles from './Auth.module.scss'
import loginImg from '../../assets/login.png'
import Card from '../../components/card/Card'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { validateEmail } from '../../utils/helperFunctions'
import {useDispatch, useSelector} from 'react-redux'
import { ResetAuth, register } from '../../redux/features/auth/authSlice'
import Loader from '../../components/loader/Loader'


const initialState ={
 name:"",
 email:"",
 password:"",
 cPassword:""
}

const Register = () => {
  const [formData, setFormData] = useState(initialState);
  const {name, email, password, cPassword} = formData;
  const dispatch = useDispatch();

  const {isLoading, isLoggedIn, isSuccess} = useSelector((state) => state.auth);

  const navigate = useNavigate();


  const registerUser = async (e)=>{
    e.preventDefault();
    if(!email || !password){
      return toast.error("all fields are required");
    }
    if(password.length < 6){
      return toast.error("Password must be up to 6 characters");
    }
    if(!validateEmail(email)){
      return toast.error("Please enter a valid email");
    }
    if(cPassword !== password) {
      return toast.error('Passwords do not match');
    }
    //register user logic here
    const userData = {
      name,
      email,
      password
    }

    await dispatch(register(userData));
 }


 useEffect(() => {
  if(isLoggedIn && isSuccess === true){
    navigate("/");
  }
  dispatch(ResetAuth());
 }, [isSuccess, isLoggedIn, dispatch, navigate]);
 

 const handleInputChange = (e)=>{
  const {name, value} = e.target;
  setFormData({...formData,[name]:value})
 }

  return (
    <>
    {isLoading && <Loader />}
    <section className={`container ${styles.auth}`}>
      <Card>
       <div className={styles.form}>
        <h2>Register</h2>
        <form onSubmit={registerUser}>
         <input 
         type="text" 
         placeholder="name"
         required
         name={'name'}
         value={name}
         onChange={(e) => handleInputChange(e)}
         />
         <input 
         type="text" 
         placeholder="Email"
         required
         name={'email'}
         value={email}
         onChange={(e) => handleInputChange(e)}
         />
         <input 
         type="password" 
         placeholder="Password"
         name={'password'}
         required
         value={password}
         onChange={(e) => handleInputChange(e)}
         />
         <input 
         type="password" 
         placeholder="Confirm Password"
         required
         name={'cPassword'}
         value={cPassword}
         onChange={(e) => handleInputChange(e)}
         />
         <button type='submit' className='--btn --btn-primary --btn-block'>Register</button>
        </form>
        <span className={styles.register}>
         Already have an account? <Link to="/login">Login</Link>
        </span>
       </div>
      </Card>

      <div className={styles.img}>
       <img  src={loginImg} alt='mobile' width={400}/>
      </div>
    </section>
    </>
  )
}

export default Register
