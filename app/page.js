'use client'
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";

export default function Home() {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Experience />
    <Work />
    <Education />
    <Contact />
    <Footer />
    </>
  );
}
