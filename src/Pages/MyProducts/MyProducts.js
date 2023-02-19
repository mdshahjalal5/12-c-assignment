import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/Authprovider';
import UseTittle from '../../utils/UseTittle';
import ServiceItem from '../Services/ServiceItem';
import MyProductItem from './MyProductItem';

const MyProducts = () => {
    UseTittle('My Reviews')
    const { user } = useContext(AuthContext)
    const [myProducts, setMyProducts] = useState([])
    const [loading, setLoading] = useState('')
    useEffect(() => {
        async function loader() {
            setLoading('truthy')
            const fetchRes = await fetch(`https://12s-assignment.vercel.app/products?email=${user?.email}`)
            const fetchData = await fetchRes.json()
            setLoading('')
            setMyProducts(fetchData);
        }
        if (user?.email) {
            loader()
        }
    }, [user?.email])

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8'>
            {myProducts.map((e, i, a) => {

                return <MyProductItem key={i} e={e}></MyProductItem>
            })}
        </div>
    );
};

export default MyProducts;