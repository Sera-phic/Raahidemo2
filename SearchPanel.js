import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPanel() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/results", { state: { from, to } });
  };

  return (
    <div className="panel">
      <h2>Plan Your Journey</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="From (Your Location)"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="To (Destination)"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchPanel;
