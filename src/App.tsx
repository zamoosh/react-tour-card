import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home.tsx";
import Tour from "./pages/Tour.tsx";
import About from "./pages/About.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/:id" element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
