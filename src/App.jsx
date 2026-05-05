import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import AssetDetail from "./pages/AssetDetail";
import Learn from "./pages/Learn";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/layout/Footer";
import WarningBanner from "./components/WarningBanner";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <WarningBanner />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/asset/:symbol" element={<AssetDetail />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}