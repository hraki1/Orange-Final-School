import React from 'react'

export const Footer = () => {
  return (
    <div>
        
<section className=' bg md:flex justify-evenly items-center text-white mt-28 w-[95%] md:w-[80%] m-auto rounded-2xl '>
  <div>
    <h1 className='text-4xl font-bold '>Lets try our service now!</h1>
  <p className='mt-7 text-gray-200'>Everything you need to know more about Amman Arab University and more is here on our platform.</p>
  <p className='mt-1 text-gray-200'> What are you waiting for?</p>
  </div>
  <button className='px-9 py-3 bg-primary text-black rounded hover:bg-white transition-all duration-300 mt-4 md:mt-0'>Get Start</button>
</section>




<footer className="bg text-white py-4 text-center mt-9">
  <p className="text-sm">
    © {new Date().getFullYear()} Ask AAU. All rights reserved.
  </p>
</footer>


    </div>
  )
}
