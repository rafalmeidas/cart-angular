import { Component, Input } from '@angular/core';

type Class = 'success' | 'error' | 'info';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() type: Class = 'success';
  @Input() title: string = '';

  get typeClass(): string {
    return this.type;
  }

  get icon(): string {
    switch (this.type) {
      case 'success':
        return 'check_circle';
      case 'error':
        return 'error';
      case 'info':
        return 'info';
      default:
        return 'info';
    }
  }
}
