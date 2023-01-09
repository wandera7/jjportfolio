import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
function App() {
  return (
    <div>
    <NavBar/>
    <Home/>
    <About/>
    <Portfolio/>
    <Skills/>
    <SocialLinks/>
    </div>
  );
}

export default App;
