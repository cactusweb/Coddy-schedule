import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(arr: any = [], type: string): unknown {
    
    if ( type != '0' ){
      let filter = arr.filter(
        ell =>  ell["Формат"].toLowerCase().indexOf(type) === 0
      );
      return filter;
    }

    return arr;

  }

}
