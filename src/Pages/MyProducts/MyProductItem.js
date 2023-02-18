import React from 'react';

const MyProductItem = ({e}) => {
    const { _id, category, name, condition, contact, description, location, originalPrice, purchaseDate, resalePrice, sellerVerified, sellersName, status
        , img, details } = e;

    return (
        <div>
            <div data-aos="flip-left" className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={img} alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-cente text-cente">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-semibold'> Condition: {condition} </p>
                    <p className='font-semibold'>OriginalPrice: {originalPrice} tk  </p>
                    <p className='font-semibold'>Resale Price: {resalePrice} tk  </p>
                    <p className='font-semibold'>Seller Name: {sellersName}   </p>
                    <p className='font-semibold'>Purchase Date: {purchaseDate} </p>
                    <p className='font-semi-'>Description: {description.slice(0, 100) + " ..."} </p>
                </div>
            </div>
        </div>
    );
};

export default MyProductItem;