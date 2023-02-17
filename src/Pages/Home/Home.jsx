import React, { useEffect, useState } from 'react';
import ServiceItem from '../Services/ServiceItem';
import Banner from './Banner';
import { Link } from 'react-router-dom';
import UseTittle from '../../utils/UseTittle';
const Home = () => {
    UseTittle('Home')
    const [services, setServices] = useState([])
    useEffect(function named() {
        const loader = async () => {
            const fech = await fetch('data.json', {
                method: 'GET',
                headers: {
                    test: { intro:'shahjalal'}
                }
            })
            const data = await fech.json();
            console.log(data, 'data')
            setServices(data)
            return data;
        }
        loader();
    }, [])

    return (
     <>
            <div className='bg-gray-400 rounded-lg'> <Banner ></Banner></div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8'>
             
                {/* {services.map((e, i, a) => <ServiceItem key={i} e={e}> </ServiceItem>)} */}
                <div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/S51Xjs0/download.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Samsung Gallery</h2>
                        <p>There would have been no Beats deal without the Samsung deal. It showed the number one company the importance of connecting with culture.</p>
                        <div className="card-actions justify-end">
                            <Link to={'/samsung'}><button className="btn btn-primary">View All</button></Link>
                        </div>
                    </div>
                </div><div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/Y8zhbBr/download.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Gallery of OPPO</h2>
                        <p>“Inspiration Ahead” is OPPO's attitude towards the current state of the world, and is also shared by the group of people that OPPO wants to empower.</p>
                        <div className="card-actions justify-end">
                            <Link to={'/oppo'}><button className="btn btn-primary">View All</button></Link>
                        </div>
                    </div>
                </div><div className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="https://i.ibb.co/kcVw04X/download.jpg" alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">XIOMI Gallery</h2>
                        <p>
                            Xiaomi is focused on being the most user-centric mobile internet company, and we aim to constantly exceed expectations through innovations </p>
                        <div className="card-actions justify-end">
                            <Link to={'/xiomi'}><button className="btn btn-primary">View All</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link to={'/services'}>  <div className="flex justify-center mt-4"><button className="btn btn-active btn-ghost capitalize">See all</button></div></Link>
     </>
    );
};

export default Home;