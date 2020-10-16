import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  transform(arr: any = [], online: boolean, offline: boolean): unknown {
    let onn = '1';
    let off = '1';

    if (online)
      onn = "online";
    if (offline)
      off = "offline";
      
    
    if ( online || offline ){
      let filter = arr.filter(
        ell =>  ell.type.indexOf(onn) === 0 || ell.type.indexOf(off) === 0
      );
      return filter;
    }

    return arr;

  }

}
