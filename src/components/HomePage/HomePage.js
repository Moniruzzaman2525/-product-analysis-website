import React from 'react';
import HeroImage from '../../HeroImage/watch.jpg'
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';

const HomePage = () => {
    const [reviews, setReviews] = useReview();

    const reviewData = reviews.slice(0, 3)
    return (
        <div>
            <div className='flex justify-between py-8 px-8'>
                <div className='flex flex-col justify-center items-center'>
                    <h1>order product</h1>
                    <h1>order product</h1>
                    <p>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quia,
                        iure!</p>
                </div>
                <div className='flex justify-center h-[550px]'>
                    <img src={HeroImage} alt="" />
                </div>
            </div>
            <div>
                <h1>Customar Review: {reviewData.length}</h1>
                <div className='grid grid-cols-3'>
                    {
                        reviewData.map(data => <Review data={data} key={data.id}></Review>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;