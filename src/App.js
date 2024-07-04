import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./layout/Home";
import Navbar from "./layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import ViewUser from "./ViewUser";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
