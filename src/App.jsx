import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import Home from "./components/Home";
import Top_Navbar from "./components/Top_Navbar";

function App() {
  return (
    <BrowserRouter>
      <Top_Navbar></Top_Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
