import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {

  transform(arr: any = [{}], month): unknown {

    let returnArr = [];
    let countStartNullDay: number = 0;
    let countDaysOfMonth: number = 0;
    let date = new Date();
    date = new Date(date.getFullYear(), month - 1);
    countDaysOfMonth = this.getAllMonthDays(date);

    console.log(date, countDaysOfMonth)
    console.log(this.getDay(date))

    for (let i = 0; i < this.getDay(date); i++) {
      countStartNullDay++;
      returnArr.push([{day: -1, month: month}]);
    }

    arr = arr.map(lesson => ({
      ...lesson,
      day: this.getDay_Month(lesson['Период']).getDay(),
      date: Number(lesson['Период'].split('-')[0].split('.')[0]),
      month: this.getDay_Month(lesson['Период']).getMonth() + 1,
    }));

    let lastDate = 0;

    for (let i = 1; i <= countDaysOfMonth; i++){

      if (arr.findIndex( lesson => lesson.date == i ) == -1)
        returnArr.push([{date: i, month: month}]);
      else{
        let dayArr = [];
        while (arr.findIndex( lesson => lesson.date == i) !== -1){
          dayArr.push(arr.splice(arr.findIndex( lesson => lesson.date == i), 1)[0])
        }
        returnArr.push(dayArr);
      }

    }


    // returnArr = returnArr.concat(arr);

    returnArr.push(countStartNullDay);


    return returnArr;
  }

  getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7; // сделать воскресенье (0) последним днем
    return day - 1;
  }

  getDay_Month(range){
    let date = new Date();
    let start = range.split('-')[0].split('.');
    let day = Number(start[0]);
    let month = Number(start[1]);
    return new Date(date.getFullYear(), month - 1, day);
  }

  getAllMonthDays(date: Date){
		return 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
	};

}
