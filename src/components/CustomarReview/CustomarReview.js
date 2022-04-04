import React from 'react';

const CustomarReview = ({ data }) => {
    const { name, picture, review, phone } = data;
    return (
        <div className='mx-auto rounded-2xl hover:bg-gray-300 mt-16 border-4 px-12'>
            <div className='flex-shrink-0'>
                <img className='mx-auto mt-5 mb-16 object-cover rounded-full h-32 w-32' src={picture} alt="" />
            </div>
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
            <p>Review: {review}</p>
        </div>
    );
};

export default CustomarReview;