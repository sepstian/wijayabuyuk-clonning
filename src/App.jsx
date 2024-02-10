import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Boat from "./pages/Boat";
import Gallery from "./pages/Gallery";
import Terms from "./pages/Term&conditons";
import Contact from "./pages/Contact";



function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boat" element={<Boat />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </>
  );
}

export default App;
