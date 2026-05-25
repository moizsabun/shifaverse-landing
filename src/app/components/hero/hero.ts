import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="top" class="relative overflow-hidden pt-24 sm:pt-28 lg:pt-36 pb-16 sm:pb-20 lg:pb-28 hero-radial">
      <div class="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_75%)]" aria-hidden="true"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <!-- Copy -->
          <div class="lg:col-span-6 fade-up min-w-0 w-full">
            <div class="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-brand-700 max-w-full">
              <span class="relative flex h-2 w-2 shrink-0">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-400 opacity-75"></span>
                <span class="relative inline-flex h-2 w-2 rounded-full bg-brand-600"></span>
              </span>
              <span class="truncate">Live now &mdash; multi-tenant SaaS for clinics</span>
            </div>

            <h1
              class="mt-5 font-display font-extrabold text-slate-900 leading-[1.15] text-balance max-w-full"
              style="font-size: clamp(1.5rem, 4.5vw + 0.5rem, 3.75rem); line-height: 1.1;"
            >
              The complete operating system for
              <span class="text-gradient">modern clinics</span>.
            </h1>

            <p class="mt-5 text-base sm:text-lg leading-relaxed text-slate-600 max-w-xl">
              ShifaVerse replaces paper registers, scattered spreadsheets, and clunky software with one elegant platform &mdash;
              smart token queues, dynamic shift workflows, digital prescriptions, medical test ordering, automated billing,
              and a free <a href="#mobile" class="font-semibold text-violet-700 hover:text-violet-900 underline decoration-violet-300 underline-offset-4">native mobile app for patients</a> &mdash; all under one secure multi-tenant roof.
            </p>

            <div class="mt-7 sm:mt-8 flex flex-wrap items-center gap-3">
              <a
                href="https://moizsabun.github.io/ShifaVerse/"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-slate-800 transition-colors w-full sm:w-auto"
              >
                Try the live demo
                <app-icon name="arrow-right" [size]="16" />
              </a>
              <a
                href="#showcase"
                class="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50 transition-colors w-full sm:w-auto"
              >
                <span class="grid h-7 w-7 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <app-icon name="play" [size]="12" />
                </span>
                Watch the workflow
              </a>
            </div>

            <ul class="mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <li class="inline-flex items-center gap-1.5"><app-icon name="check" [size]="16" cssClass="text-brand-600" /> No credit card required</li>
              <li class="inline-flex items-center gap-1.5"><app-icon name="check" [size]="16" cssClass="text-brand-600" /> Setup in under 5 minutes</li>
              <li class="inline-flex items-center gap-1.5"><app-icon name="check" [size]="16" cssClass="text-brand-600" /> Role-based security</li>
            </ul>
          </div>

          <!-- Visual: mocked dashboard -->
          <div class="lg:col-span-6 fade-up [animation-delay:120ms] min-w-0 w-full">
            <div class="relative">
              <!-- Glow -->
              <div class="absolute -inset-6 bg-gradient-to-br from-brand-400/30 via-sky-400/20 to-indigo-500/20 blur-3xl rounded-[3rem]" aria-hidden="true"></div>

              <!-- Browser frame -->
              <div class="relative rounded-2xl bg-white ring-1 ring-slate-200 shadow-soft overflow-hidden">
                <div class="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-4 py-2 sm:py-3 border-b border-slate-100 bg-slate-50 min-w-0">
                  <span class="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-rose-400 shrink-0"></span>
                  <span class="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-amber-400 shrink-0"></span>
                  <span class="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-400 shrink-0"></span>
                  <span
                    class="ml-1.5 sm:ml-3 text-slate-500 font-mono truncate min-w-0 flex-1 leading-none"
                    style="font-size: clamp(0.55rem, 2.2vw, 0.75rem);"
                  >app.shifaverse.health</span>
                </div>

                <div class="p-4 sm:p-5 grid gap-3 sm:gap-4">
                  <!-- Top KPI row -->
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                    <div class="rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white p-3 sm:p-4 min-w-0">
                      <div class="text-[10px] sm:text-[11px] uppercase tracking-wide opacity-80 truncate">Now serving</div>
                      <div class="mt-1 text-2xl sm:text-3xl font-extrabold leading-none">#07</div>
                      <div class="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] opacity-80 truncate">Wait • 4m 12s</div>
                    </div>
                    <div class="rounded-xl bg-slate-50 ring-1 ring-slate-200 p-3 sm:p-4 min-w-0">
                      <div class="text-[10px] sm:text-[11px] uppercase tracking-wide text-slate-500 truncate">In queue</div>
                      <div class="mt-1 text-2xl sm:text-3xl font-extrabold leading-none text-slate-900">14</div>
                      <div class="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] text-slate-500 truncate">Next: Aisha K.</div>
                    </div>
                    <div class="col-span-2 sm:col-span-1 rounded-xl bg-slate-50 ring-1 ring-slate-200 p-3 sm:p-4 min-w-0">
                      <div class="text-[10px] sm:text-[11px] uppercase tracking-wide text-slate-500 truncate">Today's revenue</div>
                      <div class="mt-1 text-2xl sm:text-3xl font-extrabold leading-none text-slate-900">$1,284</div>
                      <div class="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] text-emerald-600 font-semibold truncate">+18% vs avg</div>
                    </div>
                  </div>

                  <!-- Token strip -->
                  <div class="rounded-xl bg-slate-900 text-white p-3 sm:p-4">
                    <div class="flex items-center justify-between gap-2">
                      <div class="text-[10px] sm:text-[11px] uppercase tracking-wide opacity-70">Live queue</div>
                      <div class="text-[10px] sm:text-[11px] opacity-70 truncate">Morning • Dr. Hasan</div>
                    </div>
                    <div class="mt-3 flex items-center gap-2 overflow-x-auto scrollbar-hide -mx-3 px-3 sm:mx-0 sm:px-0">
                      @for (t of tokens; track t) {
                        <span
                          class="grid place-items-center h-8 w-8 sm:h-9 sm:w-9 shrink-0 rounded-lg text-sm font-bold"
                          [class.bg-brand-500]="t === 7"
                          [class.text-white]="t === 7"
                          [class.bg-white/10]="t !== 7"
                          [class.text-white]="t !== 7"
                        >{{ t }}</span>
                      }
                    </div>
                  </div>

                  <!-- Mini list -->
                  <div class="rounded-xl ring-1 ring-slate-200">
                    <div class="flex items-center justify-between gap-2 px-3 sm:px-4 py-2.5 sm:py-3 border-b border-slate-100">
                      <div class="text-xs sm:text-sm font-semibold text-slate-900 truncate min-w-0">Recent prescriptions</div>
                      <span class="text-[10px] sm:text-[11px] font-medium text-brand-700 bg-brand-50 px-2 py-0.5 rounded-full shrink-0">Auto-printed</span>
                    </div>
                    <ul class="divide-y divide-slate-100 text-sm">
                      @for (rx of recentRx; track rx.name) {
                        <li class="px-3 sm:px-4 py-2 sm:py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-2">
                          <span class="text-xs sm:text-sm text-slate-700 truncate">{{ rx.name }}</span>
                          <span class="text-[11px] sm:text-xs text-slate-500 truncate">{{ rx.detail }}</span>
                        </li>
                      }
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Floating chip -->
              <div class="hidden md:flex absolute -left-4 lg:-left-6 bottom-10 items-center gap-2 rounded-2xl bg-white px-3 lg:px-4 py-2.5 lg:py-3 ring-1 ring-slate-200 shadow-soft">
                <span class="grid h-8 w-8 lg:h-9 lg:w-9 place-items-center rounded-xl bg-emerald-100 text-emerald-700"><app-icon name="invoice" [size]="18" /></span>
                <div>
                  <div class="text-[11px] lg:text-xs text-slate-500">Shift closed</div>
                  <div class="text-xs lg:text-sm font-semibold text-slate-900">Invoice #2104 finalized</div>
                </div>
              </div>

              <div class="hidden md:flex absolute -right-3 lg:-right-4 -top-3 lg:-top-4 items-center gap-2 rounded-2xl bg-white px-3 lg:px-4 py-2.5 lg:py-3 ring-1 ring-slate-200 shadow-soft">
                <span class="grid h-8 w-8 lg:h-9 lg:w-9 place-items-center rounded-xl bg-sky-100 text-sky-700"><app-icon name="tv" [size]="18" /></span>
                <div>
                  <div class="text-[11px] lg:text-xs text-slate-500">Waiting room TV</div>
                  <div class="text-xs lg:text-sm font-semibold text-slate-900">Now serving #07</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  protected tokens = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  protected recentRx = [
    { name: 'Ayesha Malik · #05', detail: 'Amoxicillin · 500mg' },
    { name: 'Bilal Ahmed · #06', detail: 'CBC + Urine Test' },
    { name: 'Sana Iqbal · #04', detail: 'Paracetamol · 650mg' },
  ];
}
