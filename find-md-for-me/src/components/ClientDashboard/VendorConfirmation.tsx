import React from 'react';
import Title from '../shared/Title';
import SubTitle from '../shared/SubTitle';

const VendorConfirmation = () => {
    return (
        <div>
            <div className="lg:mb-32">
      <div className=" lg:w-[700px]  mx-auto mt-40 tracking-wide ">
        <Title> Thank you!</Title>

        <SubTitle className="tracking-wide ">
        Your order has been received. 
If we have any questions we will follow up by email or phone.
        </SubTitle>
      </div>
    </div>
        </div>
    );
};

export default VendorConfirmation;