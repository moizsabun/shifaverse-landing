import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { IconComponent } from '../icon/icon';

interface Role {
  key: string;
  label: string;
  tagline: string;
  description: string;
  perks: string[];
  icon: string;
  accent: string;
}

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="roles" class="py-20 sm:py-24 lg:py-32 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="inline-block text-xs font-bold tracking-[0.18em] uppercase text-brand-700">For everyone involved</span>
          <h2 class="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            One platform, purpose-built portals for every persona.
          </h2>
          <p class="mt-5 text-lg text-slate-600">
            Owners run the clinic, doctors focus on patients, reception moves the queue,
            and patients get a beautiful mobile app &mdash; each surface tuned to its user.
          </p>
        </div>

        <!-- Tabs -->
        <div class="mt-8 sm:mt-10 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto scrollbar-hide" role="tablist" aria-label="Choose a role">
          <div class="flex gap-2 min-w-max sm:min-w-0 sm:flex-wrap">
            @for (r of roles; track r.key) {
              <button
                type="button"
                role="tab"
                [attr.aria-selected]="active() === r.key"
                [class.bg-slate-900]="active() === r.key"
                [class.text-white]="active() === r.key"
                [class.bg-slate-100]="active() !== r.key"
                [class.text-slate-700]="active() !== r.key"
                class="shrink-0 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:bg-slate-200/70"
                (click)="active.set(r.key)"
              >
                <app-icon [name]="r.icon" [size]="16" />
                {{ r.label }}
              </button>
            }
          </div>
        </div>

        <!-- Content -->
        @let current = currentRole();
        <div class="mt-10 grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div class="lg:col-span-5 rounded-2xl bg-slate-50 p-8 lg:p-10 ring-1 ring-slate-200">
            <div
              class="grid h-14 w-14 place-items-center rounded-2xl text-white shadow-soft"
              [class]="current.accent"
            >
              <app-icon [name]="current.icon" [size]="26" />
            </div>
            <p class="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{{ current.label }}</p>
            <h3 class="mt-2 font-display text-2xl lg:text-3xl font-extrabold text-slate-900 leading-tight">{{ current.tagline }}</h3>
            <p class="mt-4 text-slate-600 leading-relaxed">{{ current.description }}</p>

            <ul class="mt-6 grid gap-3">
              @for (p of current.perks; track p) {
                <li class="flex items-start gap-3 text-sm text-slate-700">
                  <span class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <app-icon name="check" [size]="14" />
                  </span>
                  <span>{{ p }}</span>
                </li>
              }
            </ul>
          </div>

          <!-- Right: rotating screen mock -->
          <div class="lg:col-span-7">
            <div class="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6 lg:p-8 ring-1 ring-slate-200 shadow-soft overflow-hidden h-full">
              <div class="absolute inset-0 bg-grid-dark opacity-50" aria-hidden="true"></div>
              <div class="relative">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <span class="h-2 w-2 rounded-full bg-rose-400"></span>
                    <span class="h-2 w-2 rounded-full bg-amber-400"></span>
                    <span class="h-2 w-2 rounded-full bg-emerald-400"></span>
                  </div>
                  <span class="text-[11px] font-mono text-white/60">{{ current.label }} · Portal</span>
                </div>

                @switch (current.key) {
                  @case ('owner') {
                    <div class="mt-6 grid sm:grid-cols-3 gap-3">
                      <div class="rounded-xl bg-white/10 p-4">
                        <div class="text-[11px] text-white/60 uppercase">MTD revenue</div>
                        <div class="mt-1 text-2xl font-bold">$24,180</div>
                      </div>
                      <div class="rounded-xl bg-white/10 p-4">
                        <div class="text-[11px] text-white/60 uppercase">Patients</div>
                        <div class="mt-1 text-2xl font-bold">1,402</div>
                      </div>
                      <div class="rounded-xl bg-white/10 p-4">
                        <div class="text-[11px] text-white/60 uppercase">Platform fee</div>
                        <div class="mt-1 text-2xl font-bold">$182</div>
                      </div>
                    </div>
                    <div class="mt-4 rounded-xl bg-white/5 p-4">
                      <div class="flex items-center justify-between">
                        <span class="text-sm font-semibold">Fee configuration</span>
                        <span class="text-[11px] text-brand-300">Editable</span>
                      </div>
                      <div class="mt-3 grid grid-cols-2 gap-3 text-sm">
                        <div class="rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/30 p-3">
                          <div class="text-[11px] text-emerald-200">Patient consultation</div>
                          <div class="mt-1 font-bold text-white">$25.00</div>
                        </div>
                        <div class="rounded-lg bg-rose-500/10 ring-1 ring-rose-400/30 p-3">
                          <div class="text-[11px] text-rose-200">Platform per-visit</div>
                          <div class="mt-1 font-bold text-white">$0.20</div>
                        </div>
                      </div>
                    </div>
                  }
                  @case ('doctor') {
                    <div class="mt-6 grid sm:grid-cols-2 gap-4">
                      <div class="rounded-xl bg-white/10 p-4">
                        <div class="text-[11px] text-white/60 uppercase">Currently with you</div>
                        <div class="mt-1 text-3xl font-bold">Token #07</div>
                        <div class="mt-2 text-xs text-white/70">Aisha K. · 28F · Returning</div>
                      </div>
                      <div class="rounded-xl bg-white/10 p-4">
                        <div class="text-[11px] text-white/60 uppercase">Next up</div>
                        <ul class="mt-2 space-y-1 text-sm">
                          <li>#08 &middot; Bilal Ahmed</li>
                          <li>#09 &middot; Sana Iqbal</li>
                          <li>#10 &middot; Reserved 11:30</li>
                        </ul>
                      </div>
                    </div>
                    <div class="mt-4 rounded-xl bg-white/5 p-4">
                      <div class="text-sm font-semibold">Prescription</div>
                      <ul class="mt-2 text-xs text-white/80 space-y-1">
                        <li>1. Amoxicillin &middot; 500mg &middot; TDS &middot; 5 days</li>
                        <li>2. Paracetamol &middot; 650mg &middot; SOS</li>
                        <li>Tests: CBC, Urine R/E</li>
                      </ul>
                    </div>
                  }
                  @case ('compounder') {
                    <div class="mt-6 rounded-xl bg-white/10 p-4">
                      <div class="flex items-center justify-between">
                        <span class="text-sm font-semibold">Active shift</span>
                        <span class="text-[11px] text-emerald-300">Morning · Open</span>
                      </div>
                      <div class="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
                        <div class="rounded-lg bg-white/10 py-2"><div class="text-white/60">Booked</div><div class="text-lg font-bold">18</div></div>
                        <div class="rounded-lg bg-white/10 py-2"><div class="text-white/60">Done</div><div class="text-lg font-bold">11</div></div>
                        <div class="rounded-lg bg-white/10 py-2"><div class="text-white/60">In queue</div><div class="text-lg font-bold">7</div></div>
                      </div>
                    </div>
                    <div class="mt-4 rounded-xl bg-white/5 p-4">
                      <div class="text-sm font-semibold">Book new patient</div>
                      <div class="mt-3 grid sm:grid-cols-2 gap-2 text-xs">
                        <div class="rounded-lg bg-white/10 px-3 py-2 text-white/70">Patient name</div>
                        <div class="rounded-lg bg-white/10 px-3 py-2 text-white/70">Phone</div>
                        <div class="rounded-lg bg-brand-500/20 ring-1 ring-brand-300/40 px-3 py-2 text-brand-100">Auto token: <strong>#12</strong></div>
                        <div class="rounded-lg bg-white/10 px-3 py-2 text-white/70">Reserve specific #</div>
                      </div>
                    </div>
                  }
                  @case ('patient') {
                    <div class="mt-6 grid sm:grid-cols-5 gap-4 items-stretch">
                      <!-- Phone mockup -->
                      <div class="sm:col-span-3">
                        <div class="mx-auto max-w-[260px] rounded-[2rem] bg-slate-900 ring-1 ring-white/10 p-2 shadow-soft">
                          <div class="rounded-[1.6rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-rose-500 p-4 text-white">
                            <div class="flex items-center justify-between text-[10px] opacity-80">
                              <span>9:41</span>
                              <span>•••</span>
                            </div>
                            <div class="mt-3">
                              <div class="text-[10px] uppercase tracking-wider opacity-80">Your appointment</div>
                              <div class="font-display text-2xl font-extrabold leading-tight">Shifa Clinic</div>
                              <div class="text-xs opacity-90">Dr. Hasan &middot; Morning shift</div>
                            </div>
                            <div class="mt-4 rounded-2xl bg-white/15 backdrop-blur p-3 text-center">
                              <div class="text-[10px] uppercase opacity-80">Your token</div>
                              <div class="font-display text-5xl font-extrabold leading-none">#10</div>
                              <div class="mt-1 text-[10px] opacity-80">Now serving #07 &middot; ~4m wait</div>
                            </div>
                            <div class="mt-3 grid grid-cols-2 gap-2 text-[10px]">
                              <div class="rounded-lg bg-white/10 px-2 py-2 text-center">Reschedule</div>
                              <div class="rounded-lg bg-white text-slate-900 px-2 py-2 text-center font-semibold">Get directions</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <!-- Side highlights -->
                      <div class="sm:col-span-2 grid gap-3">
                        <div class="rounded-xl bg-white/10 p-3">
                          <div class="flex items-center gap-2 text-xs font-semibold"><app-icon name="bell" [size]="14" /> Live token alert</div>
                          <div class="mt-1 text-[11px] text-white/70">Push when you're 2 away.</div>
                        </div>
                        <div class="rounded-xl bg-white/10 p-3">
                          <div class="flex items-center gap-2 text-xs font-semibold"><app-icon name="prescription" [size]="14" /> Prescription archive</div>
                          <div class="mt-1 text-[11px] text-white/70">Every visit, every test.</div>
                        </div>
                        <div class="rounded-xl bg-white/10 p-3">
                          <div class="flex items-center gap-2 text-xs font-semibold"><app-icon name="card" [size]="14" /> Pay in-app</div>
                          <div class="mt-1 text-[11px] text-white/70">Cash, card, or wallet.</div>
                        </div>
                      </div>
                    </div>
                  }
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class RolesComponent {
  protected active = signal('owner');

  protected roles: Role[] = [
    {
      key: 'owner',
      label: 'Clinic Owner',
      tagline: 'A live pulse on revenue, costs, and operations.',
      description: 'Configure consultation fees, monitor every shift, track outstanding invoices, and see exactly what your clinic earns versus what the platform charges — all in one owner dashboard.',
      perks: [
        'Side-by-side fee configuration (patient vs. platform)',
        'Live month-to-date revenue & patient count',
        'Invoice history with cash, bank, and cheque tracking',
        'Sign in even during payment-suspension windows',
      ],
      icon: 'wallet',
      accent: 'bg-gradient-to-br from-emerald-500 to-emerald-700',
    },
    {
      key: 'doctor',
      label: 'Doctor',
      tagline: 'Spend less time on screens, more time on patients.',
      description: 'A focused console showing the current token, complete patient history, the prescription builder, and an 80+ medical test catalog. Two-print flow lets you hand over the patient copy and keep the detailed internal copy.',
      perks: [
        'Medicine dropdown with multiple dose options',
        '80+ tests across 7 categories, instant chip selection',
        'Separate "Remarks for patient" and "Internal notes"',
        'One-click reprint from any past visit',
      ],
      icon: 'stethoscope',
      accent: 'bg-gradient-to-br from-sky-500 to-sky-700',
    },
    {
      key: 'compounder',
      label: 'Compounder / Reception',
      tagline: 'Move the queue, not paperwork.',
      description: 'Open and close shifts in seconds, register patients in two fields, auto-issue tokens or reserve specific numbers for advance appointments. Close-shift confirmation previews the invoice before you commit.',
      perks: [
        'Three shift presets: Morning, Evening, Night',
        'Smart token allocation skips reserved numbers',
        'Reprint any prescription from the patient list',
        'Live invoice preview at shift close',
      ],
      icon: 'users',
      accent: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
    },
    {
      key: 'patient',
      label: 'Patient · Mobile App',
      tagline: 'A clinic that fits in your pocket.',
      description: 'A native iOS and Android app where patients book appointments, track the live queue in real time, get a push when their turn is near, view every prescription and lab report, and pay the consultation fee &mdash; without ever picking up a phone.',
      perks: [
        'Book appointments with auto-issued tokens',
        'Live queue tracking with estimated wait time',
        'Push notification when your turn is 2 away',
        'Complete prescription & test history, downloadable',
        'In-app payment with cash, card, or digital wallet',
        'Find clinics nearby with directions and ratings',
      ],
      icon: 'phone',
      accent: 'bg-gradient-to-br from-violet-500 to-fuchsia-700',
    },
  ];

  protected currentRole(): Role {
    return this.roles.find((r) => r.key === this.active())!;
  }
}
