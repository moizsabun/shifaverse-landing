import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { StatsComponent } from './components/stats/stats';
import { FeaturesComponent } from './components/features/features';
import { WorkflowComponent } from './components/workflow/workflow';
import { MobileComponent } from './components/mobile/mobile';
import { RolesComponent } from './components/roles/roles';
import { ShowcaseComponent } from './components/showcase/showcase';
import { PricingComponent } from './components/pricing/pricing';
import { FaqComponent } from './components/faq/faq';
import { CtaComponent } from './components/cta/cta';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NavbarComponent,
    HeroComponent,
    StatsComponent,
    FeaturesComponent,
    WorkflowComponent,
    MobileComponent,
    RolesComponent,
    ShowcaseComponent,
    PricingComponent,
    FaqComponent,
    CtaComponent,
    FooterComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
