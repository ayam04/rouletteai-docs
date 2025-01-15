import Hero from '@/components/Hero';
import ApiDocs from '@/components/ApiDocs';
import Models from '@/components/Models';
import Blog from '@/components/Blog';
import Upcoming from '@/components/Upcoming';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen pt-16">
      <Hero />
      <About />
      <ApiDocs />
      <Models />
      <Blog />
      <Upcoming />
      <Footer/>
    </main>
  );
}