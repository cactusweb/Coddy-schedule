import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'teacher'
})
export class TeacherPipe implements PipeTransform {

  transform(arr: any = [], searchParam: string): unknown {

    function searchByWord(ell: any = {}, searchParam: string) {
      if (ell.teacher){
        let arrWord = ell.teacher.split(' ');
        return ((arrWord[1]+' '+arrWord[0]).toLowerCase().indexOf(searchParam.toLowerCase()) === 0 ||
          (arrWord[0]+' '+arrWord[1]).toLowerCase().indexOf(searchParam.toLowerCase()) === 0);
        //   for (let i = 0; i < arrWord.length; i++)
        //     if (arrWord[i].toLowerCase().indexOf(searchParam.toLowerCase()) === 0)
        //       return true;
        //   return false;
      }else return false;
    }
    // (ell.name+' '+ell.sername).toLowerCase().indexOf(searchParam.toLowerCase()) === 0 ||
    //       (ell.sername+' '+ell.name).toLowerCase().indexOf(searchParam.toLowerCase()) === 0);

    if ( searchParam != null && searchParam !== '' && searchParam != undefined){
      let filter = arr.filter(
        ell =>
          searchByWord(ell, searchParam)
      );
      return filter;
    }
    return arr;
  }

}
