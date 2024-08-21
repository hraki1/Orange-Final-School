import React from 'react';

// Example data
const data = [
  { name: 'Project 1', date: '2024-07-20', questions: 5 },
  { name: 'Project 2', date: '2024-07-21', questions: 3 },
  { name: 'Project 2', date: '2024-07-21', questions: 3 },
  { name: 'Project 2', date: '2024-07-21', questions: 3 },
  { name: 'Project 2', date: '2024-07-21', questions: 3 },
  { name: 'Project 2', date: '2024-07-21', questions: 3 },
  { name: 'Project 2', date: '2024-07-21', questions: 3 },
  { name: 'Project 2', date: '2024-07-21', questions: 3 },
  { name: 'Project 2', date: '2024-07-21', questions: 3 },
  { name: 'Project 2', date: '2024-07-21', questions: 3 },
  // Add more data as needed
];

export const Questions = () => {
  return (
    <table className="w-full bg-white border border-gray-200 shadow-md mt-20">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Name</th>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Date</th>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Questions</th>
          <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((project, index) => (
          <tr key={index} className="bg-white border-b hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-no-wrap">{project.name}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{project.date}</td>
            <td className="px-6 py-4 whitespace-no-wrap">{project.questions}</td>
            <td className="px-6 py-4 whitespace-no-wrap">
              <button className="text-blue-600 hover:text-blue-900 mr-4">Update</button>
              <button className="text-red-600 hover:text-red-900">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
