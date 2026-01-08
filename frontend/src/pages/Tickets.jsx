import { useEffect, useState } from "react";
import axios from "axios";

export default function Tickets() {
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({ customer:"", email:"", message:"" });

  const load = async () => {
    const res = await axios.get("http://localhost:5000/tickets");
    setTickets(res.data);
  };

  useEffect(() => { load(); }, []);

  const create = async () => {
    await axios.post("http://localhost:5000/tickets", form);
    setForm({ customer:"", email:"", message:"" });
    load();
  };

  const setStatus = async (id,status) => {
    await axios.patch(`http://localhost:5000/tickets/${id}`, { status });
    load();
  };

  const remove = async id => {
    await axios.delete(`http://localhost:5000/tickets/${id}`);
    load();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">AI Support Tickets</h2>

      <div className="bg-white p-4 rounded shadow mb-4 grid gap-2">
        <input className="border p-2" placeholder="Customer"
          value={form.customer} onChange={e=>setForm({...form,customer:e.target.value})} />
        <input className="border p-2" placeholder="Email"
          value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
        <textarea className="border p-2" rows="3" placeholder="Issue"
          value={form.message} onChange={e=>setForm({...form,message:e.target.value})} />
        <button onClick={create} className="bg-blue-600 text-white px-4 py-2 rounded">
          Create & Analyze Ticket
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        {tickets.map(t=>(
          <div key={t._id} className="border-b py-3">
            <div className="flex justify-between">
              <b>{t.customer}</b>
              <span className={`px-2 rounded ${
                t.priority==="high" ? "bg-red-200" :
                t.priority==="medium" ? "bg-yellow-200" :
                "bg-green-200"
              }`}>
                {t.priority}
              </span>
            </div>
            <p>{t.message}</p>
            <p className="text-sm text-gray-500">{t.analysis}</p>

            <div className="flex gap-2 mt-2">
              <button onClick={()=>setStatus(t._id,"Resolved")}
                className="bg-green-600 text-white px-2 py-1 rounded">Resolve</button>

              <button onClick={()=>remove(t._id)}
                className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
