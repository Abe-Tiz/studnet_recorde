import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import CreateCoarse from "./components/coarse/createCoarse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/createCoarse" element={<CreateCoarse />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;