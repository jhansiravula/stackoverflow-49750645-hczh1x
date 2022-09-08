import { Component, NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  submitted = false;
  myForm;
  backendErrors = [];
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.email],
      phone: ['', Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{3}')]
    })
  }

  sendToBackendThatFails() {
    this.submitted = true;
    if (this.myForm.valid) {
      this.backendErrors = [1];
    }
  }
}
