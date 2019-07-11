import {Component} from '@angular/core';
import {computed} from 'mobx';
import {LfRouter} from '@lightweightform/core';

@Component({
  selector: 'cp-other-services',
  templateUrl: './other-services.component.html',
  styleUrls: ['./other-services.component.scss'],
})
export class OtherServicesComponent {
  public static GYM_PRICE_PER_HOUR: number = 10.34;

  constructor(private lfRouter: LfRouter) {}

  @computed
  public get index() {
    return this.lfRouter.params.index;
  }
}
