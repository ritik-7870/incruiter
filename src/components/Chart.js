import React, {useEffect} from 'react'
import axios from 'axios'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
const Chart = () => {

    const data = [
        {
          name: "-0.001, 0.193",
          age: 16,
          fare: 16,
       
        },
        {
          name: "0.0252, 0.0513",
          age: 16,
          fare: 17,
         
        },
        {
          name: "0.0513, 0.058",
          age: 16,
          fare: 14,
        
        },
        {
          name: "0.058, 0.0693",
          age: 17,
          fare: 16,
         
        },
        {
          name: "0.0693, 0.101",
          age: 12,
          fare: 14,
         
        },
        {
          name: "0.101, 0.111",
          age: 24,
          fare: 14,
         
        },
        {
          name: "0.111, 0.149",
          age: 8,
          fare: 14,
          
        },
        {
          name: "0.149, 0.155",
          age: 13,
          fare: 17,
          
        },
        {
          name: "0.155, 0.176",
          age: 15,
          fare: 14,
          
        },
        {
          name: "0.176, 0.234",
          age: 16,
          fare: 17,
          
        },
        {
          name: "0.234, 0.397",
          age: 18,
          fare: 12,
          
        }
      ];

     

 
      


  return (
    <div>
       <BarChart
      width={1500}
      height={500}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={name} />
      <YAxis dataKey="age" />
      <Tooltip />
      <Legend />
      <Bar dataKey="age" stackId="a" fill="#47c9ccc7" />
      {/* <Bar dataKey="age" stackId="a" fill="#82ca9d" /> */}
      <Bar dataKey="fare" fill="#a3447f" />
    </BarChart>
    </div>
  )
}

export default Chart
