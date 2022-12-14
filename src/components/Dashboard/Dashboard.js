import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    console.log(data);
    return (
      <div className='container mb-4 '>
           <h1 className='text-danger mt-4 text-decoration-underline'>Tiny Line Chart</h1>
            <div className='chart-1 '>
          
          <LineChart width={500} height={600} data={data} className="mt-4" >
            <Line  dataKey={'investment'} stroke="#8884d8"  ></Line>
            <XAxis dataKey="month"></XAxis>
            <YAxis ></YAxis>
            <Legend></Legend>
          </LineChart>
        </div>

        
        <h1 className='text-danger mt-4 text-decoration-underline'>Simple Line Chart</h1>
         <div className='chart-2'>
        
        <LineChart width={600} height={300} data={data} className="mt-4" margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey={'investment'} stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <Legend></Legend>
        <YAxis />

      </LineChart>

         </div>

      </div>

    );
};

export default Dashboard;