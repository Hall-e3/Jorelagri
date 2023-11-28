import { lazy } from "react";
import { Supensing } from "./components";
import { Route, Routes } from "react-router-dom";

const News = Supensing(lazy(() => import("./pages/News")));
const About = Supensing(lazy(() => import("./pages/About")));
const Careers = Supensing(lazy(() => import("./pages/Careers")));
const Products = Supensing(lazy(() => import("./pages/Products")));
const Services = Supensing(lazy(() => import("./pages/Services")));
const Home = Supensing(lazy(() => import("./pages/Home")));

function App() {
  return (
    <Routes>
      <Route path={["/", "/home"]} element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/services" element={<Services />} />
      <Route path="/products" element={<Products />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
