import React from 'react';
import { numbersData } from './Data';
import { CiCircleQuestion } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { TbBrandAuth0 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Numbers = () => {
  return (
    <main className='p-5 mt-20'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {numbersData.map((item, index) => (
          <div key={index} className='bg-primary text-white p-6 rounded shadow-md text-center flex justify-evenly items-center'>
            <div>
              <p className='text-3xl font-bold'>{item.value}</p>
              <h1 className='text-2xl text-center'>{item.label}</h1>
            </div>
            <Link to={`/Dashboard/${item.icon === 'CiCircleQuestion' ? 'questions' : item.icon === 'FaRegComment' ? 'answers' :  item.icon === 'TbBrandAuth0' ? 'Admins' :  item.icon === 'IoPersonOutline' ? 'students' : 'error'}`}>
              {item.icon === 'CiCircleQuestion' && <CiCircleQuestion className='text-5xl' />}
              {item.icon === 'FaRegComment' && <FaRegComment className='text-5xl' />}
              {item.icon === 'IoPersonOutline' && <IoPersonOutline className='text-5xl' />}
              {item.icon === 'TbBrandAuth0' && <TbBrandAuth0 className='text-5xl' />}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Numbers;
