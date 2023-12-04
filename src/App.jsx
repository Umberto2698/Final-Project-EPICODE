import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import Home from "./components/Home";
import Top_Navbar from "./components/Top_Navbar";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Info from "./components/Info";
function App() {
  return (
    <BrowserRouter>
      <Top_Navbar></Top_Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp/*" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
