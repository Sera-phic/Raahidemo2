import React from "react";
import MapView from "../components/MapView";
import SearchPanel from "../components/SearchPanel";

function Home() {
  return (
    <div className="container">
      <MapView />
      <SearchPanel />
    </div>
  );
}

export default Home;
