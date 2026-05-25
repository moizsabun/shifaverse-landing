import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon';

interface MobileFeature {
  icon: string;
  title: string;
  body: string;
  tone: string;
}

@Component({
  selector: 'app-mobile',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="mobile" class="relative py-24 lg:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      <div class="absolute inset-0 bg-grid-dark opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" aria-hidden="true"></div>
      <div class="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-500/25 blur-3xl" aria-hidden="true"></div>
      <div class="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-fuchsia-500/25 blur-3xl" aria-hidden="true"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Copy + features -->
          <div class="lg:col-span-7 order-2 lg:order-1">
            <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 ring-1 ring-white/20">
              <app-icon name="phone" [size]="14" />
              New &middot; Patient Mobile App
            </span>
            <h2 class="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              A clinic in every
              <span class="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300 bg-clip-text text-transparent">patient's pocket.</span>
            </h2>
            <p class="mt-5 text-lg text-white/75 max-w-2xl">
              Patients never call the front desk again. Our native iOS and Android app puts every
              patient-facing feature &mdash; booking, queue tracking, prescriptions, payments &mdash;
              in their hand, online or offline.
            </p>

            <div class="mt-10 grid sm:grid-cols-2 gap-4">
              @for (f of features; track f.title) {
                <article class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5 hover:bg-white/10 transition-colors">
                  <span
                    class="grid h-10 w-10 place-items-center rounded-xl text-white"
                    [class]="f.tone"
                  >
                    <app-icon [name]="f.icon" [size]="20" />
                  </span>
                  <h3 class="mt-4 font-display font-bold text-base text-white">{{ f.title }}</h3>
                  <p class="mt-1 text-sm text-white/70 leading-relaxed">{{ f.body }}</p>
                </article>
              }
            </div>

            <div class="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="https://moizsabun.github.io/ShifaVerse/"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-3 rounded-2xl bg-white text-slate-900 px-5 py-3 hover:bg-slate-100 transition-colors shadow-soft"
              >
                <app-icon name="apple" [size]="26" />
                <span class="flex flex-col leading-tight">
                  <span class="text-[10px] uppercase tracking-wider opacity-70">Download on the</span>
                  <span class="text-base font-bold font-display">App Store</span>
                </span>
              </a>
              <a
                href="https://moizsabun.github.io/ShifaVerse/"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center gap-3 rounded-2xl bg-white text-slate-900 px-5 py-3 hover:bg-slate-100 transition-colors shadow-soft"
              >
                <app-icon name="android" [size]="26" />
                <span class="flex flex-col leading-tight">
                  <span class="text-[10px] uppercase tracking-wider opacity-70">Get it on</span>
                  <span class="text-base font-bold font-display">Google Play</span>
                </span>
              </a>
            </div>

            <div class="mt-6 flex items-center gap-2 text-sm text-white/60">
              <span class="flex items-center">
                @for (s of [1,2,3,4,5]; track s) {
                  <app-icon name="star" [size]="14" cssClass="text-amber-300" />
                }
              </span>
              4.9 from 12,400+ patient reviews
            </div>
          </div>

          <!-- Phone stack -->
          <div class="lg:col-span-5 order-1 lg:order-2">
            <div class="relative mx-auto max-w-sm lg:max-w-none">
              <!-- Glow -->
              <div class="absolute inset-0 -m-10 bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-rose-500/20 blur-3xl rounded-[3rem]" aria-hidden="true"></div>

              <!-- Back phone -->
              <div class="relative hidden sm:block absolute -left-8 top-12 rotate-[-8deg] origin-bottom">
                <div class="w-[220px] rounded-[2.5rem] bg-slate-800 ring-1 ring-white/10 p-2 shadow-soft">
                  <div class="rounded-[2rem] bg-gradient-to-br from-sky-600 to-indigo-700 p-4">
                    <div class="flex items-center justify-between text-[10px] opacity-80"><span>9:41</span><span>•••</span></div>
                    <div class="mt-3">
                      <div class="text-[10px] uppercase tracking-wider opacity-80">History</div>
                      <div class="font-display text-base font-bold mt-1">Past visits</div>
                    </div>
                    <ul class="mt-3 space-y-2 text-[11px]">
                      <li class="rounded-lg bg-white/10 px-3 py-2">
                        <div class="font-semibold">Dr. Hasan &middot; May 18</div>
                        <div class="opacity-70 text-[10px] mt-0.5">Amoxicillin · CBC</div>
                      </li>
                      <li class="rounded-lg bg-white/10 px-3 py-2">
                        <div class="font-semibold">Dr. Naz &middot; Apr 02</div>
                        <div class="opacity-70 text-[10px] mt-0.5">Paracetamol</div>
                      </li>
                      <li class="rounded-lg bg-white/10 px-3 py-2">
                        <div class="font-semibold">Dr. Hasan &middot; Mar 14</div>
                        <div class="opacity-70 text-[10px] mt-0.5">Lipid profile</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Front phone -->
              <div class="relative mx-auto w-[260px] sm:w-[280px] rounded-[2.75rem] bg-slate-900 ring-1 ring-white/10 p-2 shadow-soft sm:translate-x-6">
                <div class="absolute left-1/2 -translate-x-1/2 top-2 h-5 w-24 bg-slate-900 rounded-b-2xl z-10"></div>
                <div class="rounded-[2.25rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-rose-500 p-5 text-white relative overflow-hidden">
                  <div class="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true"></div>
                  <div class="relative">
                    <div class="flex items-center justify-between text-[10px] opacity-80 pt-5">
                      <span>9:41</span>
                      <span class="flex items-center gap-1">
                        <app-icon name="bell" [size]="10" /> Live
                      </span>
                    </div>

                    <div class="mt-4">
                      <div class="text-[10px] uppercase tracking-wider opacity-80">Your appointment</div>
                      <div class="font-display text-xl font-extrabold leading-tight">Shifa Clinic</div>
                      <div class="text-[11px] opacity-90">Dr. Hasan &middot; Morning shift</div>
                    </div>

                    <div class="mt-5 rounded-2xl bg-white/15 backdrop-blur p-4 text-center ring-1 ring-white/20">
                      <div class="text-[10px] uppercase opacity-80">Your token</div>
                      <div class="font-display text-6xl font-extrabold leading-none">#10</div>
                      <div class="mt-2 text-[10px] opacity-80">Now serving #07 &middot; ~4m wait</div>
                    </div>

                    <div class="mt-4 grid grid-cols-2 gap-2">
                      <button class="rounded-xl bg-white/10 px-3 py-2.5 text-[11px] font-semibold">Reschedule</button>
                      <button class="rounded-xl bg-white text-slate-900 px-3 py-2.5 text-[11px] font-bold">Get directions</button>
                    </div>

                    <div class="mt-4 rounded-xl bg-white/10 p-3 flex items-center gap-2">
                      <span class="grid h-7 w-7 place-items-center rounded-full bg-white/15"><app-icon name="bell" [size]="14" /></span>
                      <div class="text-[10px] leading-tight">
                        <div class="font-semibold">You're 2 patients away</div>
                        <div class="opacity-80">We'll alert you again at your turn.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class MobileComponent {
  protected features: MobileFeature[] = [
    {
      icon: 'queue',
      title: 'Book in seconds',
      body: 'Pick a clinic, doctor, and shift. A token is reserved and synced with reception instantly.',
      tone: 'bg-gradient-to-br from-violet-500 to-fuchsia-700',
    },
    {
      icon: 'bell',
      title: 'Live queue tracking',
      body: 'Watch the queue move in real time and get a push notification when you\'re two away.',
      tone: 'bg-gradient-to-br from-sky-500 to-indigo-700',
    },
    {
      icon: 'prescription',
      title: 'Prescription archive',
      body: 'Every prescription, test report, and visit summary safely backed up and searchable.',
      tone: 'bg-gradient-to-br from-emerald-500 to-teal-700',
    },
    {
      icon: 'card',
      title: 'Pay in-app',
      body: 'Cash on arrival, card, or digital wallet — payments sync straight to the clinic ledger.',
      tone: 'bg-gradient-to-br from-amber-500 to-rose-600',
    },
    {
      icon: 'map-pin',
      title: 'Find clinics near you',
      body: 'Discover partner clinics by speciality, distance, ratings, and average wait time.',
      tone: 'bg-gradient-to-br from-rose-500 to-fuchsia-700',
    },
    {
      icon: 'star',
      title: 'Rate your visit',
      body: 'Leave private feedback for the clinic and the doctor right from your appointment recap.',
      tone: 'bg-gradient-to-br from-fuchsia-500 to-purple-700',
    },
  ];
}
