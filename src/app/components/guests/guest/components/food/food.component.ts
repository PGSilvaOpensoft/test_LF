import {Component} from '@angular/core';
import {LfRouter} from '@lightweightform/core';
import {computed} from 'mobx';

@Component({
  selector: 'cp-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent {
  constructor(private lfRouter: LfRouter) {}

  @computed
  public get index() {
    return this.lfRouter.params.index;
  }
}
