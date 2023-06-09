import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Home from "./components/Home.jsx";
import NavBar from "./NavBar.jsx";
import Characters from "./components/Characters";
import Series from "./components/Series";
import Stories from "./components/Stories";
import Creators from "./components/Creators";
import Banner from "./components/Banner";
import Comics from "./components/Comics";
import SeriesId from "./components/SeriesId";
import CharacterId from "./components/CharacterId";
import ComicsId from "./components/ComicsId";
import EventsId from "./components/EventsId";

function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route index element={<Comics />} />
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/series" element={<Series />}></Route>
        <Route path="/serie/:id" element={<SeriesId />}></Route>
        <Route path="/character/:id" element={<CharacterId />}></Route>
        <Route path="/comics/:id" element={<ComicsId />}></Route>
        <Route path="/popular" element={<Stories />}></Route>
        <Route path="/events" element={<Creators />}></Route>
        <Route path="/events/:id" element={<EventsId />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
