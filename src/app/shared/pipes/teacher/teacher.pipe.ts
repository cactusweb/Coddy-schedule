import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teacher'
})
export class TeacherPipe implements PipeTransform {

  transform(arr: any = [], searchParam: string): unknown {

    function searchByWord(ell: any = {}, searchParam: string) {
      if (ell["Преподаватель"]){
        let arrWord = ell["Преподаватель"].split(' ');
        return ((arrWord[1]+' '+arrWord[0]).toLowerCase().indexOf(searchParam.toLowerCase()) === 0 ||
          (arrWord[0]+' '+arrWord[1]).toLowerCase().indexOf(searchParam.toLowerCase()) === 0);
      }else return false;
    }

    if ( searchParam != null && searchParam !== '' && searchParam != undefined){
      let filter = arr.filter(
        ell =>{
          return searchByWord(ell, searchParam);
        }
      );
      return filter;
    }
    return arr;
  }

}
