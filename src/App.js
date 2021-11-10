import "./App.css";
import Nav from "./components/nav";
import Hero from "./components/hero";
import Project from "./components/project";

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
