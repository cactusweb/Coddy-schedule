import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(arr: any = [], age: any = ''): unknown {
    if (age){
      let filter: any = [];
      age = Number(age);
      for (let i = 0; i < arr.length; i++){
        let startAge: any = false;
        let endAge: any = false;

        if (arr[i].age && arr[i].age.indexOf('-') !== -1){
          startAge = Number(arr[i].age.split('-')[0]);
          endAge = Number(arr[i].age.split('-')[1]);
          if (age >= startAge && age <= endAge)
            filter.push(arr[i]);
          continue;
        }else 
        if (arr[i].age && arr[i].age.indexOf('+') !== -1){
          startAge = Number(arr[i].age.split('+')[0]);
          if (startAge <= age)
            filter.push(arr[i]);
          continue;
        }
      }
      return filter;
    }


    return arr;
  }

}
