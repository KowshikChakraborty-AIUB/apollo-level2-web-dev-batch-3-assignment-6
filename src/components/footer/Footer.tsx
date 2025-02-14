import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer mt-32 bg-base-200 text-base-content p-10">
                <aside>
                    <Link href='/' className="btn btn-ghost text-xl italic">
                        <span className='text-black'>The Garden</span><span className='text-[#6AAF07]'>Guide</span>
                    </Link>
                    <p className='ml-4 font-bold'>Where every plant has a story, and every gardener has a voice. 🌾</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Pages</h6>
                    <Link href={'/'} className="link link-hover">Home</Link>
                    <Link href={'/aboutUs'} className="link link-hover">About Us</Link>
                    <Link href={'/'} className="link link-hover">Gallery</Link>
                    <Link href={'/contactUs'} className="link link-hover">Contact Us</Link>
                </nav>
                {/* <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> */}
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                </nav>
            </footer>
            <aside className='bg-base-200 pt-2'>
                <p className='text-center'>Copyright © {new Date().getFullYear()} - All rights reserved by The Garden Guide</p>
            </aside>
        </div>
    );
};

export default Footer;