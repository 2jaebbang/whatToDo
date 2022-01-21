import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "pages/Home";
import CampDetail from "pages/CampDetail";
import CampApply from "pages/CampApply";
import Community from "pages/Community";
import Nav from "components/Nav";
import { ContentsContainer } from "components/ContentsContainer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContentsContainer>
          <Nav />
        </ContentsContainer>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail" element={<CampDetail />}></Route>
          <Route path="/apply" element={<CampApply />}></Route>
          <Route path="/community" element={<Community />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
