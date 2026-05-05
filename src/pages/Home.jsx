import Navbar from "../components/layout/Navbar";
import Hero from "../components/Hero";
import CryptoTable from "../components/CryptoTable";
import Features from "../components/Features";
import ExploreAssetsSection from "../components/ExploreAssetsSection";
import AdvancedTraderSection from "../components/AdvancedTraderSection";
import CoinbaseOneSection from "../components/CoinbaseOneSection";
import BaseAppSection from "../components/BaseAppSection";
import LearnBasicsSection from "../components/LearnBasicsSection";
import TakeControlSection from "../components/TakeControlSection";


export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <Features />
      <ExploreAssetsSection />
      <AdvancedTraderSection />
      <CoinbaseOneSection />
      <BaseAppSection />
      <LearnBasicsSection />
      <TakeControlSection />
    </div>
  );
}