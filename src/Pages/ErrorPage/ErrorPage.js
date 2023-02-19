import React from 'react';
import { useRouteError } from 'react-router';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error, 'error');
    return (
      <>
      <div className="flex justify-center items-center min-h-screen">
              <div>
                    <h2 className='text-center my-3'>This not the page you are finding!</h2>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src="https://i.ibb.co/K75Sc3Q/download.jpg" alt="Shoes" /></figure>
                        <div className="card-body ">
                            <h2 className="card-title ">{error?.status} </h2>
                            <p>{error?.statusText} </p>
                        </div>
                    </div>
              </div>
      </div>
      </>
    );
};

export default ErrorPage;