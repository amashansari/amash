import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./Components/Portfolio/Portfolio";
import Navbar from "./Components/Navbar/Navbar";
import AboutWork from "./Components/Pages/AboutWork/AboutWork";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/amash" element={<Portfolio />}></Route>
          <Route path="/amash/aboutWork" element={<AboutWork />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
