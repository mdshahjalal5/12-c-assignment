import React from 'react';

const MyOrdersRow = ({e}) => {
    const { img,name, resalePrice, description, sellersName } =  e;
    console.log(e, 'e')
    console.log(name, description, 'description');
    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <div className="card-body">
                <h2 className="card-title">{name} </h2>
                <p>Price: {resalePrice} tk </p>
                <p>Seller: {sellersName}  </p>
            </div>
        </div> );
};

export default MyOrdersRow;