import { Leaf, Sun, Droplets, ShieldCheck } from 'lucide-react';

const PHILO_IMG =
  'https://images.pexels.com/photos/3840331/pexels-photo-3840331.jpeg?auto=compress&cs=tinysrgb&w=1200';

const PILLARS = [
  {
    icon: Leaf,
    title: 'Χωρίς χημικά',
    text: 'Καμία χρήση συνθετικών λιπασμάτων, φυτοφαρμάκων ή ζιζανιοκτόνων. Μόνο η γη, ο ήλιος και ο χρόνος.',
  },
  {
    icon: Sun,
    title: 'Σεβασμός στο οικοσύστημα',
    text: 'Φιλοξενούμε και ευεργετούμε την τοπική βιοποικιλότητα του Λεβιδίου — έντομα, χλωρίδα, μικροοργανισμούς.',
  },
  {
    icon: Droplets,
    title: 'Ζωντανό έδαφος',
    text: 'Θρέφουμε το χώμα, όχι μόνο το φυτό. Ένα υγιές έδαφος παράγει σταφύλια με αληθινή ταυτότητα.',
  },
  {
    icon: ShieldCheck,
    title: 'Πιστότητα από το 2015',
    text: 'Δέκα χρόνια αδιάλειπτης βιολογικής καλλιέργειας. Η συνέπεια είναι η μόνη μας πιστοποίηση.',
  },
];

export default function Philosophy() {
  return (
    <section id="filosophia" className="relative py-28 md:py-40 bg-clay-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal">
            <p className="text-moss-700 text-[11px] uppercase tracking-[0.35em] font-semibold mb-5">
              Η Βιολογική μας Φιλοσοφία
            </p>
            <h2 className="font-serif text-clay-900 text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium mb-8">
              Από το 2015 έως σήμερα,
              <span className="italic font-light"> με αφοσίωση στη γη.</span>
            </h2>
            <div className="space-y-5 text-clay-700 text-lg leading-relaxed font-light max-w-xl">
              <p>
                Το 2015 πήραμε μια απόφαση που άλλαξε τα πάντα. Αφήσαμε πίσω μας κάθε
                χημική επέμβαση και παραδώσαμε το αμπέλι στη λογική της φύσης.
                Έκτοτε, καλλιεργούμε και παράγουμε το κρασί μας με απόλυτο σεβασμό
                στο οικοσύστημα του Λεβιδίου.
              </p>
              <p>
                Δεν χρησιμοποιούμε συνθετικά λιπάσματα, φυτοφάρμακα ή ζιζανιοκτόνα.
                Δεν βιάζουμε το αμπέλι. Τον αφήνουμε να εκφράσει, χρόνο με τον χρόνο,
                τον χαρακτήρα του τόπου — την αγνότητα της γης που το τρέφει.
              </p>
              <p>
                Αυτή η φιλοσοφία δεν είναι μέθοδος. Είναι υπόσχεση. Και η γεύση του
                Μοσχοφίλερού μας είναι η εκπλήρωσή της: καθαρή, αρωματική, ζωντανή.
              </p>
            </div>
          </div>

          <div className="reveal relative">
            <div className="relative overflow-hidden">
              <img
                src={PHILO_IMG}
                alt="Χειροποίητος τρύγος στο αμπέλι"
                className="w-full h-[520px] md:h-[640px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clay-900/30 to-transparent" />
            </div>
            <div className="absolute -bottom-8 -left-8 hidden md:block bg-moss-800 text-clay-50 px-8 py-6 max-w-[240px]">
              <p className="font-serif text-3xl leading-none mb-1">10</p>
              <p className="text-xs uppercase tracking-[0.2em] text-moss-100">
                χρόνια βιολογικής
                <br />
                καλλιέργειας
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-clay-200 border border-clay-200">
          {PILLARS.map((p, i) => (
            <div
              key={p.title}
              className="reveal bg-clay-50 p-8 lg:p-10 hover:bg-clay-100/60 transition-colors duration-500"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <p.icon className="h-8 w-8 text-moss-700 mb-6" strokeWidth={1.5} />
              <h3 className="font-serif text-xl text-clay-900 mb-3 font-medium">
                {p.title}
              </h3>
              <p className="text-clay-600 text-sm leading-relaxed font-light">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
