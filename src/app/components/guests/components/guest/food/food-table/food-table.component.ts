import {Component, Input, ViewChild} from '@angular/core';
import { observable } from 'mobx';
import { TableComponent } from '@lightweightform/bootstrap-theme';
import { computed } from 'mobx-angular';

@Component({
  selector: 'sc-food-table',
  templateUrl: './food-table.component.html',
  styleUrls: ['./food-table.component.scss'],
  
})
export class FoodTableComponent {
  @observable
  @Input()
  path: string;

  @ViewChild('lfTable') lfTable: TableComponent;

  @computed
  public get subTotalName() {
    return `subTotal${this.path}`
  }
}
