import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {
  transform(arr: any = [{}], time: any = []): unknown {
    
    if ( time != '0' ){

      let filtRange = this.getGapTime(time);
      let filter = arr.filter( ell => {

        console.log(this.getGapTime(ell["Время"]))
        return filtRange.start <= this.getGapTime(ell["Время"]).start && filtRange.end >= this.getGapTime(ell["Время"]).start

      }

      )

      return filter;
    }

    return arr;
    
  }

  
  getGapTime(range){
    let nums = range.split('-');
    let start = Number(nums[0].split(':').join(''));
    let end = Number(nums[1].split(':').join(''));

    return {start: start, end: end}
  }

}
