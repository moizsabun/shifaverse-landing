import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IconComponent } from '../icon/icon';

interface Item {
  q: string;
  a: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="faq" class="py-24 lg:py-32 bg-slate-50">
      <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div class="text-center max-w-2xl mx-auto">
          <span class="inline-block text-xs font-bold tracking-[0.18em] uppercase text-brand-700">Frequently asked questions</span>
          <h2 class="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Everything you need to know
          </h2>
          <p class="mt-5 text-lg text-slate-600">
            Can't find your answer? Our team is one email away.
          </p>
        </div>

        <ul class="mt-12 space-y-3">
          @for (item of items; track item.q; let i = $index) {
            <li class="rounded-2xl bg-white ring-1 ring-slate-200 shadow-soft overflow-hidden">
              <button
                type="button"
                class="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                [attr.aria-expanded]="open() === i"
                (click)="toggle(i)"
              >
                <span class="font-display font-bold text-slate-900 text-base lg:text-lg">{{ item.q }}</span>
                <span
                  class="shrink-0 grid h-8 w-8 place-items-center rounded-full bg-slate-100 text-slate-700 transition-transform duration-300"
                  [class.rotate-180]="open() === i"
                >
                  <app-icon name="chevron-down" [size]="16" />
                </span>
              </button>
              @if (open() === i) {
                <div class="px-6 pb-6 -mt-1 text-slate-600 leading-relaxed text-sm lg:text-base fade-up">
                  {{ item.a }}
                </div>
              }
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class FaqComponent {
  protected open = signal<number | null>(0);

  toggle(i: number) {
    this.open.update((cur) => (cur === i ? null : i));
  }

  protected items: Item[] = [
    {
      q: 'Is ShifaVerse really multi-tenant out of the box?',
      a: 'Yes. Every clinic, doctor, compounder, patient, shift, appointment, prescription, and invoice carries a tenant ID. Data is fully isolated per clinic and role-based guards protect every route, so one clinic can never see another clinic\'s information.',
    },
    {
      q: 'How does the smart token sequencing actually work?',
      a: 'Walk-ins receive the smallest unused integer token. If reception reserves a specific number for an advance-time patient — say #10 for 11:30 AM — the system skips that number when auto-assigning subsequent walk-ins. Tokens stay collision-free and the queue order remains predictable.',
    },
    {
      q: 'When are invoices generated?',
      a: 'Invoices are produced the moment a shift is closed. Each clinic can choose a billing frequency: per-shift creates a brand new invoice every close, while daily, weekly, or monthly accumulate across shifts into a single open invoice that auto-finalizes when the next period starts. All non-cancelled appointments are counted — pending visits included.',
    },
    {
      q: 'Which payment methods do you support?',
      a: 'Cash, bank transfer, and cheque are tracked natively, each with a reference field for the cheque number, transaction ID, or receipt number. Partial payments are first-class — invoice status moves from OPEN to AWAITING to PARTIAL to PAID automatically.',
    },
    {
      q: 'Is there a mobile app for patients?',
      a: 'Yes — a free native iOS and Android app lets patients book appointments, watch the live queue with their auto-issued token, receive a push notification when their turn is two away, view every past prescription and lab report, and pay the consultation fee in-app. Everything patient-facing lives on the mobile app.',
    },
    {
      q: 'Can patients see the queue without logging in?',
      a: 'Yes. In addition to the mobile app, each clinic has a public dashboard at /public/<slug> that needs no login. It shows the currently-served token, who is next, the next 12 positions, and an estimated wait per position computed from real average service times — ideal for a TV in the waiting room.',
    },
    {
      q: 'How do patients pay through the mobile app?',
      a: 'The app supports cash on arrival, debit and credit cards, and popular digital wallets. Payments sync instantly with the clinic\'s invoice ledger, so reception sees the patient as paid the moment they tap confirm.',
    },
    {
      q: 'Where is my data stored?',
      a: 'The hosted demo runs entirely in your browser via local storage for instant exploration with zero backend. Production deployments use Postgres with row-level security per tenant, encrypted at rest and in transit, with daily backups. Enterprise plans support on-prem and private-cloud installs.',
    },
    {
      q: 'Does ShifaVerse integrate with labs, pharmacies, or insurance?',
      a: 'The Practice plan ships with our medical-test catalog. Enterprise plans add HL7 / FHIR pipelines, lab-result ingestion, e-prescription pharmacy networks, and insurance claim adjudication. Talk to sales for a tailored integration scope.',
    },
  ];
}
