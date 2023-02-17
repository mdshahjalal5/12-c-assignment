import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider';

const Header = () => {
    const [userDefine, setUserDefine] = useState('buyer')
    const { logOut, user} = useContext(AuthContext)
    console.log(userDefine, 'userDefine')
    useEffect(()=>{
        setUserDefine(localStorage.getItem("userDefine"))         
    }, [user])
    function handleLogout(){
        logOut()
        .then(toast('successfully logout'))
    }
    const buyer = <div>
        <li><Link to={'/'}>My Orders</Link></li>
    </div>
    const seller = <>
        <li><Link to={'/'}>My Products</Link></li>
        <li><Link to={'/'}>Add a product</Link></li>
    </>
        
    
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        {userDefine === 'buyer'? buyer:seller}
                        <li tabIndex={0}>
                            {user?.uid ? '' : <Link to={'login'} className="justify-between">
                                Login
                            </Link>}
                         
                        </li>
                                            {user?.email ? <li><Link to={'/myreviews'}>My Reviews </Link></li> :' '}

                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li tabIndex={0}>
                            {user?.uid ? <button onClick={handleLogout}>
                                Logout
                            </button> : ' '}

                        </li>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Phone Planets</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>
                    {userDefine === 'buyer' ? buyer : seller}
                    <li tabIndex={0}>
                        {user?.uid ? ' ' : <Link to={'login'} className="justify-between">
                            Login
                        </Link>}
                  
                    </li>
                    {user?.email ? <li><Link to={'/myreviews'}>My Reviews </Link></li> :' '}
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li tabIndex={0}>
                        {user?.uid ? <button onClick={handleLogout}>
                            Logout
                        </button> :' '}
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-10 rounded-full">
                        <img title={user?.email || "Not logged in"} src={user?.photoURL ? user.photoURL : 'https://i.ibb.co/m5t2C8t/download.png'} alt='sfs' />
                    </div>
                </div>
            </div>
        </div>   
         );
};

export default Header;