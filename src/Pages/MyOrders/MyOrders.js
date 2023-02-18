import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import UseTittle from '../../utils/UseTittle';
import MyOrdersRow from './MyOrdersRow';

const MyOrders = () => {
    UseTittle('My Orders')
    const {user} = useContext(AuthContext)
    const [myOrders, setMyOrders] = useState([])
    const [loading, setLoading ] = useState('')
    useEffect(()=>{
        async function loader(){
            setLoading('truthy')            
            const fetchRes = await fetch(`http://localhost:5000/orders?email=${user?.email}`)
            const fetchData = await fetchRes.json()
            console.log(fetchData, 'fetchData');
            setLoading('')
            setMyOrders(fetchData);            
        }
        if(user?.email){
            loader()
        }
    },[user?.email])
    return (
        <>
        <h2 className='text-center mb-3 text-2xl'>Ordered Products</h2>
            {loading ? <>
                <div className="flex justify-center items-center    ">
                    <div className="spinner-border border-red-500 animate-spin inline-block w-16 h-16 border-4 rounded-full text-blue-600" role="status">
                    </div>
                </div>

            </>:''}
            {myOrders.length ? <>
               <div className='grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {myOrders.map((e, i, a) => { return <MyOrdersRow key={i} e={e}></MyOrdersRow> })}
               </div>
            </>:' '}
           
        </>
    );
};

export default MyOrders;