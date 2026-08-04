import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import History from '@/components/History';
import Winery from '@/components/Winery';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';
import { useReveal } from '@/hooks/useReveal';

function App() {
  useReveal();

  return (
    <div className="min-h-screen bg-clay-50">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <History />
        <Winery />
        <Visit />
      </main>
      <Footer />
    </div>
  );
}

export default App;
