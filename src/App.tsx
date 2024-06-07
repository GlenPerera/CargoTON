import Navbar from "./components/Navbar/navbar";
import Herosection from "./components/herosection";
import Solution from "./components/solution";
import StatSection from "./components/statsection";
import Partners from "./components/partners";
import News from "./components/news";
import Footer from "./components/footer";
import Scroll from "./components/scrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Herosection />
      <Solution />
      <StatSection />
      <Partners />
      <News />
      <Footer />
      <Scroll />
    </>
  );
}

export default App;
