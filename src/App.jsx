import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import Home from "./components/Home";
import Top_Navbar from "./components/Top_Navbar";
import SignUp from "./components/SignUp";
function App() {
  return (
    <BrowserRouter>
      <Top_Navbar></Top_Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp/*" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
