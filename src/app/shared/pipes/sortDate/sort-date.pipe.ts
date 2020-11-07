import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortDate'
})
export class SortDatePipe implements PipeTransform {

  transform(arr: any = [{}]): unknown {

    if (arr[0]){

      arr.sort( (a,b) => {

        
        if ( this.getNumberDate(a) < this.getNumberDate(b)){
          return -1;
        }else if( this.getNumberDate(a) > this.getNumberDate(b)){
          return 1;
        }else return 0;

      })

    }

    return arr;
  }

  getNumberDate(item){
    let date = item['Дата старта курса'];
    let start = date.split('-')[0].split('.');
    let day = start[0];
    let month = start[1];
    return Number(`${month}${day}`);
  }

}
