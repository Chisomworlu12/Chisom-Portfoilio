import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Writing from '@/components/sections/Writing';
import { structuredData } from '@/lib/seo';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <script
        type="application/ld+json"
        // Escape "<" so the JSON can never close the script tag early
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData()).replace(/</g, '\\u003c') }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Writing />
      </main>
      <Footer />
    </div>
  );
}
