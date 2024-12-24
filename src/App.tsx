import "./App.css"
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/shared/Header";
import { Home } from "./page/Home";
import { AboutUs } from "./page/AboutUs";
import { Services } from "./page/Services";
import { UseCases } from "./page/UseCases";
import { Pricing } from "./page/Pricing";
import { Blog } from "./page/Blog";
import { Footer } from "./components/shared/footer";


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
