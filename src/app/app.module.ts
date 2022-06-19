import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDisplayComponent } from './student-display/student-display.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentUpdateComponent } from './student-update/student-update.component';
import { AppFooterComponent } from './app-footer/app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentDisplayComponent,
    StudentEditComponent,
    StudentDeleteComponent,
    StudentUpdateComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
