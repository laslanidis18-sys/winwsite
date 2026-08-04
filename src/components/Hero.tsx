import { ChevronDown } from 'lucide-react';

const HERO_IMG =
  'https://images.pexels.com/photos/8821416/pexels-photo-8821416.jpeg?auto=compress&cs=tinysrgb&w=1920';

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[640px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Αμπέλι στο Λεβίδι Αρκαδίας"
          className="h-full w-full object-cover animate-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-clay-900/55 via-clay-900/30 to-clay-900/70" />
      </div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <p className="reveal text-clay-100/80 text-[11px] md:text-xs uppercase tracking-[0.4em] mb-6 font-light">
          Λεβίδι Αρκαδίας · Οικογενειακό Οινοποιείο
        </p>
        <h1 className="reveal font-serif text-clay-50 text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-medium max-w-4xl">
          Βιολογικό Μοσχοφίλερο,
          <br />
          <span className="italic font-light">από το αμπέλι στο ποτήρι.</span>
        </h1>
        <p className="reveal mt-8 max-w-xl text-clay-100/85 text-base md:text-lg leading-relaxed font-light">
          Μια οικογένεια, ένα αμπέλι, μια φιλοσοφία. Από το 2015 καλλιεργούμε με
          απόλυτο σεβασμό στη φύση — χωρίς χημικά, χωρίς συμβιβασμούς.
        </p>
        <div className="reveal mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#episkepsi"
            className="px-8 py-3.5 bg-moss-700 text-clay-50 text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-moss-800 transition-colors duration-300"
          >
            Κλείστε Επίσκεψη
          </a>
          <a
            href="#filosophia"
            className="px-8 py-3.5 border border-clay-100/40 text-clay-50 text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-clay-50/10 transition-colors duration-300"
          >
            Η Φιλοσοφία μας
          </a>
        </div>
      </div>

      <a
        href="#filosophia"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-clay-100/70 hover:text-clay-50 transition-colors"
        aria-label="Κάντε κύλιση"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
