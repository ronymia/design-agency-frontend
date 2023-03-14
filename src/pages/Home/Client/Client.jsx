import React from 'react';

import airbnb from '../../../assets/logos/airbnb.png';
import google from '../../../assets/logos/google.png';
import netflix from '../../../assets/logos/netflix.png';
import slack from '../../../assets/logos/slack.png';
import uber from '../../../assets/logos/uber.png';

const logoes = [airbnb, google, netflix, slack, uber];

export default function Client() {
     return (
          <section className="flex items-center justify-center mt-[80px]">
               <div className="grid grid-cols-3 md:grid-cols-5 items-center justify-center w-3/4 
               md:w-2/4 gap-8 md:gap-12">
                    {
                         logoes.map((logo, index) =>
                              <img
                                   key={index}
                                   src={logo}
                                   alt="client logo"
                                   className=""
                              />
                         )
                    }
               </div>
          </section>
     );
}
