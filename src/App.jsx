import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
