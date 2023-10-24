import styles from './Auth.module.scss'
import loginImg from '../../assets/login.png'
import Card from '../../components/card/Card'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { validateEmail } from '../../utils/helperFunctions'
import { useDispatch, useSelector } from 'react-redux'
import { ResetAuth, login } from '../../redux/features/auth/authSlice'
import Loader from '../../components/loader/Loader'

const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const dispatch = useDispatch();
 const navigate = useNavigate();

 const {isLoading, isLoggedIn, isSuccess} = useSelector((state)=> state.auth)

 const loginUser = async (e)=>{
  e.preventDefault();
    if(!email || !password){
      return toast.error("all fields are required");
    }

    if(!validateEmail(email)){
      return toast.error("Please enter a valid email");
    }
    //register user logic here
    const userData = {
      email,
      password
    }


    await dispatch(login(userData));
 }

 useEffect(() => {
  if(isLoggedIn && isSuccess === true){
    navigate("/");
  }
  dispatch(ResetAuth());
 }, [isSuccess, isLoggedIn, dispatch, navigate]);
  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
        <img  src={loginImg} alt='mobile' width={400}/>
        </div>
        <Card>
        <div className={styles.form}>
          <h2>Login</h2>
          <form onSubmit={loginUser}>
          <input 
          type="text" 
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input 
          type="password" 
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit' className='--btn --btn-primary --btn-block'>Login</button>
          </form>
          <span className={styles.register}>
          Don’t have an account? <Link to="/register">Sign up now!</Link>
          </span>
        </div>
        </Card>
      </section>
    </>
  )
}

export default Login
