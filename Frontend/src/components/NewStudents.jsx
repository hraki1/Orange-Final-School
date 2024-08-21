import React from 'react';
import { newStudentsData } from './Data'; // Importing the new data structure
import person from './Assets/person.jpg';

const NewStudents = () => {
  return (
    <div className='md:w-72 ml-2 shadow-md mt-5 md:mt-0 w-full'>
      <div>
        <h1 className='pt-2 pl-2 text-2xl font-bold'>Recent Students</h1>
      </div>
      {newStudentsData.map((student) => (
        <div key={student.id} className='flex hover:bg-gray-800 hover:text-white hover:cursor-pointer'>
          <img src={student.image} alt={student.name} className='h-9 w-9 rounded-full ml-2 mt-3' />
          <div className='mt-2 ml-2'>
            <h1 className='font-semibold'>{student.name}</h1>
            <p className='font-extralight'>{student.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewStudents;
