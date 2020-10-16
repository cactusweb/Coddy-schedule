import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {
  
  transform(arr: any = [], searchParam: string): unknown {
    
    function searchByWord(ell: any = {}, searchParam: string) {
      if (ell.name){
        let arrWord = ell.name.split(' ');
        let arrSearchWord = searchParam.split(' ')
          for (let i = 0; i < arrWord.length; i++)
            for (let k = 0; k < arrSearchWord.length; k++)
              if (arrWord[i].toLowerCase().indexOf(arrSearchWord[k].toLowerCase()) === 0)
                return true;
          return false;
      }else return false;
    }

    if ( searchParam != null && searchParam !== '' && searchParam != undefined){
      let filter = arr.filter(
        ell =>
          // searchByWord(ell, searchParam)
          ell.name.toLowerCase().indexOf((' ' + searchParam).toLowerCase()) !== -1 || ell.name.toLowerCase().indexOf(searchParam.toLowerCase()) === 0
      );
      return filter;
    }
    return arr;
  }

}
