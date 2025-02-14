"use client"

const WhyJoinUs = () => {
    return (
        <div>
            <section className="bg-[#F5F5F5] mb-32 py-16">
                <div className="container mx-auto text-center px-4">
                    <h2 className="text-3xl font-bold text-[#6AAF07] mb-8">Why Join The Garden Guide?</h2>
                    <p className="text-lg font-medium mb-12">Discover a world of gardening tips, connect with a thriving community, and grow your knowledge!</p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* <!-- Benefit 1 --> */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <div className="mb-4 text-[#6AAF07]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M3 12l2-2m0 0l2 2m-2-2v6m14-6l-2 2m0 0l-2-2m2 2v6"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#6AAF07] mb-3">Access Expert Tips</h3>
                            <p>Get advice from experienced gardeners and stay up-to-date with the latest trends and techniques in gardening.</p>
                        </div>

                        {/* <!-- Benefit 2 --> */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <div className="mb-4 text-[#6AAF07]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M14 2l8 8-8 8M4 2l8 8-8 8"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#6AAF07] mb-3">Connect with Gardeners</h3>
                            <p>Join a vibrant community of garden enthusiasts. Share your journey and learn from others&apos; experiences.</p>
                        </div>

                        {/* <!-- Benefit 3 --> */}
                        <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <div className="mb-4 text-[#6AAF07]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M19 8l-7 7-7-7"></path>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#6AAF07] mb-3">Track Your Growth</h3>
                            <p>Monitor your gardening progress with personalized tools and get inspired by your successes.</p>
                        </div>
                    </div>

                    {/* <!-- CTA Button --> */}
                    <div className="mt-12">
                        <a href="/signUp" className="bg-[#6AAF07] text-white px-8 py-3 rounded-full text-lg hover:bg-[#558f05] transition duration-300 font-bold">Join The Garden Guide</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WhyJoinUs;