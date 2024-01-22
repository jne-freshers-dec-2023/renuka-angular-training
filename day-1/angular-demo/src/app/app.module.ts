import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserInlineStyleComponent } from './user-inline-style/user-inline-style.component';
import { UserInlineTemplateComponent } from './user-inline-template/user-inline-template.component';
import { InlineStyleTemplateComponent } from './inline-style-template/inline-style-template.component';
import { UserAuthModuleModule } from './user-auth/user-auth-module.module';
import { CalculatorComponent } from './calculator/calculator.component';
import { CounterComponent } from './counter/counter.component';
import { VoterComponent } from './voter/voter.component';


@NgModule({
  declarations: [
    AppComponent,
    UserInlineStyleComponent,
    UserInlineTemplateComponent,
    InlineStyleTemplateComponent,
    CalculatorComponent,
    CounterComponent,
    VoterComponent
  ],
  imports: [
    BrowserModule,
    UserAuthModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
