import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  
  transform(arr: any = [], searchParam: string): unknown {
    

    if ( searchParam ){
      let filter = arr.filter(
        ell =>
          ell["Название"].toLowerCase().indexOf((' ' + searchParam).toLowerCase()) !== -1 || ell["Название"].toLowerCase().indexOf(searchParam.toLowerCase()) === 0
      );
      return filter;
    }
    return arr;
  }

}
