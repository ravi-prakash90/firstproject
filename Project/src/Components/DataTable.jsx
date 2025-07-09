import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Chartdemo from "./Chartdemo"
const DataTable = () => {
  const data = [
    { id: 1, name: 'Prakash', email: 'prakash@example.com' },
    { id: 2, name: 'Aman', email: 'aman@example.com' },
    { id: 3, name: 'Ravi', email: 'ravi@example.com' },
  ];

  return (
    <>
      <Navbar/>
      <Chartdemo/>
    
    <div className="p-6">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2 text-left">ID</th>
              <th className="border border-gray-400 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-400 px-4 py-2 text-left">Email</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td className="border border-gray-400 px-4 py-2">{row.id}</td>
                <td className="border border-gray-400 px-4 py-2">{row.name}</td>
                <td className="border border-gray-400 px-4 py-2">{row.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default DataTable;