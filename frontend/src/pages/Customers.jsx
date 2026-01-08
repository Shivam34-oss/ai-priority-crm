import { useEffect, useState } from "react";
import axios from "axios";

export default function Customers() {
  const [customers,setCustomers] = useState([]);
  const [form,setForm] = useState({name:"",email:"",phone:""});

  const load = async ()=> setCustomers((await axios.get("http://localhost:5000/customers")).data);

  useEffect(()=>{ load(); },[]);

  const add = async ()=> {
    await axios.post("/customers", form);
    setForm({name:"",email:"",phone:""});
    load();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Customers</h2>

      <div className="bg-white p-4 rounded shadow grid gap-2 mb-3">
        <input className="border p-2" placeholder="Name" value={form.name}
          onChange={e=>setForm({...form,name:e.target.value})}/>
        <input className="border p-2" placeholder="Email" value={form.email}
          onChange={e=>setForm({...form,email:e.target.value})}/>
        <input className="border p-2" placeholder="Phone" value={form.phone}
          onChange={e=>setForm({...form,phone:e.target.value})}/>
        <button onClick={add} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Customer
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow">
        {customers.map(c=>(
          <div key={c._id} className="border-b py-2">
            <b>{c.name}</b> — {c.email} — {c.phone}
          </div>
        ))}
      </div>
    </div>
  );
}
