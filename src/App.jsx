import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Contact from "./pages/contact/contact";
import FlashCards from "./pages/flashCards/flashCards";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/Web_Mobile_Assignment3/" element={<Home />} />
        <Route path="/Web_Mobile_Assignment3/cards" element={<FlashCards />} />
        <Route path="/Web_Mobile_Assignment3/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
