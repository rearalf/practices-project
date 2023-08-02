import { Component } from '@angular/core';

@Component({
  selector: 'app-border-radius-previewer',
  templateUrl: './border-radius-previewer.component.html',
  styleUrls: ['./border-radius-previewer.component.css'],
})
export class BorderRadiusPreviewerComponent {
  borderRadius: number = 0;
  borderRadiusTopLeft: number = 0;
  borderRadiusTopRight: number = 0;
  borderRadiusBottomRight: number = 0;
  borderRadiusBottomLeft: number = 0;

  handleGeneraBorderRadius() {
    if (this.borderRadius === null) this.borderRadius = 0;

    this.borderRadiusBottomRight = this.borderRadius;
    this.borderRadiusBottomLeft = this.borderRadius;
    this.borderRadiusTopLeft = this.borderRadius;
    this.borderRadiusTopRight = this.borderRadius;
  }

  handleBorderRadiusTopLeft() {
    if (this.borderRadiusTopLeft === null) this.borderRadiusTopLeft = 0;
  }
  handleBorderRadiusTopRigth() {
    if (this.borderRadiusTopRight === null) this.borderRadiusTopRight = 0;
  }
  handleBorderRadiusBottomLeft() {
    if (this.borderRadiusTopLeft === null) this.borderRadiusTopLeft = 0;
  }
  handleBorderRadiusBottomRigth() {
    if (this.borderRadiusBottomRight === null) this.borderRadiusBottomRight = 0;
  }
}
