import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import Home from "./components/Home";
import Top_Navbar from "./components/Top_Navbar";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import Info from "./components/Info";
import Appointment from "./components/Appointment";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getMyProfile } from "./redux/actions/profileAction";

function App() {
  const loginState = useSelector((state) => state.login.respLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    if (loginState.authorizationToken.token !== null && loginState.authorizationToken.token !== "") {
      dispatch(getMyProfile(loginState.authorizationToken.token));
    }
  }, []);
  return (
    <BrowserRouter>
      <Top_Navbar></Top_Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp/*" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<Info />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
