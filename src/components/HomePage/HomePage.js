import React from 'react';
import { Link } from 'react-router-dom';
import HeroImage from '../../HeroImage/watch.jpg'
import useReview from '../../Hooks/useReview';
import Review from '../Review/Review';

const HomePage = () => {
    const [reviews, setReviews] = useReview();

    const reviewData = reviews.slice(0, 3)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 py-8 px-8'>
                <div className='order-2 mt-8 md:order-1 flex flex-col justify-center items-center'>
                    <h1 className='text-6xl'>order product</h1>
                    <h1 className='text-6xl'>order product</h1>
                    <p>Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quia,
                        iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, sapiente.
                    </p>
                </div>
                <div className='order-1 md:order-1 flex roun justify-center h-[500px]'>
                    <img className='rounded-3xl' src={HeroImage} alt="" />
                </div>
            </div>
            <div>
                <h1 className='text-5xl my-8'><span style={{ color: '#33d9b2' }}>Customar</span> <span className='font-bold'>Reviews: </span>{reviews.length}</h1>
                <div className='grid md:grid-cols-3 gap-4 mb-16'>
                    {
                        reviewData.map(data => <Review data={data} key={data.id}></Review>)
                    }
                </div>
                <Link className='bg-green-200 rounded-full text-xl font-bold hover:bg-gray-300 p-8' to="/reviews">Review More</Link>

            </div>
        </div>
    );
};

export default HomePage;