import { useState, type FormEvent } from 'react';
import { MapPin, Clock, Mail, Phone, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

const VISIT_IMG =
  'https://images.pexels.com/photos/943700/pexels-photo-943700.jpeg?auto=compress&cs=tinysrgb&w=1200';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Visit() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: (data.get('name') as string)?.trim(),
      email: (data.get('email') as string)?.trim(),
      phone: (data.get('phone') as string)?.trim() || null,
      visit_date: (data.get('visit_date') as string) || null,
      guests: data.get('guests') ? Number(data.get('guests')) : null,
      message: (data.get('message') as string)?.trim() || null,
    };

    if (!payload.name || !payload.email) {
      setStatus('error');
      setErrorMsg('Παρακαλούμε συμπληρώστε όνομα και email.');
      return;
    }

    const { error } = await supabase.from('visit_bookings').insert([payload]);

    if (error) {
      setStatus('error');
      setErrorMsg('Κάτι πήγε στραβά. Δοκιμάστε ξανά σε λίγο.');
      return;
    }

    setStatus('success');
    form.reset();
  };

  return (
    <section id="episkepsi" className="relative py-28 md:py-40 bg-clay-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left: info */}
          <div className="reveal">
            <p className="text-moss-700 text-[11px] uppercase tracking-[0.35em] font-semibold mb-5">
              Επίσκεψη
            </p>
            <h2 className="font-serif text-clay-900 text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium mb-8">
              Ελάτε να ζήσετε
              <span className="italic font-light"> το αμπέλι από κοντά.</span>
            </h2>
            <p className="text-clay-700 text-lg leading-relaxed font-light mb-10 max-w-xl">
              Το οινοποιείο μας είναι ανοιχτό σε όσους θέλουν να γνωρίσουν την
              ιστορία μας, να περπατήσουν μέσα στο αμπέλι και να γευτούν το
              Μοσχοφίλερό μας στον χώρο που γεννήθηκε. Κλείστε την επίσκεψή σας
              συμπληρώνοντας τη φόρμα.
            </p>

            <div className="overflow-hidden mb-10">
              <img
                src={VISIT_IMG}
                alt="Το αμπέλι στο Λεβίδι"
                className="w-full h-64 object-cover"
              />
            </div>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-moss-700 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-clay-900 font-medium">Τοποθεσία</p>
                  <p className="text-clay-600 font-light">Λεβίδι Αρκαδίας, Πελοπόννησος</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-moss-700 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-clay-900 font-medium">Ώρες επίσκεψης</p>
                  <p className="text-clay-600 font-light">Κλείστε ραντεβού — υποδεχόμαστε κατόπιν συνεννόησης</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-moss-700 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-clay-900 font-medium">Email</p>
                  <p className="text-clay-600 font-light">info@vineyard211.gr</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-moss-700 mt-0.5 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-clay-900 font-medium">Τηλέφωνο</p>
                  <p className="text-clay-600 font-light">+30 27910 00000</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: form */}
          <div className="reveal lg:sticky lg:top-28">
            <div className="bg-white border border-clay-200 p-8 md:p-10 shadow-sm">
              <h3 className="font-serif text-2xl text-clay-900 mb-1 font-medium">
                Φόρμα Επίσκεψης
              </h3>
              <p className="text-clay-500 text-sm font-light mb-8">
                Συμπληρώστε τα στοιχεία σας και θα επικοινωνήσουμε μαζί σας.
              </p>

              {status === 'success' ? (
                <div className="flex flex-col items-center text-center py-10">
                  <CheckCircle2 className="h-14 w-14 text-moss-600 mb-5" strokeWidth={1.5} />
                  <p className="font-serif text-2xl text-clay-900 mb-2">Ευχαριστούμε!</p>
                  <p className="text-clay-600 font-light max-w-xs">
                    Το αίτημά σας ελήφθη. Θα επικοινωνήσουμε μαζί σας σύντομα για να
                    επιβεβαιώσουμε την επίσκεψη.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 text-moss-700 text-sm uppercase tracking-[0.18em] font-medium hover:text-moss-800 transition-colors"
                  >
                    Νέα αίτηση
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field label="Όνοματεπώνυμο *">
                    <input
                      name="name"
                      type="text"
                      required
                      className="form-input"
                      placeholder="Το όνομά σας"
                    />
                  </Field>
                  <Field label="Email *">
                    <input
                      name="email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="email@example.com"
                    />
                  </Field>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Τηλέφωνο">
                      <input
                        name="phone"
                        type="tel"
                        className="form-input"
                        placeholder="+30 ..."
                      />
                    </Field>
                    <Field label="Ημερομηνία">
                      <input name="visit_date" type="date" className="form-input" />
                    </Field>
                  </div>
                  <Field label="Αριθμός ατόμων">
                    <input
                      name="guests"
                      type="number"
                      min={1}
                      max={20}
                      className="form-input"
                      placeholder="π.χ. 2"
                    />
                  </Field>
                  <Field label="Μήνυμα">
                    <textarea
                      name="message"
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Οτιδήποτε θέλετε να γνωρίζουμε..."
                    />
                  </Field>

                  {status === 'error' && (
                    <div className="flex items-center gap-2.5 text-wine-700 text-sm bg-wine-50 border border-wine-200 px-4 py-3">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full flex items-center justify-center gap-2.5 bg-moss-700 text-clay-50 py-4 text-[13px] uppercase tracking-[0.2em] font-medium hover:bg-moss-800 transition-colors duration-300 disabled:opacity-60"
                  >
                    {status === 'submitting' ? (
                      'Αποστολή...'
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Αποστολή Αιτήματος
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          background-color: #faf7f2;
          border: 1px solid #e6d8c3;
          padding: 0.7rem 0.9rem;
          font-size: 0.95rem;
          color: #38271a;
          transition: border-color 0.2s, background-color 0.2s;
          font-family: inherit;
        }
        .form-input::placeholder { color: #bf9d76; font-weight: 300; }
        .form-input:focus {
          outline: none;
          border-color: #506a39;
          background-color: #fff;
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-clay-700 text-xs uppercase tracking-[0.15em] font-medium mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
