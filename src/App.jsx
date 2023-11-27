import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import TopBar from "./components/Top_Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
