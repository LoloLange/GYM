import "./App.css";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import { Activities } from "./components/Activities";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Pricing } from "./components/Pricing";
import { Programs } from "./components/Programs";
import { Services } from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <Activities /> */}
      <Services />
      <Programs />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
