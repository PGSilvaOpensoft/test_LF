import {Component} from '@angular/core';
import {LfStorage, LfI18n} from '@lightweightform/core';

@Component({
  selector: 'sc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public lfStorage: LfStorage, public lfI18n: LfI18n) {}
}
