import { Component, inject, Inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavbarComponent } from './navbar/navbar.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  translate: TranslateService = inject(TranslateService);
  document = inject(DOCUMENT);

  posts = [
    { title: 'POST_1_TITLE', content: 'POST_1_CONTENT' },
    { title: 'POST_2_TITLE', content: 'POST_2_CONTENT' },
    { title: 'POST_3_TITLE', content: 'POST_3_CONTENT' },
  ];

  constructor() {
    this.translate.addLangs(['en', 'ur']);
    this.translate.setDefaultLang('en');

    const browserLang = this.translate.getBrowserLang();
    const langToUse = browserLang?.match(/en|ur/) ? browserLang : 'en';
    this.translate.use(langToUse);
    this.setDirection(langToUse);

    // Also listen for future language changes
    this.translate.onLangChange.subscribe(event => {
      this.setDirection(event.lang);
    });
  }

  translateText(lang: string) {
    this.translate.use(lang);
    this.setDirection(lang); // Also call this in case user manually changes language
  }

  private setDirection(lang: string) {
    const dir = lang === 'ur' ? 'rtl' : 'ltr';
    this.document.documentElement.dir = dir;
  }
}
