import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import ServerInventory from "./pages/ServerInventory";
import ServiceRequests from "./pages/ServiceRequests";

export default function App() {
  const [selected, setSelected] = useState("home");
  const [openCounts, setOpenCounts] = useState({ open: 0, closed: 0 });

  const refreshCounts = () => {
    fetch("/api/requests/counts")
      .then((res) => res.json())
      .then((data) => setOpenCounts(data))
      .catch(console.error);
  };

  useEffect(() => {
    refreshCounts();
  }, []);

  let content;
  switch (selected) {
    case "home":
      content = <Home />;
      break;
    case "inventory":
      content = <ServerInventory />;
      break;
    case "raise-request":
    case "open-requests":
    case "closed-requests":
      content = (
        <ServiceRequests
          requestCounts={openCounts}
          refreshCounts={refreshCounts}
          selectedTab={selected}
          setSelectedTab={setSelected}
        />
      );
      break;
    default:
      content = <Home />;
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar selected={selected} setSelected={setSelected} openCounts={openCounts} />
      <main style={{ marginLeft: 20, padding: 20, flexGrow: 1 }}>{content}</main>
    </div>
  );
}
