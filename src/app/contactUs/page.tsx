import Image from 'next/image';
import React from 'react';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Mail, PhoneCallIcon, MapPin, Watch} from 'lucide-react';
import Footer from '@/components/footer/Footer';

const ContactUsPage = () => {
    return (
        <div>
            <div className='flex gap-10 max-w-7xl mt-32 mx-auto'>
                <div className='hidden md:hidden lg:block'>
                    <Image width={600} height={600} src={'https://i.ibb.co.com/pjPJkwym/gardening-contact-us.jpg'} alt='Contact Us Image' />
                </div>
                <div className='w-full md:w-full lg:w-3/5'>
                    <Card className="bg-white shadow-2xl">
                        <CardHeader>
                            <div>
                                <CardTitle className="text-center">Contact Us</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className='flex gap-4 items-center mb-6'>
                                <Mail color='green' size={48}></Mail>
                                <p className='font-bold text-lg'>Mail: gardeningtips@gmail.com</p>
                            </div>
                            <div className='flex gap-4 items-center mb-6'>
                                <PhoneCallIcon color='green' size={48}></PhoneCallIcon>
                                <p className='font-bold text-lg'>Mobile: 12345678901 (Available: From 09:30 AM to 8:00 PM)</p>
                            </div>
                            <div className='flex gap-4 items-center mb-6'>
                                <MapPin color='green' size={48}></MapPin>
                                <p className='font-bold text-lg'>Address: Dhaka, Bangladesh</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <Watch color='green' size={48}></Watch>
                                <p className='font-bold text-lg'>Office Opening & Closing Time: 09:30 AM to 4:30 PM</p>
                            </div>
                        </CardContent>

                    </Card>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default ContactUsPage;