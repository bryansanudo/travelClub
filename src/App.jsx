import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useState } from "react";

import NavBar from "@/layouts/NavBar";
import Home from "@/components/Home";
import SanAndres from "@/components/SanAndres";
import Cartagena from "@/components/Cartagena";
import EjeCafetero from "@/components/EjeCafetero";
import SantaMarta from "@/components/SantaMarta";
import Promotions from "@/components/Promotions";
import HeroSection from "@/components/HeroSection";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <NavBar
                isMenuShown={isMenuShown}
                setIsMenuShown={setIsMenuShown}
              />
            </>
          }
        >
          <Route index element={<Home isMenuShown={isMenuShown} />} />
          <Route
            path="sanandres"
            element={<SanAndres isMenuShown={isMenuShown} />}
          />
          <Route
            path="cartagena"
            element={<Cartagena isMenuShown={isMenuShown} />}
          />
          <Route
            path="ejecafetero"
            element={<EjeCafetero isMenuShown={isMenuShown} />}
          />
          <Route
            path="santamarta"
            element={<SantaMarta isMenuShown={isMenuShown} />}
          />
          <Route
            path="promotions"
            element={<Promotions isMenuShown={isMenuShown} />}
          />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
