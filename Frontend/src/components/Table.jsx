import React from 'react'
import {data} from './Data'




  

export const Table = () => {
  return (
    <table className="w-full bg-white border border-gray-200 shadow-md">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Name</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Date</th>
          
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Answers</th>
         
          </tr>
        </thead>
        <tbody>
          {data.map((project, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4 whitespace-no-wrap">{project.name}</td>
              <td className="px-6 py-4 whitespace-no-wrap">{project.date}</td>
            
              <td className="px-6 py-4 whitespace-no-wrap">{project.amount}</td>
             
            </tr>
          ))}
        </tbody>
      </table>

  )
}
