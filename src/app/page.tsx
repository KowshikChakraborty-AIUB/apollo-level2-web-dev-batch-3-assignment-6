import CarouselComponent from '@/components/carousel/carousel';
import Footer from '@/components/footer/Footer';
import HowItWorks from '@/components/howItWorks/HowItWorks';
import NewsFeedGardeningPosts from '@/components/newsFeedGardeningPosts/NewsFeedGardeningPosts';
import WhyJoinUs from '@/components/whyJoinUs/WhyJoinUs';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <CarouselComponent />
      <HowItWorks/>
      <WhyJoinUs />
      <div className='mb-16'>
        <p className='text-3xl font-bold text-center text-[#6AAF07]'>Check Our Amazing Posts From Our Gardeners!</p>
      </div>
      <div>
        <NewsFeedGardeningPosts />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;