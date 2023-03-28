import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import './Service.css';

export default function Services() {
     const { data: services = [] } = useQuery({
          queryKey: ["services"],
          queryFn: async () => {
               const res = await axios.get('/services.json');
               return res.data;
          }

     });

     return (
          <section className="flex flex-col items-center justify-center my-20">
               <h2 className="block text-center text-4xl font-semibold text-primary">
                    Provide awesome <span className="text-secondary">services</span>
               </h2>
               <div className="grid grid-cols-3 my-20 w-4/5 gap-5">
                    {
                         services.map(service =>
                              <div key={service._id}
                                   className="serviceShadow rounded-[10px] p-9 transition-shadow duration-600"
                              >
                                   <img src={service.image} alt="service" />
                                   <h3 className="block text-center text-xl font-semibold text-primary my-4">
                                        {service.name}
                                   </h3>
                                   <p className="">{service.description}</p>
                              </div>
                         )
                    }
               </div>
          </section>
     );
}
