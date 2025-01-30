import CarouselComponent from '@/components/carousel/carousel';
import NewsFeedGardeningPosts from '@/components/newsFeedGardeningPosts/NewsFeedGardeningPosts';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <CarouselComponent />
      <div className='mb-24'>
        <p className='text-3xl font-bold text-center'>Check Our Amazing Posts From Our Gardeners!</p>
      </div>
      <div>
        <NewsFeedGardeningPosts />
      </div>
    </div>
  );
};

export default HomePage;