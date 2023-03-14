import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/logos/Frame.png';
import './Banner.css';

export default function Banner() {
     return (
          <div
               className="banner bg-yellow h-[685px] flex flex-col-reverse md:flex-row items-center justify-center gap-5 px-4 md:px-24"
          >
               <div className="w-[70%] flex flex-col gap-5">
                    <h2 className="text-2xl md:text-5xl font-bold md:leading-tight text-primary">
                         Let’s Grow Your <br />
                         Brand To The <br />
                         Next Level
                    </h2>
                    <p className="leading-6 text-[12px] md:text-base">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat
                    </p>
                    <Link to={"/"}
                         className="inline-flex items-center justify-center w-[145px] h-[45px] bg-primary text-white rounded-[5px] capitalize"
                    >Hire Us</Link>
               </div>
               <div className="flex items-center justify-center">
                    <img src={bannerImg}
                         className="w-full md:w-2/3 px-6 md:px-0"
                         alt="hero banner" />
               </div>
          </div>
     );
}
