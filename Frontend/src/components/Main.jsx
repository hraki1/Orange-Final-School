import React, { useEffect, useRef, useState } from 'react';
import '../styles/home.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export const Main = () => {
 
    const [started, setStarted] = useState(false);

    const sectionRef = useRef(null);
    const numsRef = useRef([]);
  
    
    useEffect(() => {
      AOS.init({ duration: "1000" })
    }, [])
    
  
    const startCount = (el) => {
      const numElement = el.querySelector('.num');
      let goal = parseInt(numElement.dataset.goal, 10);
      let count = setInterval(() => {
        numElement.textContent++;
        if (parseInt(numElement.textContent) === goal) {
          clearInterval(count);
        }
      }, 1000 / goal);
    };
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY >= sectionRef.current.offsetTop - 550) {
          if (!started) {
            numsRef.current.forEach((num) => startCount(num));
          }
          setStarted(true);
        }
      };
  
  
  
  
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [started]);
  
    return (
      <div id='header bg-image' className='bg-image '>
     
        <div id='main' className='flex justify-center flex-col items-center text-center h-[85vh]'>
          <div className='px-4'>
         
              <h2 className='text-[50px] text-white  '  data-aos="fade-left">An interactive</h2>
              <h2 className='text-primary text-[50px]'  data-aos="fade-left">integrative platform towards</h2>
         
         
              <p className='text-gray-400 w-full md:w-[700px] px-4 md:px-0'  data-aos="fade-right">
                Our platform connects students from diverse backgrounds, fostering collaboration and knowledge sharing. 
                Whether you're seeking academic assistance, peer support, or just a place to share your ideas, our platform 
                offers a vibrant community dedicated to helping each other achieve academic excellence and personal growth.
              </p>
          
          </div>
          <div className='text-black mt-9'>
            <button className='px-6 py-3 bg-white mx-2 rounded hover:bg-primary transition-all duration-300'>Read more</button>
            <button className='px-6 py-3 bg-primary mx-2 rounded hover:bg-white transition-all duration-300'>Get started</button>
          </div>
        </div>
  
        <div className='mt-6'>
          <section ref={sectionRef} className='text-center md:flex md:justify-evenly items-center text-white bg'>
            <div ref={(el) => numsRef.current.push(el)} className='count-container'>
              <span className='num text-3xl' data-goal="1000">0</span> <span className='text-4xl md:text-3xl font-bold bg-gradient-to-r from-primary to-white bg-clip-text text-transparent'>+ Questions</span>
            </div>
            <div ref={(el) => numsRef.current.push(el)} className='count-container mt-6 md:mt-0'>
              <span className='num text-3xl' data-goal="8">0</span> <span className='text-4xl md:text-3xl font-bold bg-gradient-to-r from-primary to-white bg-clip-text text-transparent'>+ Specialties</span>
            </div>
            <div ref={(el) => numsRef.current.push(el)} className='count-container mt-6 md:mt-0'>
              <span className='num text-3xl' data-goal="1500">0</span> <span className='text-4xl md:text-3xl font-bold bg-gradient-to-r from-primary to-white bg-clip-text text-transparent'>+ students</span>
            </div>
          </section>
        </div>
        </div>
  
  )
}
