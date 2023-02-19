import React, { useEffect, useState } from 'react';
import UseTittle from '../../utils/UseTittle';
import ServiceItem from '../Services/ServiceItem';

const Xiomi = () => {
    UseTittle('Xioami')
    const [services, setServices] = useState([])
    const [loading, setLoading] = useState(false)
 useEffect(function anyName(){
        const loader = async()=>{
            setLoading('truthy')
            const fetchRes = await fetch(`https://12s-assignment.vercel.app/products?category=XIAOMI`)
            const fetchData = await fetchRes.json();
            setLoading('')
            setServices(fetchData)
        }
         loader();
    }, [])
    return (
        <>
            <div>
                {loading ? <>
                    <div className="flex justify-center items-center    ">
                        <div className="spinner-border border-red-500 animate-spin inline-block w-16 h-16 border-4 rounded-full text-blue-600" role="status">
                        </div>
                    </div>
                </> : ' '}
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-8'>
                {services.map((e, i, a) => {

                    return <ServiceItem key={i} e={e}> </ServiceItem>
                })}
            </div>
        </>
    );
};

export default Xiomi;