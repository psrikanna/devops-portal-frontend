import React, { useState, useEffect } from "react";

export default function ServerInventory() {
  const [servers, setServers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/servers")
      .then((res) => res.json())
      .then(setServers)
      .catch(console.error);
  }, []);

  const filtered = servers.filter(
    (srv) =>
      srv.name.toLowerCase().includes(search.toLowerCase()) ||
      srv.hostname.toLowerCase().includes(search.toLowerCase()) ||
      srv.ip.includes(search)
  );

  return (
    <div>
      <h2>Server Inventory</h2>
      <input
        type="text"
        placeholder="Search servers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: 8, marginBottom: 10, width: "100%" }}
      />
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Hostname</th>
            <th>IP Address</th>
            <th>Port</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((srv) => (
            <tr key={srv.id} style={{ borderBottom: "1px solid #eee" }}>
              <td>{srv.name}</td>
              <td>{srv.hostname}</td>
              <td>{srv.ip}</td>
              <td>{srv.port}</td>
              <td>
                <a href={srv.url} target="_blank" rel="noopener noreferrer">
                  {srv.url}
                </a>
              </td>
            </tr>
          ))}
          {filtered.length === 0 && (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No servers found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
