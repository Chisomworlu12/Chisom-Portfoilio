import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function Divider() {
  return (
    <div className="w-full max-w-[1100px] mx-auto px-6 md:px-16">
      <hr className="border-none border-t border-[#1A1A1A]" />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-[#0D0D0D] text-[#F5F0E8] min-h-screen flex flex-col" >
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
