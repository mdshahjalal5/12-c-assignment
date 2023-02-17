import React from 'react';

const AddProducts = () => {
    // const order = {
    //     serviceId: _id,
    //     name,
    //     condition,
    //     contact,
    //     description,
    //     originalPrice,
    //     purchaseDate,
    //     resalePrice,
    //     sellerVerified,
    //     sellersName,
    //     status,
    //     category,
    //     img,
    //     email: user?.email,
    // }
    return (
        <div>
            <form >
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">User name:</span>
                    </label>
                    <input name='username' type="text"   placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold">User email:</span>
                    </label>
                    <input name='useremail'   type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold">Product:</span>
                    </label>
                    <input name='productname'  type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold">Price: </span>
                    </label>
                    <input name='resaleprice'   type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold">Seller Contact:</span>
                    </label>
                    <input name='contact'  type="text" placeholder="password" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold">Meeting location:</span>
                    </label>
                    <input name='location'  type="text" placeholder="password" className="input input-bordered" />
                </div>
            </form>
        </div>
    );
};

export default AddProducts;