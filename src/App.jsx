// App.jsx


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Anjoman from "./Pages/Anjoman";
import { lazy, Suspense } from "react";
import Layout from "./Ui/Layout";
import Sign from "./Pages/Sign";
import Project from "./Pages/Project";
import Login from './Pages/Login';
const Home = lazy(() => import ("./Pages/Home")); 
import BounceLoader from './../node_modules/react-spinners/esm/BounceLoader';





function App() {
  return (


    <Router>
      <Suspense fallback={<div className="flex justify-center items-center w-screen h-screen"><BounceLoader size={"100px"}  /></div>}>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="sign" element={<Sign />} />
          <Route path="project" element={<Project />} />

          <Route path="anjoman" element={<Anjoman />} />
        </Route>
      </Routes>
      </Suspense>
    </Router>

  );
}

export default App;