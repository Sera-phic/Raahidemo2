import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BusStatus from "../components/BusStatus";

function ResultsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { from, to } = state || {};

  const results = {
    bus: { fare: "₹20", distance: "15 km", time: "40 min" },
    metro: { fare: "₹30", distance: "12 km", time: "25 min" }
  };

  return (
    <div className="results">
      <h2>Results for {from} → {to}</h2>

      <div className="option">
        <h3>🚍 Bus Option</h3>
        <p>Fare: {results.bus.fare}</p>
        <p>Distance: {results.bus.distance}</p>
        <p>Time: {results.bus.time}</p>
        <button onClick={() => navigate("/results?bus=true", { state })}>
          View Bus Status
        </button>
      </div>

      <div className="option">
        <h3>🚇 Metro Option</h3>
        <p>Fare: {results.metro.fare}</p>
        <p>Distance: {results.metro.distance}</p>
        <p>Time: {results.metro.time}</p>
      </div>

      {window.location.search.includes("bus=true") && <BusStatus />}
    </div>
  );
}

export default ResultsPage;
