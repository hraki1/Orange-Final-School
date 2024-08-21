import React from 'react';
import 'aos/dist/aos.css'; 
import '../styles/home.css';
import { FaUserEdit } from "react-icons/fa";
import { GiSatelliteCommunication } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import {features} from './Data'; // Import the features array

const About = () => {
  return (
    <section className='mt-48 md:mt-28 text-white'>
      <h1 className='text-center text-4xl font-bold'>About</h1>
      <div className='p-4 mt-24 flex flex-col gap-4 md:gap-0 md:flex-row justify-evenly items-start'>
        {features.map((feature, index) => (
          <div key={index} className='w-full md:w-1/4 bg' data-aos="fade-up">
            <feature.icon className='text-white w-fit m-auto text-4xl' />
            <h1 className='text-white text-center text-2xl font-bold mt-3'>{feature.title}</h1>
            <p className='text-center mt-2 leading-relaxed'>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
