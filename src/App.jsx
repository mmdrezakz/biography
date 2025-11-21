// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Login from "./pages/Login";
import Anjoman from "./pages/Anjoman";
import Home from "./Pages/Home";
import Layout from "./Ui/Layout";
import Sign from "./Pages/Sign";
import Project from "./Pages/Project";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign" element={<Sign />} />
          <Route path="project" element={<Project />} />

          <Route path="anjoman" element={<Anjoman />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;