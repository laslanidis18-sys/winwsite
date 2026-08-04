import { useEffect, useState } from 'react';
import { Menu, X, Grape } from 'lucide-react';

const LINKS = [
  { href: '#filosophia', label: 'Φιλοσοφία' },
  { href: '#istoria', label: 'Ιστορία' },
  { href: '#oinopoieio', label: 'Οινοποιείο' },
  { href: '#episkepsi', label: 'Επίσκεψη' },
  { href: '#epikoinonia', label: 'Επικοινωνία' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-clay-50/95 backdrop-blur-md shadow-[0_1px_0_rgba(56,39,26,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <a
            href="#top"
            className={`flex items-center gap-2.5 font-serif text-xl tracking-wide transition-colors ${
              scrolled ? 'text-clay-900' : 'text-clay-50'
            }`}
          >
            <Grape className={`h-5 w-5 ${scrolled ? 'text-moss-600' : 'text-moss-300'}`} />
            <span className="font-medium">Vineyard <span className="font-light">211</span></span>
          </a>

          <ul className="hidden md:flex items-center gap-9">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-[13px] uppercase tracking-[0.18em] font-medium transition-colors ${
                    scrolled
                      ? 'text-clay-700 hover:text-moss-700'
                      : 'text-clay-100/90 hover:text-white'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden p-1.5 -mr-1.5 transition-colors ${
              scrolled ? 'text-clay-900' : 'text-clay-50'
            }`}
            aria-label="Μενού"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden bg-clay-50 transition-all duration-400 ${
          open ? 'max-h-96 border-t border-clay-200' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 space-y-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-clay-800 text-sm uppercase tracking-[0.18em] font-medium border-b border-clay-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
