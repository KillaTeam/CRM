import React from "react";
import { BarChart, Bar, Tooltip, XAxis } from "recharts";
import GraphData from "./../assets/GraphData";

const GraphBarQuart = () => {
  return (
    <BarChart width={1000} height={350} data={GraphData}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <Tooltip/>
      <Bar
        radius={[10, 10, 10, 10]}
        className="graph__bar"
        dataKey="uv"
        fill="#8884d8"
      />
    </BarChart>
  );
};

export default GraphBarQuart;