import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { IconComponent } from '../icon/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
      [class.glass]="scrolled()"
      [class.shadow-soft]="scrolled()"
      [class.bg-transparent]="!scrolled()"
    >
      <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16 lg:h-20" aria-label="Primary">
        <a href="#top" class="flex items-center gap-2.5 group">
          <span class="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft ring-1 ring-brand-700/20">
            <app-icon name="logo" [size]="22" />
          </span>
          <span class="font-display text-xl font-extrabold tracking-tight text-slate-900">Shifa<span class="text-brand-600">Verse</span></span>
        </a>

        <ul class="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
          <li><a class="hover:text-brand-700 transition-colors" href="#features">Features</a></li>
          <li><a class="hover:text-brand-700 transition-colors" href="#workflow">How it works</a></li>
          <li><a class="hover:text-brand-700 transition-colors inline-flex items-center gap-1" href="#mobile">
            Mobile app
            <span class="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-violet-100 text-violet-700">New</span>
          </a></li>
          <li><a class="hover:text-brand-700 transition-colors" href="#roles">For your team</a></li>
          <li><a class="hover:text-brand-700 transition-colors" href="#pricing">Pricing</a></li>
          <li><a class="hover:text-brand-700 transition-colors" href="#faq">FAQ</a></li>
        </ul>

        <div class="hidden lg:flex items-center gap-3">
          <a
            href="https://moizsabun.github.io/ShifaVerse/"
            target="_blank"
            rel="noopener"
            class="text-sm font-semibold text-slate-700 hover:text-brand-700 transition-colors"
          >Sign in</a>
          <a
            href="https://moizsabun.github.io/ShifaVerse/"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800 transition-colors shadow-soft"
          >
            Start free trial
            <app-icon name="arrow-right" [size]="16" />
          </a>
        </div>

        <button
          type="button"
          class="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
          (click)="toggleMobile()"
          [attr.aria-expanded]="mobileOpen()"
          aria-label="Toggle menu"
        >
          <app-icon [name]="mobileOpen() ? 'close' : 'menu'" [size]="22" />
        </button>
      </nav>

      @if (mobileOpen()) {
        <div class="lg:hidden border-t border-slate-200 bg-white">
          <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8 grid gap-2">
            <a class="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" href="#features" (click)="close()">Features</a>
            <a class="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" href="#workflow" (click)="close()">How it works</a>
            <a class="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50 inline-flex items-center justify-between" href="#mobile" (click)="close()">
              Mobile app
              <span class="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-violet-100 text-violet-700">New</span>
            </a>
            <a class="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" href="#roles" (click)="close()">For your team</a>
            <a class="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" href="#showcase" (click)="close()">Live demo</a>
            <a class="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" href="#pricing" (click)="close()">Pricing</a>
            <a class="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-50" href="#faq" (click)="close()">FAQ</a>
            <a
              href="https://moizsabun.github.io/ShifaVerse/"
              target="_blank"
              rel="noopener"
              class="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white"
            >
              Start free trial
              <app-icon name="arrow-right" [size]="16" />
            </a>
          </div>
        </div>
      }
    </header>
  `,
})
export class NavbarComponent {
  scrolled = signal(false);
  mobileOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() {
    this.scrolled.set(window.scrollY > 8);
  }

  toggleMobile() {
    this.mobileOpen.update((v) => !v);
  }

  close() {
    this.mobileOpen.set(false);
  }
}
