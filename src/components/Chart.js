import React from "react";
import {
   AreaChart,
   Area,
   YAxis,
   XAxis,
   CartesianGrid,
   Tooltip,
   Legend
   } from "recharts";
   class AreaRechartComponent extends React.Component {
      data = [
         {
            name: "Jan 2019",
            "Product A": 3432,
            "Procuct B": 2342
         },
         {
            name: "Feb 2019",
            "Product A": 2342,
            "Procuct B": 7746
         },
         {
            name: "Mar 2019",
            "Product A": 4565,
            "Procuct B": 2556
         },
         {
            name: "Apr 2019",
            "Product A": 6654,
            "Procuct B": 4465
         },
         {
            name: "May 2019",
            "Product A": 8765,
            "Procuct B": 5553
         }
      ];
      render() {
         return (
            <div style={{margin:"auto"}}>
                <h2 className="text-chart">Today</h2>
             <AreaChart
               width={730}
               height={250}
               data={this.data}
               margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
               <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
               </linearGradient>
               <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
               </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Area
               type="monotone"
               dataKey="Product A"
               stroke="#8884d8"
               fillOpacity={1}
               fill="url(#colorUv)"/>
            <Area
               type="monotone"
               dataKey="Procuct B"
               stroke="#82ca9d"
               fillOpacity={1}
               fill="url(#colorPv)"/>
            </AreaChart>

            </div>
          
      );
   }
}
export default AreaRechartComponent;