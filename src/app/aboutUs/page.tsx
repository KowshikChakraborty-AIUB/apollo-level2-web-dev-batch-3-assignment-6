import Image from 'next/image';
import React from 'react';

const AboutUsPage = () => {
    return (
        <div>
            <div className="relative md:px-12 w-full p-4 rounded-md min-h-[450px] flex items-center justify-center"
                style={{
                    backgroundImage: `url('https://i.ibb.co.com/zZfqv9j/gardening-about-us.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative text-center text-white">
                    <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                        Planting Seeds, Building Connections
                    </h1>
                    <p className="mb-5 text-xl text-justify">
                        Welcome to <span className='font-bold'>The Garden Guide</span>, the ultimate social hub for gardeners and plant lovers! We’re not just a gardening platform; we’re a vibrant community where you can connect, share, and grow your passion for all things green. Whether you’re a seasoned pro or a beginner, our platform offers a space for everyone to exchange tips, showcase their gardens, ask questions, and inspire others. From sharing your latest plant discoveries to learning new gardening techniques, our social feed is filled with insights and support from fellow enthusiasts around the world. Dive into engaging discussions, discover fresh ideas, and build friendships with like-minded gardeners. Let’s cultivate more than just plants—let’s cultivate a thriving gardening community together! 🌱🌸
                    </p>
                </div>
            </div>
            <div>
                <h1 className="my-24 text-3xl md:text-5xl font-bold text-center">
                    Team Members
                </h1>
                <div className='w-5/6 mx-auto'>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <Image width={112} height={112} className="h-28 rounded-full border-4 border-[#6AAF07]" src="https://i.ibb.co/N7rJm6S/Kowshik.jpg" alt="" />
                            <p className="font-bold text-xl">Kowshik Chakraborty</p>
                            <p className="font-bold pb-5">Founder & Lead Gardener</p>
                            <p className="text-justify">With over 15 years of gardening experience, Kowshik is the heart and soul of The Garden Guide. Passionate about sustainable gardening and eco-friendly practices, Kowshik loves helping others discover the joy of growing their own plants. He brings his expertise and creative vision to every corner of the platform, ensuring that each member has access to the best tips, advice, and resources.</p>
                        </div>
                        <div className='pl-0 md:pl-16'>
                            <Image width={112} height={112} className="h-28 rounded-full border-4 border-[#6AAF07]" src="https://i.ibb.co/PGz2w8r/local-tours-team-members-1.jpg" alt="" />
                            <p className="font-bold text-xl">John Taylor</p>
                            <p className="font-bold pb-5">Community Manager</p>
                            <p className="text-justify">John is the friendly face of our online community, always ready to help and engage with members. He’s dedicated to fostering a supportive and inspiring environment where gardeners can connect, share, and learn. When he’s not moderating discussions or organizing events, John enjoys exploring new plant species and testing out the latest gardening tools.</p>
                        </div>
                        <div>
                            <Image width={112} height={112} className="h-28 rounded-full border-4 border-[#6AAF07]" src="https://i.ibb.co/BwJ4qr3/local-tours-team-members-3.jpg" alt="" />
                            <p className="font-bold text-xl">Sarah Greenfield</p>
                            <p className="font-bold pb-5">Content Creator & Plant Expert</p>
                            <p className="text-justify">Sarah is our plant guru with a special knack for turning complex gardening topics into easy-to-understand advice. Her articles, tutorials, and videos are designed to empower gardeners of all levels. When she’s not writing, you’ll find Sarah experimenting with rare plants and getting her hands dirty in her own flourishing garden.</p>
                        </div>
                        <div className='pl-0 md:pl-16'>
                            <Image width={112} height={112} className="h-28 rounded-full border-4 border-[#6AAF07]" src="https://i.ibb.co/16SC8fN/local-tours-team-members-2.jpg" alt="" />
                            <p className="font-bold text-xl">Mark Robinson</p>
                            <p className="font-bold pb-5">Tech & Development Specialist</p>
                            <p className="pb-5 text-justify">Mark brings the digital side of gardening to life. As our tech wizard, he ensures that the platform runs smoothly, creating an intuitive experience for all users. When he’s not optimizing the site, Mark enjoys growing his own urban garden and testing out the latest gardening apps to enhance the gardening experience for everyone.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;