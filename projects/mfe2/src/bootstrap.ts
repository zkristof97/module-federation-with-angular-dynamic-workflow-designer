import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { MY_TEST_INJECTION_TOKEN } from './app/test.di';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    {
      provide: MY_TEST_INJECTION_TOKEN,
      useValue: 'this test value'
    }
  ]
});
