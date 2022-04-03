import React from 'react';
import useReview from '../../Hooks/useReview';
import CustomarReview from '../CustomarReview/CustomarReview';

const Reviews = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div>
            <div className='grid grid-cols-3'>
                {
                    reviews.map(data => <CustomarReview data={data} key={data.id}></CustomarReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;