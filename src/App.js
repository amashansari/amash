import "./App.css";
import CustomFooter from "./Components/Footer/CustomFooter";
import CustomNavbar from "./Components/Navbar/CustomNavbar";
import CustomPortfolio from "./Components/Portfolio/CustomPortfolio";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <CustomPortfolio />
      <CustomFooter />
    </div>
  );
}

export default App;
