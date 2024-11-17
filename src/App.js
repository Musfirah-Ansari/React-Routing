import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layoutcomp from "./components/Layoutcomp";
import Homecomp from "./components/Homecomp";
import Aboutcomp from "./components/Aboutcomp";
import Contactcomp from "./components/Contactcomp";
import Nocomp from "./components/Nocomp";
import Faqcomp from "./components/Faqcomp";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layoutcomp />}>
          <Route index element={<Homecomp />} /> 
          <Route path="about" element={<Aboutcomp />} /> 
          <Route path="contact" element={<Contactcomp />} /> 
          <Route path="faq" element={<Faqcomp />} /> 
          <Route path="*" element={<Nocomp />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;