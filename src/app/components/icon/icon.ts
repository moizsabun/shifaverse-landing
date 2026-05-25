import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <svg
      [attr.width]="size"
      [attr.height]="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
      [class]="cssClass"
    >
      @switch (name) {
        @case ('logo') {
          <path d="M12 2.5c5.25 0 9.5 4.25 9.5 9.5s-4.25 9.5-9.5 9.5S2.5 17.25 2.5 12 6.75 2.5 12 2.5Z" />
          <path d="M7.5 12h2L11 9l2 6 1.5-3H17" />
        }
        @case ('stethoscope') {
          <path d="M6 3v6a4 4 0 0 0 8 0V3" />
          <path d="M10 13v3a5 5 0 0 0 10 0v-1" />
          <circle cx="20" cy="13" r="2" />
        }
        @case ('queue') {
          <rect x="3" y="4" width="18" height="4" rx="1" />
          <rect x="3" y="10" width="18" height="4" rx="1" />
          <rect x="3" y="16" width="18" height="4" rx="1" />
          <path d="M7 6h.01M7 12h.01M7 18h.01" />
        }
        @case ('prescription') {
          <path d="M6 3h7a4 4 0 0 1 0 8H6V3Z" />
          <path d="M6 11l8 10" />
          <path d="M13 15l4 6" />
        }
        @case ('shield') {
          <path d="M12 2 4 5v6c0 5 3.5 9 8 11 4.5-2 8-6 8-11V5l-8-3Z" />
          <path d="m9 12 2 2 4-4" />
        }
        @case ('building') {
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 21V9h6v12M3 9h18" />
        }
        @case ('invoice') {
          <path d="M6 2h9l5 5v15H6z" />
          <path d="M14 2v6h6" />
          <path d="M9 13h7M9 17h5" />
        }
        @case ('clock') {
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        }
        @case ('tv') {
          <rect x="2" y="4" width="20" height="13" rx="2" />
          <path d="M8 21h8M12 17v4" />
        }
        @case ('users') {
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M14.5 20a5 5 0 0 1 7-4.5" />
        }
        @case ('spark') {
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
        }
        @case ('check') { <path d="m5 12 5 5L20 7" /> }
        @case ('arrow-right') { <path d="M5 12h14M13 6l6 6-6 6" /> }
        @case ('play') { <path d="M7 4v16l13-8z" fill="currentColor" stroke="none" /> }
        @case ('chevron-down') { <path d="m6 9 6 6 6-6" /> }
        @case ('menu') { <path d="M4 6h16M4 12h16M4 18h16" /> }
        @case ('close') { <path d="M6 6l12 12M18 6 6 18" /> }
        @case ('lock') {
          <rect x="4" y="11" width="16" height="10" rx="2" />
          <path d="M8 11V8a4 4 0 0 1 8 0v3" />
        }
        @case ('globe') {
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        }
        @case ('bolt') { <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" /> }
        @case ('flask') {
          <path d="M9 3h6v5l5 11a2 2 0 0 1-1.8 3H5.8A2 2 0 0 1 4 19l5-11V3Z" />
          <path d="M7 14h10" />
        }
        @case ('pulse') { <path d="M3 12h4l2-6 4 12 2-6h6" /> }
        @case ('wallet') {
          <rect x="3" y="6" width="18" height="14" rx="2" />
          <path d="M3 10h18M16 15h2" />
        }
        @case ('sparkles') {
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <path d="m6 6 2 2M16 16l2 2M6 18l2-2M16 8l2-2" />
        }
        @case ('github') {
          <path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 0 0-.8-2.2c2.8-.3 5.7-1.4 5.7-6a4.7 4.7 0 0 0-1.3-3.2 4.4 4.4 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.6 1.6 5.5 1.9 5.5 1.9a4.4 4.4 0 0 0-.1 3.2A4.7 4.7 0 0 0 4.1 8.3c0 4.5 2.9 5.7 5.7 6a3 3 0 0 0-.8 2.2V21" />
        }
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        }
        @case ('phone') {
          <rect x="6" y="2" width="12" height="20" rx="3" />
          <path d="M11 18h2" />
        }
        @case ('bell') {
          <path d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" />
          <path d="M10 21a2 2 0 0 0 4 0" />
        }
        @case ('map-pin') {
          <path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
          <circle cx="12" cy="10" r="2.5" />
        }
        @case ('card') {
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M3 10h18M7 16h3" />
        }
        @case ('star') {
          <path d="m12 3 2.6 5.7L21 9.3l-4.7 4.3 1.3 6.2L12 16.9 6.4 19.8l1.3-6.2L3 9.3l6.4-.6L12 3Z" />
        }
        @case ('apple') {
          <path d="M16.5 12.5c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.8-3.5.8-.7 0-1.9-.8-3.1-.8-1.6 0-3.1 1-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.7 2.5 3 2.4 1.2-.1 1.6-.8 3-.8s1.8.8 3 .8c1.3 0 2.1-1.2 2.9-2.4.9-1.3 1.3-2.7 1.3-2.7-.1 0-2.5-1-2.5-3Z" />
          <path d="M14 5.5c.6-.8 1.1-1.9 1-3-1 .1-2.1.7-2.8 1.5-.6.7-1.1 1.8-1 2.9 1.1.1 2.2-.6 2.8-1.4Z" />
        }
        @case ('android') {
          <path d="M5 11a2 2 0 0 1 4 0v6a2 2 0 0 1-4 0v-6Z" />
          <path d="M15 11a2 2 0 0 1 4 0v6a2 2 0 0 1-4 0v-6Z" />
          <path d="M7 9a5 5 0 0 1 10 0v8H7V9Z" />
          <path d="M9 6.5 8 5M15 6.5 16 5M10 9h.01M14 9h.01" />
          <path d="M9 19v2M15 19v2" />
        }
        @case ('whatsapp') {
          <path d="M20.5 3.5A10 10 0 0 0 3.6 16.7L2.5 21.5l4.9-1.1A10 10 0 1 0 20.5 3.5Z" />
          <path d="M8.5 8.5c.3-.4.6-.5 1-.5h.5c.3 0 .5.1.7.5l.7 1.7c.2.4.1.6-.1.9l-.5.6c-.2.2-.2.4 0 .7a7 7 0 0 0 3.3 3.3c.3.2.5.2.7 0l.6-.5c.3-.2.5-.3.9-.1l1.7.7c.4.2.5.4.5.7v.5c0 .4-.1.7-.5 1a3 3 0 0 1-2.1.8c-2.7 0-7.8-5.1-7.8-7.8 0-.7.3-1.5.8-2.1Z" />
        }
        @default { <circle cx="12" cy="12" r="9" /> }
      }
    </svg>
  `,
})
export class IconComponent {
  @Input() name = 'logo';
  @Input() size: number | string = 20;
  @Input() cssClass = '';
}
