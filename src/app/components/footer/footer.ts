import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-slate-950 text-slate-300">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div class="grid gap-10 lg:grid-cols-12">
          <div class="lg:col-span-5">
            <a href="#top" class="inline-flex items-center gap-2.5">
              <span class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <app-icon name="logo" [size]="22" />
              </span>
              <span class="font-display text-xl font-extrabold tracking-tight text-white">Shifa<span class="text-brand-400">Verse</span></span>
            </a>
            <p class="mt-4 text-sm leading-relaxed text-slate-400 max-w-md">
              The modern operating system for outpatient clinics &mdash; built for clinicians, designed for compounders,
              loved by owners, and carried in every patient's pocket.
            </p>

            <form class="mt-6 flex max-w-md items-center gap-2" (submit)="$event.preventDefault()">
              <label for="newsletter" class="sr-only">Email address</label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="you@clinic.com"
                class="flex-1 rounded-full bg-white/5 ring-1 ring-white/10 placeholder:text-slate-500 text-white px-4 py-2.5 text-sm focus:outline-none focus:ring-brand-500"
              />
              <button class="rounded-full bg-brand-500 hover:bg-brand-400 px-4 py-2.5 text-sm font-semibold text-white transition-colors">
                Subscribe
              </button>
            </form>
            <p class="mt-2 text-xs text-slate-500">Monthly product updates. Zero spam.</p>
          </div>

          <div class="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 class="text-xs font-bold uppercase tracking-[0.18em] text-white">Product</h3>
              <ul class="mt-4 space-y-2 text-sm">
                <li><a href="#features" class="text-slate-400 hover:text-white transition-colors">Features</a></li>
                <li><a href="#workflow" class="text-slate-400 hover:text-white transition-colors">Workflow</a></li>
                <li><a href="#roles" class="text-slate-400 hover:text-white transition-colors">For your team</a></li>
                <li><a href="#pricing" class="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#showcase" class="text-slate-400 hover:text-white transition-colors">Live demo</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-[0.18em] text-white">Resources</h3>
              <ul class="mt-4 space-y-2 text-sm">
                <li><a href="#faq" class="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="https://moizsabun.github.io/ShifaVerse/" target="_blank" rel="noopener" class="text-slate-400 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="https://moizsabun.github.io/ShifaVerse/" target="_blank" rel="noopener" class="text-slate-400 hover:text-white transition-colors">Changelog</a></li>
                <li><a href="mailto:support@shifaverse.health" class="text-slate-400 hover:text-white transition-colors">Support</a></li>
                <li><a href="https://moizsabun.github.io/ShifaVerse/" target="_blank" rel="noopener" class="text-slate-400 hover:text-white transition-colors">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 class="text-xs font-bold uppercase tracking-[0.18em] text-white">Company</h3>
              <ul class="mt-4 space-y-2 text-sm">
                <li><a href="#" class="text-slate-400 hover:text-white transition-colors">About</a></li>
                <li><a href="mailto:hello@shifaverse.health" class="text-slate-400 hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" class="text-slate-400 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" class="text-slate-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" class="text-slate-400 hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p class="text-xs text-slate-500">&copy; {{ year }} ShifaVerse. All rights reserved.</p>
          <div class="flex items-center gap-3 text-slate-500">
            <a href="https://moizsabun.github.io/ShifaVerse/" target="_blank" rel="noopener" aria-label="GitHub" class="hover:text-white transition-colors">
              <app-icon name="github" [size]="18" />
            </a>
            <a href="mailto:hello@shifaverse.health" aria-label="Email" class="hover:text-white transition-colors">
              <app-icon name="mail" [size]="18" />
            </a>
            <a href="https://moizsabun.github.io/ShifaVerse/" target="_blank" rel="noopener" aria-label="Live app" class="hover:text-white transition-colors">
              <app-icon name="globe" [size]="18" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected year = new Date().getFullYear();
}
