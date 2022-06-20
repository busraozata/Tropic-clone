import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LearnMore from "./pages/LearnMore";
import Footer from "./components/Footer/Footer";
import Pricing from "./pages/Pricing";
import BookNow from "./pages/BookNow";
import LocationPage from "./pages/LocationPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations" element={<LocationPage />} />
        <Route path="/learnmore" element={<LearnMore />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/booknow" element={<BookNow />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
