// Optional: abstracted API calls for scalability

export async function fetchServers() {
  const res = await fetch("/api/servers");
  if (!res.ok) throw new Error("Failed to fetch servers");
  return res.json();
}

export async function fetchRequests(status) {
  const url = status ? `/api/requests?status=${status}` : "/api/requests";
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch requests");
  return res.json();
}

export async function submitRequest(data) {
  const res = await fetch("/api/requests", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to submit request");
  return res.json();
}
