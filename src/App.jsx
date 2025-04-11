
import { useState, useEffect } from "react";
import Loader from "./loading";
import "./App.css";
import MainContent from "./maincontent";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : <MainContent />}</>;
}

export default App;
