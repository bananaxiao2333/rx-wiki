import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Sidebar />
      <Topbar />
    </>
  );
}

export default App;
