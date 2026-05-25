import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon';

interface Feature {
  icon: string;
  title: string;
  body: string;
  tone: string;
}

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="features" class="py-20 sm:py-24 lg:py-32 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="inline-block text-xs font-bold tracking-[0.18em] uppercase text-brand-700">Platform features</span>
          <h2 class="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Everything your clinic runs on,
            <span class="text-gradient">finally in one place.</span>
          </h2>
          <p class="mt-5 text-lg text-slate-600">
            Built end-to-end for outpatient practices, ShifaVerse covers the full patient journey —
            from the first call at reception to the final invoice at month-end — with security and audit trails baked in.
          </p>
        </div>

        <div class="mt-10 sm:mt-14 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          @for (f of features; track f.title) {
            <article class="group flex flex-col rounded-2xl bg-white p-7 ring-1 ring-slate-200 hover:ring-brand-300 hover:-translate-y-1 transition-all duration-300 shadow-soft">
              <div
                class="grid h-12 w-12 place-items-center rounded-xl text-white shadow-soft"
                [class]="f.tone"
              >
                <app-icon [name]="f.icon" [size]="22" />
              </div>
              <h3 class="mt-5 font-display text-lg font-bold text-slate-900">{{ f.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ f.body }}</p>
              <div class="mt-5 flex items-center gap-1 text-sm font-semibold text-brand-700 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                Learn more
                <app-icon name="arrow-right" [size]="14" />
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class FeaturesComponent {
  protected features: Feature[] = [
    {
      icon: 'building',
      title: 'Multi-tenant SaaS architecture',
      body: 'One platform, unlimited clinics. Each tenant gets isolated data, role-based access, and branded prescription slips — without the operational overhead of separate installs.',
      tone: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
    },
    {
      icon: 'queue',
      title: 'Smart token-based queue',
      body: 'Walk-ins auto-increment to the next free token, while phone bookings reserve specific numbers. The patented sequencing logic prevents collisions and respects advance-time slots automatically.',
      tone: 'bg-gradient-to-br from-sky-500 to-sky-700',
    },
    {
      icon: 'clock',
      title: 'Dynamic shift workflows',
      body: 'Open, name, and close shifts on the fly with Morning, Evening, and Night presets — or create custom shifts. Every appointment is permanently linked to the shift it belonged to.',
      tone: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    },
    {
      icon: 'prescription',
      title: 'Digital prescription builder',
      body: 'Pick a medicine, choose a dose (or type a custom one), and the prescription assembles itself. Add medical tests from an 80+ catalog across 7 categories with category tabs and instant search.',
      tone: 'bg-gradient-to-br from-rose-500 to-rose-700',
    },
    {
      icon: 'invoice',
      title: 'Automated shift-based billing',
      body: 'The moment you close a shift, ShifaVerse generates the invoice — per-shift, daily, weekly, or monthly. Partial payments, cash, cheque, and bank transfer are all tracked with reference numbers.',
      tone: 'bg-gradient-to-br from-amber-500 to-amber-700',
    },
    {
      icon: 'tv',
      title: 'Public waiting-room display',
      body: 'A login-free dashboard for the lobby TV: current token, next patient, estimated wait per position. Auto-refreshes every 5 seconds and computes live averages from your real service times.',
      tone: 'bg-gradient-to-br from-fuchsia-500 to-purple-700',
    },
    {
      icon: 'users',
      title: 'Role-based access control',
      body: 'Three built-in staff roles — clinic owner, doctor, compounder — plus a free patient mobile app, each with its own portal, navigation, and permission boundary. Auth guards keep data isolated per tenant.',
      tone: 'bg-gradient-to-br from-teal-500 to-teal-700',
    },
    {
      icon: 'phone',
      title: 'Patient mobile app',
      body: 'iOS and Android app for patients to book appointments, watch the live queue in real time, get a push when their turn is near, and keep every prescription and lab report neatly in their pocket.',
      tone: 'bg-gradient-to-br from-violet-500 to-fuchsia-700',
    },
    {
      icon: 'wallet',
      title: 'Two-tier fee configuration',
      body: 'Set the patient consultation fee (printed on the slip) and the platform per-appointment fee separately. Owners see exactly what they earn vs. what they owe — no hidden math.',
      tone: 'bg-gradient-to-br from-lime-500 to-emerald-600',
    },
  ];
}
