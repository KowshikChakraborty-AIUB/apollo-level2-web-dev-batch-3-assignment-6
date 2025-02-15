import CarouselComponent from '@/components/carousel/carousel';
import Footer from '@/components/footer/Footer';
import HowItWorks from '@/components/howItWorks/HowItWorks';
import NewsFeedGardeningPosts from '@/components/newsFeedGardeningPosts/NewsFeedGardeningPosts';
import { Button } from '@/components/ui/button';
import WhyJoinUs from '@/components/whyJoinUs/WhyJoinUs';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <CarouselComponent />
      <HowItWorks />
      <WhyJoinUs />
      <div className='mb-16'>
        <p className='text-3xl font-bold text-center text-[#6AAF07]'>Check Our Amazing Posts From Our Gardeners!</p>
      </div>
      <div className='w-full md:w-4/5 lg:w-3/4 mx-auto'>
        <NewsFeedGardeningPosts sliceAmount={4} className={`w-4/6`} />
      </div>
      <div className="text-center my-4">
        <Link href={'/newsFeed'}>
          <Button className="text-base font-bold text-center bg-[#6AAF07] text-white hover:bg-[#6AAF07] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">See More</Button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;