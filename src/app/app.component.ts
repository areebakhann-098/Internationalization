import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  translate: TranslateService = inject(TranslateService);

  // 📝 Blog posts array with translation keys
  posts = [
    { title: 'POST_1_TITLE', content: 'POST_1_CONTENT' },
    { title: 'POST_2_TITLE', content: 'POST_2_CONTENT' },
    { title: 'POST_3_TITLE', content: 'POST_3_CONTENT' },
  ];

  constructor() {
    this.translate.addLangs(['en', 'ur']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang?.match(/en|ur/) ? browserLang : 'en');
  }

  translateText(lang: string) {
    this.translate.use(lang);
  }
}
