import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import AboutUs from "./Pages/about_Us";
import Contact_Us from "./Pages/Contact_Us";
import Navbar from "./Components/Navbar/Navbar";
import Service from "./Pages/Service";
import Wallpaper from "./Pages/wallpaper";
import BedHeadboards from "./Pages/BedHeadboards";
import Blinds from "./Pages/Blinds";
import Curtain from "./Pages/Curtains";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/wallpaper" element={<Wallpaper />} />
          <Route path="/BedHeadboards" element={<BedHeadboards />} />
          <Route path="/Blinds" element={<Blinds />} />
          <Route path="/Curtains" element={<Curtain />} />
          <Route path="/About_us" element={<AboutUs />} />
          <Route path="/Contact_Us" element={<Contact_Us />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
