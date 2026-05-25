import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="py-16 sm:py-20 lg:py-28 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-950 text-white p-7 sm:p-10 lg:p-16 shadow-soft">
          <!-- Decorative gradients -->
          <div class="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true"></div>
          <div class="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" aria-hidden="true"></div>
          <div class="absolute inset-0 bg-grid-dark opacity-40" aria-hidden="true"></div>

          <div class="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <span class="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 ring-1 ring-white/20">
                <app-icon name="bolt" [size]="14" /> Ready in 5 minutes
              </span>
              <h2 class="mt-4 font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl font-extrabold">
                Bring your clinic into the 21st century.
              </h2>
              <p class="mt-4 text-lg text-white/80 max-w-xl">
                Join the clinics already running on ShifaVerse. No installs, no servers, no spreadsheets &mdash;
                just open the browser and start serving patients.
              </p>

              <div class="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="https://moizsabun.github.io/ShifaVerse/"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-400 transition-colors shadow-soft"
                >
                  Launch live demo
                  <app-icon name="arrow-right" [size]="16" />
                </a>
                <a
                  href="mailto:hello@shifaverse.health"
                  class="inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/15 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors"
                >
                  <app-icon name="mail" [size]="16" />
                  Talk to our team
                </a>
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-4">
              <div class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <span class="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500/20 text-emerald-300"><app-icon name="check" [size]="20" /></span>
                <div class="mt-4 text-sm font-semibold">No credit card</div>
                <div class="mt-1 text-xs text-white/60">Explore the full platform with seed data, free forever for one clinic.</div>
              </div>
              <div class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <span class="grid h-10 w-10 place-items-center rounded-xl bg-sky-500/20 text-sky-300"><app-icon name="lock" [size]="20" /></span>
                <div class="mt-4 text-sm font-semibold">Private by default</div>
                <div class="mt-1 text-xs text-white/60">Tenant-isolated data with role-based guards on every route.</div>
              </div>
              <div class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <span class="grid h-10 w-10 place-items-center rounded-xl bg-fuchsia-500/20 text-fuchsia-300"><app-icon name="globe" [size]="20" /></span>
                <div class="mt-4 text-sm font-semibold">Anywhere, any device</div>
                <div class="mt-1 text-xs text-white/60">Runs in the browser. Reception desktop, doctor laptop, lobby TV.</div>
              </div>
              <div class="rounded-2xl bg-white/5 ring-1 ring-white/10 p-5">
                <span class="grid h-10 w-10 place-items-center rounded-xl bg-amber-500/20 text-amber-300"><app-icon name="pulse" [size]="20" /></span>
                <div class="mt-4 text-sm font-semibold">Built for healthcare</div>
                <div class="mt-1 text-xs text-white/60">Workflows shaped by working clinicians, not generic CRM templates.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaComponent {}
