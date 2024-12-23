import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { CalamityPage } from "./pages/evacuation/CalamityPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calamities" element={<CalamityPage />} />
      </Routes>
    </Router>
  );
}

export default App;
