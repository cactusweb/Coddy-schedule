import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'metro'
})
export class MetroPipe implements PipeTransform {

  transform(arr: any = [{}], metro: any = []): unknown {
    

    if (metro){

      let filter = arr.filter( ell =>
      
        (ell['Метро'] && (ell['Метро'].toLowerCase().indexOf(metro.toLowerCase()) === 0 || ell['Метро'].toLowerCase().indexOf((' ' + metro).toLocaleLowerCase()) !== -1))

      )

      return filter;

    }
  
    return arr;
    
  }

}
