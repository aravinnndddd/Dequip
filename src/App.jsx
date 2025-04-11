
import { useState, useEffect } from "react";
import Loader from "./components/loading";
import "./components/App.css";
import MainContent from "./components/mainContent";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <MainContent />}</>;
}

export default App;
