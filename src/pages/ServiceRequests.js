import React, { useState, useEffect } from "react";

function RaiseRequest({ refreshCounts }) {
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");

  const submit = () => {
    fetch("/api/requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, description, status: "open" }),
    })
      .then((res) => {
        if (res.ok) {
          alert("Request submitted");
          setType("");
          setDescription("");
          refreshCounts();
        } else {
          alert("Submit failed");
        }
      })
      .catch(() => alert("Submit failed"));
  };

  return (
    <div>
      <h3>Raise Request</h3>
      <label>
        Request Type:
        <select value={type} onChange={(e) => setType(e.target.value)} style={{ marginLeft: 10 }}>
          <option value="">Select</option>
          <option value="Access Request">Access Request</option>
          <option value="Build Request">Build Request</option>
          <option value="Deployment Request">Deployment Request</option>
        </select>
      </label>
      <br />
      <br />
      <label>
        Description:
        <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          cols={50}
        />
      </label>
      <br />
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}

function OpenRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("/api/requests?status=open")
      .then((res) => res.json())
      .then(setRequests)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h3>Open Requests</h3>
      <ul>
        {requests.map((r) => (
          <li key={r.id}>
            [{r.type}] {r.description}
          </li>
        ))}
        {requests.length === 0 && <li>No open requests.</li>}
      </ul>
    </div>
  );
}

function ClosedRequests() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetch("/api/requests?status=closed")
      .then((res) => res.json())
      .then(setRequests)
      .catch(console.error);
  }, []);

  return (
    <div>
      <h3>Closed Requests</h3>
      <ul>
        {requests.map((r) => (
          <li key={r.id}>
            [{r.type}] {r.description}
          </li>
        ))}
        {requests.length === 0 && <li>No closed requests.</li>}
      </ul>
    </div>
  );
}

export default function ServiceRequests({ requestCounts, refreshCounts }) {
  const [selected, setSelected] = useState("raise");

  return (
    <div>
      <h2>Service Requests</h2>
      <div style={{ marginBottom: 20 }}>
        <button onClick={() => setSelected("raise")}>Raise Request</button>
        <button onClick={() => setSelected("open")}>
          Open Requests ({requestCounts.open})
        </button>
        <button onClick={() => setSelected("closed")}>
          Closed Requests ({requestCounts.closed})
        </button>
      </div>

      {selected === "raise" && <RaiseRequest refreshCounts={refreshCounts} />}
      {selected === "open" && <OpenRequests />}
      {selected === "closed" && <ClosedRequests />}
    </div>
  );
}
