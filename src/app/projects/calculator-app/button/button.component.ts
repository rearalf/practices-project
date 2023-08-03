import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() onClickFunction!: (param: any) => void;
  @Input() paramDefault: string = '';
  @Input() buttonContent: string = '';

  onClick() {
    this.onClickFunction(this.paramDefault);
  }
}
