import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Solutions from "./Pages/Solutions/Solutions";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/solutions" element={<Solutions />} />

        <Route path="/contact" element={<Contact />} />

        {/* Ruta para capturar errores 404 (Opcional) */}
        <Route path="*" element={<div>404 - Página no encontrada</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
