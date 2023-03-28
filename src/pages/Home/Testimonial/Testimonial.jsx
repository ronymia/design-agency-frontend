import React from 'react';

import img1 from '../../../assets/images/customer-1.png';
import img2 from '../../../assets/images/customer-2.png';
import img3 from '../../../assets/images/customer-3.png';

const reviews = [
     {
          _id: 1,
          image: img1,
          name: "Nash Patril",
          company_name: "Manpol",
          designation: "CEO",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat."
     },
     {
          _id: 2,
          image: img2,
          name: "Miriam Barrom",
          company_name: "Manpol",
          designation: "CEO",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat."
     },
     {
          _id: 3,
          image: img3,
          name: "Bair Malone",
          company_name: "Manpol",
          designation: "CEO",
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat."
     }
]

export default function Testimonial() {
     return (
          <section className=" px-4 md:px-24">
               <h4 className="block text-center text-2xl text-primary font-semibold capitalize">
                    Clients <span className="text-secondary">Feedback</span>
               </h4>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-[100px]">
                    {
                         reviews.map(review =>
                              <div
                                   key={review._id}
                                   className="grid grid-cols-1 rounded border border-[#BFBFBF] p-5"
                              >
                                   <div className="">
                                        <div className="flex flex-row gap-3">
                                             <img src={review.image}
                                                  alt="profile"
                                                  className="h-[64px] w-[64px]"
                                             />
                                             <div className="flex flex-col justify-center">
                                                  <p className="text-lg font-medium">{review.name}</p>
                                                  <p className="font-medium text-[15px]">{review.designation}, <span>{review.company_name}</span></p>
                                             </div>
                                        </div>
                                        <p className="text-[#707070] mt-2 text-[15px]">{review.comment}</p>
                                   </div>
                              </div>
                         )
                    }
               </div>
          </section>
     );
}
