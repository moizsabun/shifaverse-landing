import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon';

interface Step {
  num: string;
  title: string;
  body: string;
  icon: string;
}

@Component({
  selector: 'app-workflow',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="workflow" class="relative py-20 sm:py-24 lg:py-32 bg-slate-50 overflow-hidden">
      <div class="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]" aria-hidden="true"></div>

      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="inline-block text-xs font-bold tracking-[0.18em] uppercase text-brand-700">How it works</span>
          <h2 class="mt-3 font-display text-[1.85rem] leading-tight sm:text-4xl lg:text-5xl font-extrabold text-slate-900">
            From patient walk-in to closed shift &mdash;
            <span class="text-gradient">in one continuous flow.</span>
          </h2>
          <p class="mt-5 text-lg text-slate-600">
            No context switching, no double entry, no exported spreadsheets. ShifaVerse moves a patient cleanly through every stage of care.
          </p>
        </div>

        <ol class="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          @for (step of steps; track step.num; let i = $index) {
            <li class="relative rounded-2xl bg-white p-7 ring-1 ring-slate-200 shadow-soft">
              <div class="flex items-center justify-between">
                <span class="font-display text-5xl font-extrabold text-slate-200 leading-none">{{ step.num }}</span>
                <span class="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100">
                  <app-icon [name]="step.icon" [size]="22" />
                </span>
              </div>
              <h3 class="mt-5 font-display text-lg font-bold text-slate-900">{{ step.title }}</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ step.body }}</p>

              @if (i < steps.length - 1) {
                <span class="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 h-6 w-6 items-center justify-center rounded-full bg-white text-brand-700 ring-1 ring-slate-200 shadow-soft z-10">
                  <app-icon name="arrow-right" [size]="14" />
                </span>
              }
            </li>
          }
        </ol>

        <div class="mt-14 grid lg:grid-cols-2 gap-6">
          <div class="rounded-2xl bg-slate-900 text-white p-8 lg:p-10 overflow-hidden relative">
            <div class="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-brand-500/30 blur-3xl" aria-hidden="true"></div>
            <div class="relative">
              <h3 class="font-display text-xl lg:text-2xl font-bold">Smart token sequencing in plain English</h3>
              <p class="mt-3 text-sm text-white/70 leading-relaxed">
                A patient calls at 11:00 AM and wants the 11:30 slot. Reception punches in token <strong class="text-white">#10</strong>. Walk-ins right after get 5, 6, 7, 8, 9 &mdash; then ShifaVerse <em>skips</em> 10 (it's reserved) and continues 11, 12, 13&hellip;
              </p>
              <p class="mt-3 text-sm text-white/70 leading-relaxed">
                Compounders never juggle pen-and-paper queues again. The system finds the smallest unused integer, every time.
              </p>
            </div>
          </div>

          <div class="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 text-white p-8 lg:p-10 overflow-hidden relative">
            <div class="absolute -left-12 -bottom-16 h-48 w-48 rounded-full bg-white/20 blur-3xl" aria-hidden="true"></div>
            <div class="relative">
              <h3 class="font-display text-xl lg:text-2xl font-bold">Close the shift, the invoice is already there</h3>
              <p class="mt-3 text-sm text-white/90 leading-relaxed">
                The instant your compounder closes a shift, ShifaVerse counts every non-cancelled patient and finalizes the bill &mdash;
                per-shift, daily, weekly, or monthly. Owners see live amounts before they even confirm the close.
              </p>
              <p class="mt-3 text-sm text-white/90 leading-relaxed">
                No reconciliation, no chasing receipts, no surprises at month-end.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class WorkflowComponent {
  protected steps: Step[] = [
    {
      num: '01',
      title: 'Reception books patient',
      body: 'Compounder enters the patient and gets an auto-assigned token, or reserves a specific number for an advance-time slot.',
      icon: 'queue',
    },
    {
      num: '02',
      title: 'Doctor consults',
      body: 'Doctor opens the next token, reviews history, picks medicines and dose, adds tests from the catalog, and saves the visit.',
      icon: 'stethoscope',
    },
    {
      num: '03',
      title: 'Prescription printed',
      body: 'Two slips render side-by-side: a clean patient copy and an internal copy with private notes. Both reprintable forever.',
      icon: 'prescription',
    },
    {
      num: '04',
      title: 'Shift closes, invoice issues',
      body: 'Compounder closes the shift. ShifaVerse counts all non-cancelled patients and posts the invoice immediately.',
      icon: 'invoice',
    },
  ];
}
