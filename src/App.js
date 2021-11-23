import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Project from "./components/projects";
import InfoSection from "./components/infoSection";
import Footer from "./components/footer";

function App() {
  return (
    <main className="container">
      <Nav />
      <Hero />
      <Project />
      <InfoSection />
      <Footer />
    </main>
  );
}

export default App;
