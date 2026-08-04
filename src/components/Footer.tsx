import { Grape, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="epikoinonia" className="bg-clay-900 text-clay-100">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          <div>
            <div className="flex items-center gap-2.5 font-serif text-2xl text-clay-50 mb-4">
              <Grape className="h-5 w-5 text-moss-400" />
              <span className="font-medium">Vineyard <span className="font-light">211</span></span>
            </div>
            <p className="text-clay-300 text-sm leading-relaxed font-light max-w-xs">
              Οικογενειακό βιολογικό οινοποινοποιείο. Βιολογικό Μοσχοφίλερο,
              περιορισμένη παραγωγή 4.000 φιαλών, με σεβασμό στη φύση από το 2015.
            </p>
          </div>

          <div>
            <p className="text-clay-50 text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              Πλοήγηση
            </p>
            <ul className="space-y-3 text-sm font-light">
              <li><a href="#filosophia" className="text-clay-300 hover:text-clay-50 transition-colors">Φιλοσοφία</a></li>
              <li><a href="#istoria" className="text-clay-300 hover:text-clay-50 transition-colors">Ιστορία & Οικογένεια</a></li>
              <li><a href="#oinopoieio" className="text-clay-300 hover:text-clay-50 transition-colors">Οινοποιείο</a></li>
              <li><a href="#episkepsi" className="text-clay-300 hover:text-clay-50 transition-colors">Επίσκεψη</a></li>
            </ul>
          </div>

          <div>
            <p className="text-clay-50 text-xs uppercase tracking-[0.2em] font-semibold mb-5">
              Επικοινωνία
            </p>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-center gap-2.5 text-clay-300">
                <MapPin className="h-4 w-4 text-moss-400 shrink-0" />
                Λεβίδι Αρκαδίας, Πελοπόννησος
              </li>
              <li>
                <a href="mailto:info@vineyard211.gr" className="text-clay-300 hover:text-clay-50 transition-colors">
                  info@vineyard211.gr
                </a>
              </li>
              <li className="text-clay-300">+30 27910 00000</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-clay-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-clay-400 text-xs font-light">
            © {new Date().getFullYear()} Vineyard 211. Με σεβασμό στη γη.
          </p>
          <p className="text-clay-400 text-xs font-light">
            Λεβίδι Αρκαδίας · Ελλάδα
          </p>
        </div>
      </div>
    </footer>
  );
}
