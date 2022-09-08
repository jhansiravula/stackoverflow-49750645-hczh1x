import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { AppComponent } from './app.component';
	import { HttpClientModule } from '@angular/common/http';
import { CustomInputComponent } from './custom-input/custom-input.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, NgSelectModule, HttpClientModule ],
  declarations: [ AppComponent, CustomInputComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
