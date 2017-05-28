/**
 * Created by mehrabi-s on 15/04/2017.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {NgbCalendarPersian} from 'ng2-datepicker-jalali/persian/ngb-calendar-persian';
@Pipe({
    name: 'dateTimeJalali'
})
export class DateTimeJalaliPipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {
        if (value) {
                value = new Date(value);
            if (value) {
                let da = new NgbCalendarPersian().fromGregorian(value);
                return  `${da.year}/${da.month}/${da.day} ${value.getHours()}:${value.getMinutes()}`;
            }
        }
        return '';
    }
}
