import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { CalamityPage } from "./pages/evacuation/CalamityPage";
import { CalamityInfoPage } from "./pages/evacuation/CalamityInfoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calamities" element={<CalamityPage />} />
        <Route path="/calamities/info" element={<CalamityInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
