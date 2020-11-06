import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(arr: any = [], age: string): unknown {
    // if (age){
    //   let filter: any = [];
    //   age = Number(age);
    //   for (let i = 0; i < arr.length; i++){
    //     let startAge: any = false;
    //     let endAge: any = false;

    //     if (arr[i]["Возраст"] && arr[i]["Возраст"].indexOf('-') !== -1){
    //       startAge = Number(arr[i]["Возраст"].split('-')[0]);
    //       endAge = Number(arr[i]["Возраст"].split('-')[1]);
    //       if (age >= startAge && age <= endAge)
    //         filter.push(arr[i]);
    //       continue;
    //     }else 
    //     if (arr[i]["Возраст"] && arr[i]["Возраст"].indexOf('+') !== -1){
    //       startAge = Number(arr[i]["Возраст"].split('+')[0]);
    //       if (startAge <= age)
    //         filter.push(arr[i]);
    //       continue;
    //     }
    //   }
    //   return filter;
    // }

    if (age != '0'){

      let filtRange = this.getGapAge(age);

      let filter = arr.filter( ell =>{

        let ellRange: any = false;
        let isValid = false;
        if (ell['Возраст']){
          ellRange = this.getGapAge(ell['Возраст']);
          for (let i = filtRange.start; i <= filtRange.end; i++){
            if (i > ellRange.start && i < ellRange.end){
              console.log('here')
              isValid = true;
              break;
            }
          }
        }

        return isValid && ellRange;
      })
      return filter;
    }


    return arr;

  }

  getGapAge(range){
    let start;
    let end = 200;
    switch (range){
      case '18+': start = 18; break;
      case '45+': start = 45; break;
      default:
        let nums = range.split('-');
        start = Number(nums[0]);
        end = Number(nums[1]);
        break;
    }
    return {start: start, end: end}
  }


}
