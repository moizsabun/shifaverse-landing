import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative -mt-6 lg:-mt-10" aria-label="Trusted by healthcare teams">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="rounded-3xl bg-slate-900 text-white shadow-soft overflow-hidden">
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            @for (stat of stats; track stat.label) {
              <div class="p-7 lg:p-8 text-center">
                <div class="text-3xl lg:text-4xl font-display font-extrabold text-white">{{ stat.value }}</div>
                <div class="mt-1 text-sm text-white/70">{{ stat.label }}</div>
              </div>
            }
          </div>

          <div class="border-t border-white/10 px-6 py-6 lg:px-8">
            <p class="text-xs uppercase tracking-[0.18em] text-white/60 text-center">Trusted by clinics, polyclinics & specialty practices</p>
            <div class="mt-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 opacity-80">
              @for (brand of brands; track brand) {
                <span class="font-display font-bold tracking-tight text-white/70 text-lg">{{ brand }}</span>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class StatsComponent {
  protected stats = [
    { value: '120+', label: 'Clinics powered' },
    { value: '1.4M', label: 'Appointments managed' },
    { value: '4.9/5', label: 'Average satisfaction' },
    { value: '99.9%', label: 'Uptime guarantee' },
  ];

  protected brands = ['Shifa Clinic', 'Al-Khidmat Medical', 'CarePoint', 'WellCare', 'MediCore', 'Noor Health'];
}
