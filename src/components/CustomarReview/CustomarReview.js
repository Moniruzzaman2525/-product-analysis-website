import React from 'react';

const CustomarReview = ({ data }) => {
    const { name, picture, review, date } = data;
    return (
        <div>
            <img src={picture} alt="" />
            <p>Name: {name}</p>
            <p>Date: {date}</p>
            <p>Review: {review}</p>
        </div>
    );
};

export default CustomarReview;