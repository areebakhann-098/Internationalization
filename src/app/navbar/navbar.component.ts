import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TranslateModule], // ✅ import TranslateModule here
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  translate: TranslateService = inject(TranslateService);

  translateText(lang: string) {
    this.translate.use(lang);
  }
}
