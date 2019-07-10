import {Component} from '@angular/core';
import {LfRouter} from '@lightweightform/core';
import {computed} from 'mobx';

@Component({
  selector: 'sc-guests',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.scss'],
})
export class GuestComponent {
  constructor(private lfRouter: LfRouter) {}
  @computed
  public get index() {
    return this.lfRouter.params.index;
  }
}
