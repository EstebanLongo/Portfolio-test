import logo from './logo.svg';
import './App.css';
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Projects from "./components/Projects/Projects.jsx";
import TechStack from "./components/TechStack/TechStack.jsx";
import SobreMi from './components/Sobre Mi/SobreMi.jsx';

function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <NavBar />
      <About />
      {/* <SobreMi /> */}
      <TechStack />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
