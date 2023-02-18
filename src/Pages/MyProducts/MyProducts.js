import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import UseTittle from '../../utils/UseTittle';

const MyProducts = () => {
    UseTittle('My Reviews')
    const { user } = useContext(AuthContext)
    const [myOrders, setMyOrders] = useState([])
    const [loading, setLoading] = useState('')
    useEffect(() => {
        async function loader() {
            setLoading('truthy')
            const fetchRes = await fetch(`http://localhost:5000/products?email=${user?.email}`)
            const fetchData = await fetchRes.json()
            console.log(fetchData, 'fetchData');
            setLoading('')
            setMyOrders(fetchData);
        }
        if (user?.email) {
            loader()
        }
    }, [user?.email])

    return (
        <div>
            my products 
        </div>
    );
};

export default MyProducts;