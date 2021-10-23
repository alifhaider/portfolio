import About from "./Pages/AboutPage/About";
import "./App.css";
import Blog from "./Pages/BlogPage/Blog";
import Contact from "./Pages/ContactPage/Contact";
import Footer from "./Component/Footer";
import Home from "./Pages/HomePage/Home";
import Project from "./Pages/ProjectPage/Project";
import Service from "./Pages/ServicePage/Service";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Service />
      <Project />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
