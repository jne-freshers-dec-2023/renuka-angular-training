import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NestedforComponent } from './nestedfor/nestedfor.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { HeaderComponent } from './header/header.component';
import { BasicformComponent } from './basicform/basicform.component';
import {FormsModule} from '@angular/forms';
import { CustompipeComponent } from './custompipe/custompipe.component'
import { CustomPipeText } from './custompipe/custompipe.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NestedforComponent,
    StyleBindingComponent,
    HeaderComponent,
    BasicformComponent,
    CustompipeComponent,
    CustomPipeText
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
