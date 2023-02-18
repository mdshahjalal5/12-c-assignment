import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider';

const ServiceModal = ({e}) => {
    const {  user } = useContext(AuthContext)
    const { _id, category, name, condition, contact, description, location, originalPrice, purchaseDate, resalePrice, sellerVerified, sellersName, status
        , img,  } = e;
        const handleOrder = (form) => {
            const order = {
                serviceId:_id,
                name, 
                condition, 
                contact, 
                description, 
                originalPrice, 
                purchaseDate,  
                resalePrice, 
                sellerVerified, 
                sellersName, 
                status,
                category,
                img,
                email:user?.email,
            }
            console.log(order,'form')
            fetch(`http://localhost:5000/orders`, {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(order)
            }).then( async res => {
                console.log(res, 'booknow res');
                const data = await res.json()
                if (data?.acknowledged){
                    toast('Order placed successfully')
                }
                console.log(data, );
            })
        }
    return (
        <div className="modal">
            <div className="modal-box">
                <form >
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">User name:</span>
                        </label>
                        <input name='username' type="text" readOnly defaultValue={(user?.userName && user?.email )? user?.userName : ''} placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text font-semibold">User email:</span>
                        </label>
                        <input name='useremail' defaultValue={user?.email ? user?.email : ''} readOnly type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text font-semibold">Product:</span>
                        </label>
                        <input name='productname' defaultValue={name} readOnly type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text font-semibold">Price: </span>
                        </label>
                        <input name='resaleprice' defaultValue={`${resalePrice} tk`} readOnly type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text font-semibold">Seller Contact:</span>
                        </label>
                        <input name='contact' defaultValue={contact} readOnly type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <span className="label-text font-semibold">Meeting location:</span>
                        </label>
                        <input name='location' defaultValue={location} readOnly type="text" placeholder="password" className="input input-bordered" />
                    </div>

                </form>
                <div className="modal-action">
                    <label onClick={handleOrder} htmlFor="my-modal" className="btn">Place Order</label>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;