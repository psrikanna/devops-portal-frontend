import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tools, setTools] = useState([]);
  const [requests, setRequests] = useState([]);
  const [form, setForm] = useState({ toolId: "", userId: 1, requestType: "", description: "" });

  useEffect(() => {
    axios.get("/api/tools").then(res => setTools(res.data));
    axios.get("/api/requests").then(res => setRequests(res.data));
  }, []);

  const submitRequest = (e) => {
    e.preventDefault();
    axios.post("/api/requests", form).then(res => {
      setRequests([...requests, res.data]);
      setForm({ toolId: "", userId: 1, requestType: "", description: "" });
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">DevOps Tools Portal</h1>

      {/* Tools List */}
      <div className="grid grid-cols-3 gap-4">
        {tools.map(tool => (
          <div key={tool.id} className="p-4 bg-white rounded-xl shadow">
            <h2 className="text-lg font-semibold">{tool.name}</h2>
            <p>{tool.description}</p>
            <a href={tool.url} className="text-blue-600">Visit</a>
          </div>
        ))}
      </div>

      {/* Request Form */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Raise Request</h2>
        <form onSubmit={submitRequest} className="flex flex-col gap-2">
          <select value={form.toolId} onChange={e => setForm({...form, toolId: e.target.value})}>
            <option>Select Tool</option>
            {tools.map(tool => <option key={tool.id} value={tool.id}>{tool.name}</option>)}
          </select>
          <input type="text" placeholder="Request Type" value={form.requestType} onChange={e => setForm({...form, requestType: e.target.value})}/>
          <textarea placeholder="Description" value={form.description} onChange={e => setForm({...form, description: e.target.value})}/>
          <button type="submit" className="bg-blue-600 text-white p-2 rounded">Submit</button>
        </form>
      </div>

      {/* Requests List */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Requests</h2>
        {requests.map(req => (
          <div key={req.id} className="p-2 border rounded mb-2">
            {req.requestType} - {req.status}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;