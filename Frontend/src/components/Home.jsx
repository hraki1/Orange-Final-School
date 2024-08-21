import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaBell, FaLightbulb, FaQuestionCircle, FaArrowRight } from 'react-icons/fa';
import { IoPerson, IoMenu, IoHome } from 'react-icons/io5';
import { BiSolidMessageRounded } from 'react-icons/bi';




import post from '../components/Assets/post.jpg';
import person from '../components/Assets/person.jpg';
import home from '../components/Assets/home-font.png';
import choose from '../components/Assets/about.jpg';
import about from '../components/Assets/choose-1.jpg';


export const Home = () => {
  const phrases = [
    "Student Collaboration",
    "Innovative Learning",
    "Bridging Gaps",
    "Community Growth",
    "Knowledge Diversity",
    "Academic Excellence",
    "Peer Learning",
    "Global Ideas",
    "Minds Connecting"
  ];

  const getRandomPhrase = () => {
    return phrases[Math.floor(Math.random() * phrases.length)];
  };

  const [startedProgress, setStartedProgress] = useState(false);
  const sectionRef = useRef(null);
  const spansRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!startedProgress && window.scrollY >= sectionRef.current.offsetTop - 500) {
        spansRef.current.forEach((span) => {
          span.style.transition = "width 2s ease-in-out";
          span.style.width = span.dataset.width;
        });
        setStartedProgress(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [startedProgress]);


  const teamMembers = [
    { name: 'Abd Alfatah Aljuaidi', role: 'Software Engineer', image: person },
    { name: 'Sarah Smith', role: 'Project Manager', image: person },
    { name: 'John Doe', role: 'UX/UI Designer', image: person}
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="">
        <div className='px-9 py-4 flex justify-around md:justify-between items-center shadow-md w-full bg-white bg-opacity-80'>
          <div className='flex items-center'>
            <h1 className='text-xl md:text-2xl w-fit break-words-custom'>Ask AAU</h1>
            <IoHome className='ml-4 text-xl' />
            <IoPerson className='ml-4 text-xl' />
            <div className='items-center ml-3 md:ml-7 outline outline-solid-1 py-1 px-4 rounded-full hidden md:flex'>
              <FaSearch className='text-xl' />
              <input type="text" className='outline-none border-none ml-2 w-full' placeholder='Enter a name' />
            </div>
          </div>
          <div className='flex items-center'>
            <BiSolidMessageRounded className='text-xl' />
            <FaBell className='ml-4 text-xl' />
            <FaLightbulb className='ml-4 text-xl' />
            <IoMenu className='ml-4 text-xl' />
            <img src={person} alt="" className='w-7 h-7 rounded-full ml-4 hidden md:block' />
            <h1 className='ml-4 hidden md:block'>Mohammed Ali</h1>
          </div>
        </div>
      </div>

      <div className='flex justify-center items-center h-[145vh] md:h-[90vh] px-5'>
        <div className='flex flex-col md:flex-row justify-around items-center w-full md:space-x-8 md:mt-0 '>
       
            <div className='max-w-xl text-center md:text-left'>
              <h1 className='text-4xl md:text-6xl font-bold text-gray-800'>{getRandomPhrase()}</h1>
              <p className='mt-4 text-xl text-gray-500'>
                Our platform connects students from diverse backgrounds to foster collaboration and
                knowledge sharing. Whether you need academic help, peer support, or a place to share ideas, our community is
                dedicated to achieving academic excellence and personal growth.
              </p>
              <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-full shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300'>
                Learn More
              </button>
            </div>
        
       
            <div className='mt-6'>
              <img src={home} alt="Person" className='w-96 h-96 mt-5 md:mt-0 animate-bounceVertical' />
            </div>
        
        </div>
      </div>
      
      <div>
        <h1 className='text-center font-bold text-3xl mb-6'>What we provide</h1>
        <div className='flex flex-wrap justify-around items-center px-3 space-y-4 md:space-y-0 gap-3'>
          <div className='card py-8 px-7 shadow-lg w-full sm:w-[45%] md:w-[30%] lg:w-[28%] transform hover:-translate-y-2 transition duration-300 bg-white'>
            <FaQuestionCircle className='icon mt-2 text-3xl' />
            <h1 className='mt-3 font-bold text-xl'>Easy to use</h1>
            <p className='mt-2 pr-2 text-lg text-gray-400'>Featuring an intuitive design, our platform makes it simple to access tools and functions quickly. With clear instructions and interactive elements, we ensure a user-friendly experience that supports your academic success.</p>
            <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary transition duration-300'>Read More</button>
          </div>

          <div className='card py-8 px-7 shadow-lg w-full sm:w-[45%] md:w-[30%] lg:w-[28%] transform hover:-translate-y-2 transition duration-300 bg-white'>
            <FaQuestionCircle className='icon mt-2 text-3xl' />
            <h1 className='mt-3 font-bold text-xl'>Smooth Experience</h1>
            <p className='mt-2 pr-2 text-lg text-gray-400'>Our platform offers a seamless user experience with an easy-to-navigate interface. Every feature is designed for efficiency and comfort, from pop-ups to messaging, allowing you to focus on your goals.</p>
            <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300'>Read More</button>
          </div>

          <div className='card py-8 px-7 shadow-lg w-full sm:w-[45%] md:w-[30%] lg:w-[28%] transform hover:-translate-y-2 transition duration-300 bg-white'>
            <FaQuestionCircle className='icon mt-2 text-3xl' />
            <h1 className='mt-3 font-bold text-xl'>Security</h1>
            <p className='mt-2 pr-2 text-lg text-gray-400'>We prioritize your security by using advanced encryption to protect your personal and academic data. Our robust verification system ensures all community members are verified AAU students, enhancing overall safety.</p>
            <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300'>Read More</button>
          </div>
        </div>

        <style jsx>{`
          .card:hover .icon {
            transform: rotateY(360deg);
            transition: transform 0.6s;
          }
        `}</style>
      </div>

      <section className="py-16 bg-gray-100 px-10 mt-14">
      <div className="container mx-auto text-center">
        <div className='md:flex md:flex-row flex-col justify-around items-center'>
          <div className="md:w-[45%] mr-9">
            <h1 className="text-4xl font-bold text-gray-900 mb-6"> IT service is our passion.</h1>
            <p className="text-gray-600 mb-12">
            Our platform combines strong security with a simple, intuitive design, ensuring you can navigate effortlessly and focus on your academic goals.
            </p>

            <section className="three w-full" ref={sectionRef}>
              <div className="skills mb-8">
                <h3 className="text-xl font-medium text-gray-800 mb-2">Freindly</h3>
                <div className="w-full bg-gray-300 h-2 rounded mb-4">
                  <span className="block bg-primary h-full rounded" style={{ width: '0' }} data-width="80%" ref={(el) => spansRef.current[0] = el}></span>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Smooth Experience</h3>
                <div className="w-full bg-gray-300 h-2 rounded mb-4">
                  <span className="block bg-primary h-full rounded" style={{ width: '0' }} data-width="90%" ref={(el) => spansRef.current[1] = el}></span>
                </div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Security</h3>
                <div className="w-full bg-gray-300 h-2 rounded mb-4">
                  <span className="block bg-primary h-full rounded" style={{ width: '0' }} data-width="70%" ref={(el) => spansRef.current[2] = el}></span>
                </div>
              </div>
            </section>
          </div>

          <div className=''>
            <img src={about} alt="About" className='h-96 w-96 object-cover rounded-lg shadow-lg' />
          </div>
        </div>
      </div>
    </section>



<section className='flex md:flex-row flex-col justify-evenly items-center bg-white'>
  <div className='w-[50%] py-10'>
<img src={choose} alt=""  />
  </div>

  <div className='md:w-[40%] px-4 text-center md:text-left'>
    <h1 className='text-2xl font-bold'>WHY CHOOSE US?</h1>
    <p className='text-gray-400 '>
Certainly!

Why Choose Us

Experience top security and ease of use with our platform. Enjoy a smooth, intuitive design that keeps your focus on academic success.</p>
    <div className='flex md:flex-row flex-col'>

    <div className='flex flex-col'>
      <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary transition duration-300'>IT Solution</button>
    <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300'>Therory</button>
    <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300'>Engineer</button>
    </div>
    <div className=' flex-col hidden md:flex'>
      <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300 md:ml-3'>IT Solution</button>
    <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300 md:ml-3'>Therory</button>
    <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300 md:ml-3'>Engineer</button>
    </div>
    <div className=' flex-col hidden md:flex'>
      <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300 md:ml-3'>IT Solution</button>
    <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300 md:ml-3'>Therory</button>
    <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300 md:ml-3'>Engineer</button>
    </div>
    </div>
  </div>

</section>



    <section className="py-16 bg-gray-100 px-10">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="h-56 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">{member.name}</h2>
                <p className="text-lg text-gray-700">{member.role}</p>
                <div className="mt-4">
                  <a href="#" className="bg-primary text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300 mr-4">View Profile</a>
                  <a href="#" className="bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-gray-400 transition duration-300">Contact</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section className='pt-5 mt-9'>
      <h1 className='text-center text-3xl font-bold text-gray-800 mb-8'>Recent Posts</h1>
      <div className='flex flex-col md:flex-row justify-center gap-4 px-3'>

        <div className='w-full md:w-1/4 bg-white shadow-lg  rounded-lg text-center p-2'>
        <img src={post} alt="" />
        <h1 className='mt-2 text-2xl font-bold'>Transfer</h1>
        <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quae, veniam cum ea obcaecati sequi.</p>
        <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300 md:ml-3'>Read More</button>
        </div>

        <div className='w-full md:w-1/4 bg-white shadow-lg  rounded-lg text-center p-2'>
        <img src={post} alt="" />
        <h1 className='mt-2 text-2xl font-bold'>Transfer</h1>
        <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quae, veniam cum ea obcaecati sequi.</p>
        <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary  transition duration-300 md:ml-3'>Read More</button>
        </div>

        <div className='w-full md:w-1/4 bg-white shadow-lg  rounded-lg text-center p-2'>
        <img src={post} alt="" />
        <h1 className='mt-2 text-2xl font-bold'>Transfer</h1>
        <p className='text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quae, veniam cum ea obcaecati sequi.</p>
        <button className='mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-white hover:text-primary hover:outline hover:outline-solid-primary transition duration-300 md:ml-3'>Read More</button>
        </div>

      </div>
    </section>











    <footer className="bg-primary text-white mt-16 py-4 text-center ">
    <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">Join Us Today</h1>
        <p className="text-lg mb-8">Join our community for a secure and easy-to-use platform. Connect, collaborate, and achieve your academic goals together. Sign up today!</p>
       
      </div>
  <p className="text-sm border-t border-solid-white pt-2 ">
    © {new Date().getFullYear()} Ask AAU. All rights reserved.
  </p>
</footer>

    
    </div>
  );
}

export default Home;
