import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Project from "./components/projects";

function App() {
  return (
    <main className="container">
      <Nav />
      <Hero />
      <Project />
    </main>
  );
}

export default App;
