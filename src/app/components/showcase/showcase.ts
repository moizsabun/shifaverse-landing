import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon';

interface DemoAccount {
  role: string;
  email: string;
  password: string;
  url: string;
  tone: string;
}

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="showcase" class="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="inline-block text-xs font-bold tracking-[0.18em] uppercase text-brand-700">Try it live</span>
          <h2 class="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Sign in with a demo account &mdash;
            <span class="text-gradient">no setup, no signup.</span>
          </h2>
          <p class="mt-5 text-lg text-slate-600">
            We've pre-loaded two example clinics (Shifa and Al-Khidmat) and four roles for you to explore.
            Open the demo, sign in with any of the credentials below, and click around — your changes only affect your browser.
          </p>
        </div>

        <div class="mt-12 grid lg:grid-cols-12 gap-8">
          <!-- Accounts list -->
          <div class="lg:col-span-7">
            <div class="grid sm:grid-cols-2 gap-4">
              @for (acc of demoAccounts; track acc.email) {
                <article class="rounded-2xl bg-white p-5 ring-1 ring-slate-200 shadow-soft hover:ring-brand-300 transition-all">
                  <div class="flex items-start justify-between">
                    <div>
                      <p class="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">{{ acc.role }}</p>
                      <div class="mt-2 flex items-center gap-2">
                        <span class="h-2 w-2 rounded-full" [class]="acc.tone"></span>
                        <span class="text-sm font-semibold text-slate-900 font-mono">{{ acc.email }}</span>
                      </div>
                      <div class="mt-1 text-sm text-slate-600 font-mono">
                        password: <span class="text-slate-900">{{ acc.password }}</span>
                      </div>
                    </div>
                  </div>
                  <a
                    [href]="acc.url"
                    target="_blank"
                    rel="noopener"
                    class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
                  >
                    Open this portal
                    <app-icon name="arrow-right" [size]="14" />
                  </a>
                </article>
              }
            </div>

            <div class="mt-5 rounded-2xl bg-slate-900 text-white p-6 ring-1 ring-slate-200 shadow-soft">
              <div class="flex items-center gap-3">
                <span class="grid h-10 w-10 place-items-center rounded-xl bg-white/10"><app-icon name="tv" [size]="20" /></span>
                <div>
                  <div class="text-[11px] uppercase tracking-[0.18em] text-white/60">Login-free public queue</div>
                  <div class="font-semibold">Open on any waiting-room TV</div>
                </div>
              </div>
              <div class="mt-4 grid sm:grid-cols-2 gap-3 text-sm">
                <a href="https://moizsabun.github.io/ShifaVerse/public/shifa" target="_blank" rel="noopener" class="rounded-lg bg-white/10 px-3 py-2.5 hover:bg-white/15 font-mono flex items-center justify-between">
                  /public/shifa
                  <app-icon name="arrow-right" [size]="14" />
                </a>
                <a href="https://moizsabun.github.io/ShifaVerse/public/alkhidmat" target="_blank" rel="noopener" class="rounded-lg bg-white/10 px-3 py-2.5 hover:bg-white/15 font-mono flex items-center justify-between">
                  /public/alkhidmat
                  <app-icon name="arrow-right" [size]="14" />
                </a>
              </div>
            </div>
          </div>

          <!-- Public queue mock -->
          <div class="lg:col-span-5">
            <div class="rounded-2xl bg-gradient-to-br from-indigo-600 via-fuchsia-600 to-rose-500 text-white p-1 shadow-soft ring-1 ring-slate-200">
              <div class="rounded-[14px] bg-slate-950 p-5 sm:p-6 lg:p-8 relative overflow-hidden">
                <div class="absolute inset-0 bg-grid-dark opacity-30" aria-hidden="true"></div>
                <div class="relative">
                  <div class="flex items-center justify-between gap-3">
                    <div class="min-w-0">
                      <div class="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/60">Now serving</div>
                      <div class="font-display text-5xl sm:text-6xl lg:text-8xl font-extrabold leading-none mt-1">
                        #07
                      </div>
                    </div>
                    <div class="text-right shrink-0">
                      <div class="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-white/60">Est. wait</div>
                      <div class="font-display text-2xl sm:text-3xl font-bold mt-1">4m 12s</div>
                    </div>
                  </div>

                  <div class="mt-8 rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                    <div class="flex items-center justify-between text-xs text-white/60 uppercase tracking-wide">
                      <span>Up next</span>
                      <span>Token</span>
                    </div>
                    <ul class="mt-3 space-y-2 text-sm">
                      <li class="flex items-center justify-between"><span>Aisha K.</span><span class="font-bold">#08</span></li>
                      <li class="flex items-center justify-between"><span>Bilal Ahmed</span><span class="font-bold">#09</span></li>
                      <li class="flex items-center justify-between text-white/70"><span>Reserved 11:30</span><span class="font-bold">#10</span></li>
                      <li class="flex items-center justify-between"><span>Sana Iqbal</span><span class="font-bold">#11</span></li>
                    </ul>
                  </div>

                  <div class="mt-5 flex items-center justify-between text-xs text-white/60">
                    <span>Shifa Clinic &middot; Morning shift</span>
                    <span class="inline-flex items-center gap-1.5">
                      <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Auto-refresh 5s
                    </span>
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
export class ShowcaseComponent {
  protected demoAccounts: DemoAccount[] = [
    {
      role: 'Clinic owner · Shifa',
      email: 'owner@shifa.com',
      password: 'shifa123',
      url: 'https://moizsabun.github.io/ShifaVerse/login',
      tone: 'bg-emerald-400',
    },
    {
      role: 'Doctor · Shifa',
      email: 'doctor@shifa.com',
      password: 'doc123',
      url: 'https://moizsabun.github.io/ShifaVerse/login',
      tone: 'bg-sky-400',
    },
    {
      role: 'Compounder · Shifa',
      email: 'compounder@shifa.com',
      password: 'comp123',
      url: 'https://moizsabun.github.io/ShifaVerse/login',
      tone: 'bg-indigo-400',
    },
    {
      role: 'Patient · mobile app',
      email: 'patient@shifa.com',
      password: 'patient123',
      url: 'https://moizsabun.github.io/ShifaVerse/login',
      tone: 'bg-violet-400',
    },
  ];
}
