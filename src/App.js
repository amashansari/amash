import React from "react";
import "./App.css";
import CustomFooter from "./Components/Footer/CustomFooter";
import CustomNavbar from "./Components/Navbar/CustomNavbar";
import CustomPortfolio from "./Components/Portfolio/CustomPortfolio";
import ReactGA from "react-ga4";
import { Helmet } from "react-helmet";
import structuredData from "./StructuredData";

function App() {
  
  ReactGA.initialize("G-GS5XWLDWGN")
  return (
    <div className="App">
      <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        <meta property="og:title" content="Amash Ansari" />
        <meta property="og:url" content="https://amashansari.github.io/amash" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:description" content="Hi, I am a Front-End Developer, This is my portfolio" />
      </Helmet>
      <CustomNavbar />
      <CustomPortfolio />
      <CustomFooter />
    </div>
  );
}

export default App;
