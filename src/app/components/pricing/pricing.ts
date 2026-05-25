import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IconComponent } from '../icon/icon';

interface Plan {
  name: string;
  price: string;
  unit: string;
  blurb: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="pricing" class="py-24 lg:py-32 bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl">
          <span class="inline-block text-xs font-bold tracking-[0.18em] uppercase text-brand-700">Pricing</span>
          <h2 class="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Simple, transparent, per-visit pricing.
          </h2>
          <p class="mt-5 text-lg text-slate-600">
            Start free. Pay only when you grow. No per-seat surprises, no annual lock-in, no hidden setup fees.
          </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-3 items-stretch">
          @for (plan of plans; track plan.name) {
            <article
              class="relative rounded-2xl p-7 lg:p-8 ring-1 transition-all shadow-soft flex flex-col"
              [class.bg-slate-900]="plan.highlight"
              [class.text-white]="plan.highlight"
              [class.ring-slate-900]="plan.highlight"
              [class.lg:-translate-y-2]="plan.highlight"
              [class.bg-white]="!plan.highlight"
              [class.ring-slate-200]="!plan.highlight"
              [class.hover:ring-brand-300]="!plan.highlight"
            >
              @if (plan.highlight) {
                <span class="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-brand-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-soft">
                  <app-icon name="sparkles" [size]="12" /> Most popular
                </span>
              }

              <h3 class="font-display text-lg font-bold" [class.text-white]="plan.highlight" [class.text-slate-900]="!plan.highlight">{{ plan.name }}</h3>
              <p class="mt-1 text-sm" [class.text-white/70]="plan.highlight" [class.text-slate-600]="!plan.highlight">{{ plan.blurb }}</p>

              <div class="mt-6 flex items-baseline gap-1">
                <span class="font-display text-5xl font-extrabold" [class.text-white]="plan.highlight" [class.text-slate-900]="!plan.highlight">{{ plan.price }}</span>
                <span class="text-sm" [class.text-white/70]="plan.highlight" [class.text-slate-500]="!plan.highlight">{{ plan.unit }}</span>
              </div>

              <ul class="mt-7 space-y-3 text-sm flex-1">
                @for (f of plan.features; track f) {
                  <li class="flex items-start gap-2.5">
                    <span
                      class="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                      [class.bg-brand-500]="plan.highlight"
                      [class.text-white]="plan.highlight"
                      [class.bg-brand-100]="!plan.highlight"
                      [class.text-brand-700]="!plan.highlight"
                    >
                      <app-icon name="check" [size]="14" />
                    </span>
                    <span [class.text-white/90]="plan.highlight" [class.text-slate-700]="!plan.highlight">{{ f }}</span>
                  </li>
                }
              </ul>

              <a
                href="https://moizsabun.github.io/ShifaVerse/"
                target="_blank"
                rel="noopener"
                class="mt-8 inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold transition-colors"
                [class.bg-brand-500]="plan.highlight"
                [class.hover:bg-brand-400]="plan.highlight"
                [class.text-white]="plan.highlight"
                [class.bg-slate-900]="!plan.highlight"
                [class.hover:bg-slate-800]="!plan.highlight"
                [class.text-white]="!plan.highlight"
              >
                {{ plan.cta }}
                <app-icon name="arrow-right" [size]="14" />
              </a>

              <a
                [href]="whatsappUrl(plan)"
                target="_blank"
                rel="noopener"
                [attr.aria-label]="'Chat on WhatsApp about the ' + plan.name + ' plan'"
                class="mt-3 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ring-1"
                [class.bg-transparent]="plan.highlight"
                [class.ring-white/30]="plan.highlight"
                [class.text-white]="plan.highlight"
                [class.hover:bg-white/10]="plan.highlight"
                [class.bg-emerald-50]="!plan.highlight"
                [class.ring-emerald-200]="!plan.highlight"
                [class.text-emerald-700]="!plan.highlight"
                [class.hover:bg-emerald-100]="!plan.highlight"
              >
                <app-icon name="whatsapp" [size]="16" />
                Chat on WhatsApp
              </a>
            </article>
          }
        </div>

        <div class="mt-10 rounded-2xl bg-slate-50 p-6 lg:p-7 ring-1 ring-slate-200 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <span class="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white text-brand-700 ring-1 ring-slate-200">
            <app-icon name="shield" [size]="22" />
          </span>
          <div class="flex-1">
            <h3 class="font-display text-base font-bold text-slate-900">Two-tier fee model, configurable per clinic</h3>
            <p class="text-sm text-slate-600 mt-1">
              Set the patient consultation fee (what shows on the printed slip) independently of the platform per-visit charge.
              Owners always see exactly what they earn versus what they owe.
            </p>
          </div>
          <a href="#faq" class="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800">
            How does billing work?
            <app-icon name="arrow-right" [size]="14" />
          </a>
        </div>
      </div>
    </section>
  `,
})
export class PricingComponent {
  private readonly whatsappNumber = '923332491838';

  protected whatsappUrl(plan: Plan): string {
    const message = `Hi ShifaVerse team, I'm interested in the ${plan.name} plan. Please share more details.`;
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  protected plans: Plan[] = [
    {
      name: 'Starter',
      price: 'PKR 5000',
      unit: '/ Month',
      blurb: 'Perfect for a single doctor running a solo practice.',
      features: [
        '1 clinic, up to 20 appointments / month',
        'Smart token queue & dynamic shifts',
        'Digital prescriptions with patient & internal copies',
        'Public waiting-room display',
        'Community email support',
      ],
      cta: 'Get started free',
    },
    {
      name: 'Practice',
      price: 'From PKR 100',
      unit: '/ visit',
      blurb: 'For growing clinics that want everything, billed by usage.',
      features: [
        'Unlimited, doctors & compounders',
        '80+ medical tests catalog & test ordering',
        'Automated shift, daily, weekly or monthly billing',
        'Cash, bank transfer & cheque tracking',
        'Reprint & full visit history',
        'Priority email support',
      ],
      cta: 'Start 14-day trial',
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      unit: '/ per quote',
      blurb: 'Hospital groups, ministry contracts, and white-label deployments.',
      features: [
        'White-label patient mobile app on iOS & Android',
        'Multi-region tenants & custom domains',
        'SSO / SAML & audit logging',
        'White-label branding on prescription slips',
        'Dedicated success manager & SLA',
        'Custom integrations (HL7, lab APIs, payment gateways)',
      ],
      cta: 'Talk to sales',
    },
  ];
}
