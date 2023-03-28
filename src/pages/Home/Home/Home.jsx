import React from 'react';
import Banner from '../Banner/Banner';
import Client from '../Client/Client';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

export default function Home() {
     return (
          <div className="">
               <Banner />
               <Client />
               <Services />
               <Testimonial />
          </div>
     );
}
