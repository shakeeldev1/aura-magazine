
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./common/navbar";
import Footer from "./common/footer";
import Home from "./pages/home";
import Fashion from "./fashion/fashion";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fashion/*" element={<Fashion />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
