import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  title = 'coddy-parser';
  lessons: any = [];
  metroStations: any = [];
  activeDate = 0;
  timeModel;
  metroModel;
  month = (new Date().getMonth() + 1);
  filtering = {
    format: '0',
    formatName: 'Формат',
    direction: '0',
    directionName: 'Направление',
    time: '0',
    timeName: "Время занятий",
    age: '0',
    ageName: 'Любой возраст',
    teacher: '',
    name: '',
    metro: '',
    date: '',

  }

  constructor(
    private http: HttpService,
    private spinner: NgxSpinnerService,
  ){}

  async ngOnInit(){
    await this.getLessons();
  }

  async getLessons(){
    this.spinner.show();
    await this.http.getLessons()
    .then( items => {
      this.lessons = this.setValidTime(items);
      // this.getAllTimes(this.lessons);
      let date = new Date();
      // this.lessons = this.calendarPipe.transform(this.lessons, 11);
      this.spinner.hide();
    })
    .catch(e =>{
      console.log(e);
    });
  }

  onChangeFormat(name){
    this.filtering.formatName = name;
  }

  onChangeDirection(name){
    this.filtering.directionName = name;
  }

  onChangeAge(name){
    this.filtering.ageName = name;
  }

  onChangeTime(name){
    this.filtering.timeName = name;
  }

  onActiveDate(date){

    this.activeDate = this.activeDate == date ? 0 : date;
  }




  getAllMetro(arr){
    let returnArr: any = [];
    if (arr[0]){
      
      for (let i = 0; i < arr.length; i++){
        let alreadySet = false;
        if ( i == 0 && arr[i]["Метро"]){
          returnArr.push(arr[i]["Метро"]);
        }
        else if (arr[i]["Метро"]){
          for (let k = 0; k < returnArr.length; k++){
              if (returnArr[k] == arr[i]["Метро"])
                alreadySet = true;
          }
          if (!alreadySet)
            returnArr.push(arr[i]["Метро"])
        }

      }
    }
    return returnArr;
  }

  setValidTime(arr: any = []){
    for (let i = 0; i < arr.length; i++){
      if (arr[i]['Время'] && arr[i]["Время"].indexOf('.') !== -1){
        arr[i]['Время'] = arr[i]['Время'].split('-')[0].split('.').join(':') + '-' + arr[i]['Время'].split('-')[1].split('.').join(':')
      }
    }
    return arr;
  }

}
