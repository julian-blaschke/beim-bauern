import React from "react";
import { useSites } from "./hooks/sites";

function App() {
  const [sites, loading] = useSites("");
  return loading ? <p>loading...</p> : <pre>{JSON.stringify(sites)}</pre>;
}

export default App;
