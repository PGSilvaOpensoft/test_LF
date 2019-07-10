import {Component, ViewChild} from '@angular/core';
import {LfStorage, LfI18n, LfFileStorage} from '@lightweightform/core';
import {AppComponent as LfAppComponent} from '@lightweightform/bootstrap-theme';

@Component({
  selector: 'sc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  actions = [
    {
      id: 'save',
      style: 'outline-secondary',
      icon: 'save',
      callback: () => {
        alert('save not implemented'); //TODO CP6: Implement save action
      },
    },
    {
      id: 'load',
      style: 'outline-secondary',
      icon: 'folder-open',
      isDisabled: !this.lfFileStorage.loadIsSupported,
      callback: () => {
        alert('load not implemented'); //TODO CP6: Implement load action
      },
    },
    {
      id: 'validate',
      style: 'outline-danger',
      icon: 'check-square-o',
      callback: () => alert('validate not implemented'), //TODO CP6: Implement validate action
    },
    {
      text: 'Submit',
      style: 'outline-success',
      icon: 'send',
      callback: () => {
        alert('submit not implemented'); //TODO CP6: Implement submit action
      },
    },
  ];

  @ViewChild(LfAppComponent, {static: false}) private lfApp: LfAppComponent;

  constructor(
    public lfStorage: LfStorage,
    public lfI18n: LfI18n,
    private lfFileStorage: LfFileStorage,
  ) {}

  submit() {
    if (this.lfStorage.shouldShowError()) {
      console.log(this.lfStorage.shouldShowError());
      fetch('https://selfcheckin.opensoft.pt/reservations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.lfStorage.getAsJS()),
        mode: 'cors',
      })
        .then(response => {
          console.log(response);
          alert('Check-in successful. Enjoy your stay.');
        })
        .catch(ex => {
          console.log(ex);
          alert(ex);
        });
    } else {
      this.lfApp.validate();
    }
  }
}
