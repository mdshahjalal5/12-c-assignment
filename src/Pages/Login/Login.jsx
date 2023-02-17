import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import UseTittle from '../../utils/UseTittle';
const Login = () => {
    UseTittle('Login')
    const { login, googleSignin } = useContext(AuthContext)
    const hanldeGoogleLogin =async (e) =>{
        e.preventDefault();
        const googleRes = await googleSignin()
        if (googleRes.user.uid) {
            toast('User Successfully logged in', { autoClose: 1000 })
            localStorage.setItem("userDefine", 'buyer')
        }
    }
    const handleLogin = async (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        const userDefine = form.radio.value;
        localStorage.setItem('userDefine', userDefine)
        console.log(userDefine, 'radio')
        const loginRes = await login(email, pass);
        if(loginRes?.user){
            localStorage.setItem("userDefine", userDefine)
            toast('Successfully logged in')
        }
        console.log(loginRes, 'loginres');
    }
    return (
        <form onSubmit={handleLogin} className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:text-left pl-5">
                   
                    <img className='h-96 rounded-lg' src="https://i.ibb.co/tX5zFRn/download.jpg" alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-2xl text-center font-bold">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' required  type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password"  required  placeholder="password" className="input input-bordered" />
                            <div className="pt-2">
                                <label >
                                    You are? {' '}
                                    <input type="radio" name="radio" value={'buyer'} className="radio-sm" defaultChecked /> Buyer
                                </label>
                                <input type="radio" name="radio" value={'seller'} className="radio-sm ml-3" /> Seller
                            </div>
                            <label className="label">
                                <Link to="/register" className="label-text-alt link link-hover">Not have Account?</Link>
                            </label>
                            <button onClick={hanldeGoogleLogin} className='flex items-center'>
                                <FaGoogle />
                                <span className='ml-2'>Sign in by  Google</span>
                            </button>
                         
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type='submit'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>   
 );
};

export default Login;