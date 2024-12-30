import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { CalamityPage } from "./pages/evacuation/CalamityPage";
import { CalamityInfoPage } from "./pages/evacuation/CalamityInfoPage";
import { EvacueesPage } from "./pages/evacuation/EvacueesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calamities" element={<CalamityPage />} />
        <Route path="/calamities/info" element={<CalamityInfoPage />} />
        <Route path="/calamities/info/evacuees" element={<EvacueesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
