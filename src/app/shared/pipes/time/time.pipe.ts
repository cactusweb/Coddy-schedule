import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  transform(arr: any = [{}], paramsTime: any = [], change: boolean): unknown {
  if ( paramsTime[0] != null && paramsTime[0] !== '' && paramsTime[0] != undefined){
      let filter = arr.filter(
        ell =>{
              for (let k = 0; k < paramsTime.length; k++){
              if (ell.time && ell.time == paramsTime[k]){return true;}
              else if (k == paramsTime.length - 1){return false;}
            }
      });
      return filter;
    }

    return arr;
    
  }

}
