import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex gap-2 items-center bg-base-200'>
            <p className='bg-[#D72050] text-base-100 px-3 py-1'>Latest</p>
            <Marquee pauseOnHover={true} speed={100} className='space-x-10'><Link to="/news">Match Highlights: Germany vs Spain — as it happened   ! 1 </Link>

            <Link to="/news">Match Highlights: Germany vs Spain — as it happened   ! 2 </Link>

            <Link to="/news">Match Highlights: Germany vs Spain — as it happened   !3</Link>
                       
             </Marquee>

           
            
        </div>
    );
};

export default LatestNews;