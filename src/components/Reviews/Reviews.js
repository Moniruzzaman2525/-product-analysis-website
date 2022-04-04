import React from 'react';
import useReview from '../../Hooks/useReview';
import CustomarReview from '../CustomarReview/CustomarReview';

const Reviews = () => {
    const [reviews, setReviews] = useReview();

    return (
        <div>
            <h1 className='text-5xl my-8'><span style={{ color: '#33d9b2' }}>Customar</span> <span className='font-bold'>Reviews</span></h1>
            <div className='grid gap-5 mx-8 md:grid-cols-3'>
                {
                    reviews.map(data => <CustomarReview data={data} key={data.id}></CustomarReview>)
                }
            </div>
        </div>
    );
};

export default Reviews;