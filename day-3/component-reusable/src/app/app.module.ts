import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { FormArrayComponent } from './form-array/form-array.component';


@NgModule({
  declarations: [
    AppComponent,
    OutputPropertyComponent,
    InputPropertyComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    CustomDirectiveDirective,
    FormArrayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
