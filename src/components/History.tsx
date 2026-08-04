const HISTORY_IMG =
  'https://images.pexels.com/photos/10922960/pexels-photo-10922960.jpeg?auto=compress&cs=tinysrgb&w=1200';

const MILESTONES = [
  { year: '2012', text: 'Ο πρώτος τρύγος. Μια οικογένεια, ένα όνειρο, οι πρώτες φιάλες.' },
  { year: '2015', text: 'Το αμπέλι περνά οριστικά σε πλήρως βιολογική καλλιέργεια.' },
  { year: 'Σήμερα', text: '4.000 φιάλες περιορισμένης παραγωγής, με την ίδια αφοσίωση της πρώτης μέρας.' },
];

export default function History() {
  return (
    <section id="istoria" className="relative py-28 md:py-40 bg-moss-900 text-clay-50 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src={HISTORY_IMG}
          alt=""
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-moss-900 via-moss-900/85 to-moss-900/40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="reveal text-moss-300 text-[11px] uppercase tracking-[0.35em] font-semibold mb-5">
            Η Ιστορία μας & η Οικογένεια
          </p>
          <h2 className="reveal font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium mb-8">
            Ο τρύγος του 2012
            <span className="italic font-light text-moss-200"> ήταν η αρχή.</span>
          </h2>
          <p className="reveal text-clay-100/85 text-lg leading-relaxed font-light mb-12 max-w-xl">
            Το Vineyard 211 είναι, πριν απ' όλα, μια οικογενειακή ιστορία. Δύο
            γενιές μοιράζονται το ίδιο αμπέλι, την ίδια φροντίδα, την ίδια
            αφοσίωση σε ένα κρασί που φτιάχνεται όπως παλιά — με τα χέρια, με τον
            χρόνο, με αγάπη.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-px bg-moss-700/40 border border-moss-700/40">
          {MILESTONES.map((m, i) => (
            <div
              key={m.year}
              className="reveal bg-moss-900 p-8 lg:p-10"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <p className="font-serif text-5xl text-moss-200 font-light mb-4">
                {m.year}
              </p>
              <p className="text-clay-100/80 leading-relaxed font-light">
                {m.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
