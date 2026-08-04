const WINERY_IMG =
  'https://images.pexels.com/photos/2581022/pexels-photo-2581022.jpeg?auto=compress&cs=tinysrgb&w=1200';
const BOTTLE_IMG =
  'https://images.pexels.com/photos/8472740/pexels-photo-8472740.jpeg?auto=compress&cs=tinysrgb&w=1000';

export default function Winery() {
  return (
    <section id="oinopoieio" className="py-28 md:py-40 bg-clay-100/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="reveal order-2 lg:order-1 relative">
            <div className="overflow-hidden">
              <img
                src={WINERY_IMG}
                alt="Το οινοποιείο μέσα στο αμπέλι"
                className="w-full h-[460px] md:h-[560px] object-cover"
              />
            </div>
            <div className="absolute -top-6 -right-6 hidden md:block bg-clay-50 border border-clay-200 px-6 py-5 shadow-sm">
              <p className="font-serif text-2xl text-clay-900 leading-tight">
                «Το κρασί γεννιέται
                <br />
                εκεί που μεγαλώνει.»
              </p>
            </div>
          </div>

          <div className="reveal order-1 lg:order-2">
            <p className="text-moss-700 text-[11px] uppercase tracking-[0.35em] font-semibold mb-5">
              Το Οινοποιείο μέσα στο Αμπέλι
            </p>
            <h2 className="font-serif text-clay-900 text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium mb-8">
              Εκεί που το αμπέλι
              <span className="italic font-light"> γίνεται κρασί.</span>
            </h2>
            <div className="space-y-5 text-clay-700 text-lg leading-relaxed font-light max-w-xl">
              <p>
                Το οινοποιείο μας δεν στέκεται δίπλα στο αμπέλι. Στέκει μέσα του.
                Στην καρδιά του Λεβιδίου, οι σταφύλια διανύουν μόλις λίγα μέτρα από
                το αμπέλι που τις γέννησε ως τον χώρο ζύμωσης.
              </p>
              <p>
                Αυτή η εγγύτητα είναι ταυτότητα. Σημαίνει φρεσκάδα χωρίς
                μετακινήσεις, σημαίνει ότι κάθε φιάλη κρατά μέσα της τον αέρα, το
                χώμα και το φως του τόπου μας.
              </p>
            </div>

            <div className="mt-10 flex items-center gap-6 border-t border-clay-300 pt-8">
              <img
                src={BOTTLE_IMG}
                alt="Μοσχοφίλερο Vineyard 211"
                className="h-24 w-24 object-cover rounded-full ring-1 ring-clay-300"
              />
              <div>
                <p className="font-serif text-2xl text-clay-900">Μοσχοφίλερο</p>
                <p className="text-clay-600 text-sm font-light">
                  Περιορισμένη παραγωγή · 4.000 φιάλες τον χρόνο
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
