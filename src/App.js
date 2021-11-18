import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Project from "./components/projects";
import InfoSection from "./components/infoSection";

function App() {
  return (
    <main className="container">
      <Nav />
      <Hero />
      <Project />
      <InfoSection />
    </main>
  );
}

export default App;
