import React from "react";
import { useSite } from "./hooks/sites";

function App() {
  const { site, error } = useSite("2ZAkOOHiiKFN5ZxdhMO");
  if (error) return <p>{error}</p>;
  if (!site) return <p>loading...</p>;
  return <pre>{JSON.stringify(site)}</pre>;
}

export default App;
