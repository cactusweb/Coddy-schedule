import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { HttpService } from './shared/http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'coddy-parser';
  lessons: any = [];
  times: any = [];
  timeModel;
  filtering = {
    online: false,
    offline: false,
    teacher: '',
    name: '',
    time: [],
    changeTime: false,
    date: '',
    age: '',
    heading: {
      games: false,
      applications: false,
      cybercream: false,
      design: false,
      sites: false,
      hard: false,
      python: false,
      minecraft: false,
      softSkills: false,
      age18: false,
      age45: false,
      change: false
    },

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
      this.times = ['9:00-11:00', '11:30-13:30', '14:00-16:00', '16:00-18:00', '18:00-20:00']
      // this.getAllTimes(this.lessons);
      this.spinner.hide();
    })
    .catch(e =>{
      console.log(e);
    });
  }

  onChangeHeading(){
    this.filtering.heading.change = !this.filtering.heading.change;
    
  }

  onChangeTime(time: string){
    if (!this.filtering.time[0]){
      this.filtering.time.push(time);
    }
    else{
      let newTime = true;
      for (let i = 0; i < time.length; i++){
        if (this.filtering.time[i] == time){
          this.filtering.time.splice(i,1);
          newTime = false;
        }
      }
      if (newTime)
        this.filtering.time.push(time);
    }
    this.filtering.changeTime = !this.filtering.changeTime;
  }

  // getAllTimes(lessons: any = []){
  //   if (lessons){
  //     for (let i = 0; i < lessons.length; i++){
  //       if (lessons[i].time && !this.times[0])
  //         this.times.push(lessons[i].time)
  //       else if (lessons[i].time){
  //         let alreadySet: boolean = true;
  //         for (let k = 0; k < this.times.length; k++){
  //           console.log(lessons[i].time, this.times[k], this.times.length)
  //           if (lessons[i].time == this.times[k]){
  //             console.log('break');
  //             alreadySet = true;
  //             break;
  //           }else{
  //             alreadySet = false;
  //           }
  //         }
  //         console.log(alreadySet)
  //         if (!alreadySet)
  //           this.times.push(lessons[i].time);
  //       }
  //     }
  //   }
  // }

  setValidTime(arr: any = []){
    for (let i = 0; i < arr.length; i++){
      if (arr[i].time && arr[i].time.indexOf('.') !== -1){
        arr[i].time = arr[i].time.split('-')[0].split('.').join(':') + '-' + arr[i].time.split('-')[1].split('.').join(':')
      }
    }
    return arr;
  }
}
