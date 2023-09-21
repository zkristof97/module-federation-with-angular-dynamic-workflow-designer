import { Component, Inject, OnInit } from '@angular/core';
import { MY_TEST_INJECTION_TOKEN } from './test.di';

@Component({
    standalone: true,
    selector: 'mfe2-enrich',
    template: `
        <div class="task">
            <img src="http://localhost:4202/assets/enrich.png">
            <p>Enrich</p>
        </div>
    `
})
export class EnrichComponent implements OnInit {
    constructor(@Inject(MY_TEST_INJECTION_TOKEN) private myTestInjectionToken: string) { }

    ngOnInit() {
        console.log('this.myTestInjectionToken: ', this.myTestInjectionToken);
    }
}
