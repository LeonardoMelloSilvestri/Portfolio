import { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Hero = lazy(() => import("./components/Hero"));
const Tech = lazy(() => import("./components/Tech"));
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Hero />
        <Tech />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
