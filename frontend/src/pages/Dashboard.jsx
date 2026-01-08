import { useEffect, useState } from "react";
import axios from "axios";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis } from "recharts";

export default function Dashboard() {
  const [tickets,setTickets]=useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/tickets").then(r=>setTickets(r.data));
  },[]);

  const pieData = [
    { name:"High", value:tickets.filter(t=>t.priority==="high").length },
    { name:"Medium", value:tickets.filter(t=>t.priority==="medium").length },
    { name:"Low", value:tickets.filter(t=>t.priority==="low").length },
  ];

  const barData = [
    { name:"Open", value:tickets.filter(t=>t.status==="Open").length },
    { name:"Resolved", value:tickets.filter(t=>t.status==="Resolved").length },
    { name:"Pending", value:tickets.filter(t=>t.status==="Pending").length },
  ];

  const colors = ["#ef4444","#eab308","#22c55e"];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Analytics Dashboard</h2>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Priority Distribution</h3>
          <PieChart width={300} height={250}>
            <Pie data={pieData} dataKey="value" outerRadius={90}>
              {pieData.map((_,i)=> <Cell key={i} fill={colors[i]} /> )}
            </Pie>
          </PieChart>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-semibold mb-2">Ticket Status</h3>
          <BarChart width={320} height={250} data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="value" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}
