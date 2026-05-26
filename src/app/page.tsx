import HeroComp from "./components/Hero";
import PricesSection from "./components/Prices";
import SedesComp from "./components/Sedes";
import RedesComp from "./components/Redes";

export default function Home() {
  return (
    <div>
      <HeroComp />
      <PricesSection />
      <SedesComp />
      <RedesComp />
    </div>
  );
}
