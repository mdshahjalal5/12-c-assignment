import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';
import UseTittle from '../../utils/UseTittle';
const Register = () => {
    UseTittle('Register')
    const { createUser, googleSignin } = useContext(AuthContext)
     async function handleRegister(form){
        let email, password; 
        email = form.email.value; 
        password = form.password.value;
         const userDefine = form.radio.value;
         console.log(userDefine, 'radio')
         const singUpRes = await createUser(email, password)
         if (singUpRes.user?.uid){
             toast('user successfully register');
             localStorage.setItem('userDefine', userDefine)
            
         }
     }
    const hanldeGoogleLogin = async (e) => {
        e.preventDefault();
        const googleRes = await googleSignin()
        console.log(googleRes, 'googleres');
        if (googleRes.user.uid) {
            toast('User Successfully logged in', { autoClose: 1000 })
            localStorage.setItem("userDefine", 'buyer')
        }
    }

    return (
        <form onSubmit={(e) =>{
            e.preventDefault()
             handleRegister(e.target)}} className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex-col-reverse lg:flex-row-reverse">
                <div className="text-center lg:text-left pl-5">

                    <img className='h-96 rounded-lg' src="https://i.ibb.co/tX5zFRn/download.jpg" alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-3xl font-bold text-center">Register now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input required name='email' type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have Account?</Link>
                            </label>
                            <div className="">
                                <label >
                                    You are? {' '}
                                    <input type="radio" name="radio" value={'buyer'} className="radio-sm" defaultChecked /> Buyer
                                </label>
                                <input type="radio" name="radio" value={'seller'} className="radio-sm ml-3" /> Seller
                            </div>
                            <button onClick={hanldeGoogleLogin} className='flex items-center'>
                                <FaGoogle />
                                <span className='ml-2'>Sign in by  Google</span>
                            </button>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>   
    );
};

export default Register;