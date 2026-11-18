import Header from "./components/Header/Header";

import Hero from "./Sections/Hero/Hero";
import About from "./Sections/About/About";
import AuraSelection from "./Sections/AuraSelection/AuraSelection";
import Ritual from "./Sections/Ritual/Ritual";
import FeaturedSerum from "./Sections/FeaturedSerum/FeaturedSerum";
import Essence from "./Sections/Essence/Essence";
import NewsletterCTA from "./components/NewsletterCTA/NewsletterCTA";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import ProductDrawer from "./components/ProductDrawer/ProductDrawer";

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <AuraSelection onProductOpen={setSelectedProduct} />
        <Ritual />
        <FeaturedSerum onProductOpen={setSelectedProduct} />
        <Essence />
        <NewsletterCTA />
      </main>
      <Footer />
      <ProductDrawer product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </>
  );
}

export default App;
