import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'custom-input',
  template: 
  `
  <ng-container [formGroup]="form">
   {{controlName}} : <input type="text" [formControlName]="controlName">
   <p class="error_message" *ngIf="control.hasError('required') && (submitted || control.dirty)">Please provide {{controlName}}</p>
<p class="error_message" *ngIf="(control.hasError('email') || control.hasError('pattern'))&& (submitted || control.dirty)">Please provide valid {{controlName}}</p>
<p class="error_message" *ngIf="backendFail">Backend Fail For Control {{controlName}}</p>
</ng-container>
  `,
  styles: [`.error_message {color: red}`]
})
export class CustomInputComponent {
  @Input() form;
  @Input() controlName;
  @Input() submitted;
  @Input() failingFields : [];
  @Input() fieldCode;

  get control() {
    return this.form ? this.form.get(this.controlName) : undefined;
  }

  get backendFail() {
    return this.failingFields ? this.failingFields.includes(+this.fieldCode) : false;
  }
}
