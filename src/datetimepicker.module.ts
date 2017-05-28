import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DatePipe} from '@angular/common';
import {DateTimeJalaliPipe} from './datetime-jalali.pipe';
import {DatetimepickerComponent} from './datetimepicker.component';
import {InputMaskDirective} from './input-mask.directive';

@NgModule({
  declarations: [
    DatetimepickerComponent,
    DateTimeJalaliPipe,
    InputMaskDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  exports: [
    DatetimepickerComponent,
    DateTimeJalaliPipe
  ],
  providers: [DatePipe]
})
export class DateTimePickerModule {
}
