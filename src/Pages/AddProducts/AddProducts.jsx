import React, { useContext } from 'react';
import { AuthContext } from '../../Context/Authprovider';

const AddProducts = () => {
    const {  user } = useContext(AuthContext)
    // const order = {
    //     serviceId: _id,
    //     name,
    //     condition, ***
    //     contact,
    //     description, ***
    //     originalPrice,
    //     purchaseDate,
    //     resalePrice,
    //     sellerVerified, ***
    //     sellersName, 
    //     status, ***
    //     category,
    //     img,
    //     email: user?.email,
    // }
    const addProductHandler = (e) => {
        e.preventDefault();
        const form = e.target; 
        let name, condition, contact, description, originalPrice, sellerVerified, purchaseDate, resalePrice, sellersName, status, category, img, email, location;
        email = user?.email;
        location = form.location.value; 
        sellersName = form.sellerName.value;
        condition = form.condition.value;        
        img = form.img.value;
        description = form.description.value;
        name = form.productsName.value;
        contact = form.sellerContact.value;
        originalPrice = form.originalPrice.value;
        sellerVerified = true;
        purchaseDate = form.purchaseDate.value;
        resalePrice = form.resalePrice.value;
        status = 'available';
        let product = {
            name, condition, contact, description, originalPrice, sellerVerified, purchaseDate, resalePrice, sellersName, status, category, img, email, location
        }
        console.log(product, 'addedprod');
    }
    return (
        <div>
            <form onSubmit={addProductHandler}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Products Name: </span>
                    </label>
                    <input name='productsName' type="text" placeholder="Products Name:" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold">Seller Contact: </span>
                    </label>
                    <input name='sellerContact' type="text" placeholder="Seller Contact: " className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold">Original Price:</span>
                    </label>
                    <input name='originalPrice' type="text" placeholder="Original Price:" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold">Resale Price:</span>
                    </label>
                    <input name='resalePrice' type="text" placeholder="Resale Price:" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold">Purchase Date: </span>
                    </label>
                    <input name='purchaseDate' type="text" placeholder="January 2023" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold">Condition:</span>
                    </label>
                    <input name='condition'  type="text" placeholder="Fair / Excellent / Good" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold"> location:</span>
                    </label>
                    <input name='location' type="text" placeholder="location" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold"> email:</span>
                    </label>
                    <input name='email'  type="text" placeholder="email" readOnly defaultValue={user?.email} className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold"> Seller Name:</span>
                    </label>
                    <input name='sellerName'  type="text" placeholder="Seller Name" className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold"> Product's iamge url:</span>
                    </label>
                    <input name='img' type="text" placeholder=" Product's iamge url:"  className="input input-bordered" />
                    <label className="label">
                        <span className="label-text font-semibold">Product Description:</span>
                    </label>
                    <textarea name='description' type="text" placeholder=" Details of the product:"  className="input input-bordered" />
                </div>
                <button type='submit'>Submit Product</button>
            </form>
        </div>
    );
};

export default AddProducts;