import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxMaskModule } from "ngx-mask";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { TypePipe } from './shared/pipes/type/type.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TeacherPipe } from './shared/pipes/teacher/teacher.pipe';
import { DirectionPipe } from './shared/pipes/direction/direction.pipe';
import { NamePipe } from './shared/pipes/name/name.pipe';
import { DatePipe } from './shared/pipes/date/date.pipe';
import { AgePipe } from './shared/pipes/age/age.pipe';
import { TimePipe } from './shared/pipes/time/time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    TypePipe,
    TeacherPipe,
    DirectionPipe,
    NamePipe,
    DatePipe,
    AgePipe,
    TimePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    NgxMaskModule.forRoot(/*options*/),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
