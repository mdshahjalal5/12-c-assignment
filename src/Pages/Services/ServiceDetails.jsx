import React, { useContext, useEffect, useState } from 'react';
import {  useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider';
import UseTittle from '../../utils/UseTittle';
import OthersReview from './OthersReview';

const ServiceDetails = () => {
    UseTittle('Service Details')
    const [loading, setLoading] = useState('')
    const [reviews, setReviews] = useState([])
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        async function loader(){
            setLoading(true)
            const fetchRes = await fetch(`https:localhost:6000.vercel.app/orders`)
            const fetchData = await fetchRes.json()
            setReviews(fetchData)
            setLoading(false)
        }
          loader();

    },[user?.email])
 
    const {_id, name, price, ratings, img, details}= useLoaderData();
    const addRiviewHandler = async (form) => {
        if (!user?.email) {
            toast('Login first to review', { autoClose: 1000 })
            return;
        }
        const userPhoto = user?.photoURL;
        let mail, review; 
        review = form.review.value;
        mail =form.email.value ;
        const ReviewData = {
            review, mail, serviceId:_id, userPhoto,
        }
         fetch(`https:localhost:6000.vercel.app/orders`,{
            method:"POST", 
            headers:{
                'content-type':'application/json',
            }, 
            body:JSON.stringify(ReviewData)
        }).then(res => res.json())
            .then(data => {
                if (data?.acknowledged){
                    toast('Riviewd posted successfully')
                    setReviews([...reviews, ReviewData])
                }
            })
    }
    return (
            <>
            {loading ? 
                <div className="flex justify-center items-center  mb-5  ">
                    <div className="spinner-border border-red-500 animate-spin inline-block w-16 h-16 border-4 rounded-full text-blue-600" role="status">
                    </div>
                </div>:''}

            <div className='grid lg:grid-cols-3 md:grid-cols-2'>
                <div data-aos="flip-left" className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={img} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{name}</h2>
                        <h2 className='font-bold'>Price: {price} </h2>
                        <p className='font-bold'> Ratings: {ratings} </p>
                        <p>{details} </p>
                        <div className="card-actions">
                            <button className="btn btn-primary capitalize">Order Now</button>
                        </div>
                    </div>
                </div>
                <div className="card text-center w-96 bg-base-100 shadow-xl border-4">
                    <h2 className='text-2xl'> Others Riviews</h2>
                    {reviews.map((e, i, a) => <OthersReview key={i} e={e}></OthersReview>)}
                </div>
                <div className="card w-96 bg-base-100 shadow-xl border-4">
                    <h2 className='text-2xl text-center'>Add review</h2>
                    <form onSubmit={(a) => {
                        a.preventDefault();
                        addRiviewHandler(a.target)
                    }}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <textarea required name='review' type="text" placeholder="Review" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' defaultValue={user?.email} readOnly type="text" placeholder="email" className="input input-bordered" />

                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Post Review</button>
                        </div>
                    </form>
                </div>

            </div>

            </>
       );
};

export default ServiceDetails;