import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(arr: any = [], date: string): unknown {
    
    //  ||
    //       (ell.sername+' '+ell.name).toLowerCase().indexOf(searchParam.toLowerCase()) === 0);

    if ( date != null && date !== '' && date != undefined){
      let filter = arr.filter(
        ell =>
          ell.season.toLowerCase().indexOf(date.toLowerCase()) === 0
      );
      return filter;
    }
    return arr;
  }

}
