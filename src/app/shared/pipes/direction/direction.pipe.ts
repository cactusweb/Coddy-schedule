import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'direction'
})
export class DirectionPipe implements PipeTransform {

  transform(
      arr: any = [], direction: string): unknown {

      function answere(ell: any = {}, arrParams: any = []) {
        for (let i = 0; i < arrParams.length; i++){
          if (ell.name !== undefined && ell.name.toLowerCase().indexOf(arrParams[i].toLowerCase()) === 0)
            return true;
        }
        return false;
      }

      switch (direction){
        case 'app': direction = 'мобильные приложения'; break;
        case 'games': direction = 'создание игр'; break;
        case 'sites': direction = 'создание сайтов'; break;
        case 'design': direction = 'дизайн и творчество'; break;
        case 'hard': direction = 'курсы повышенной сложности'; break;
        case 'python': break;
        case 'minecraft': break;
        case 'softSkills': direction = 'soft skills'; break;
        case 'cybercream': direction = 'кибербезопасность'; break;
        case 'age18': direction = '18+'; break;
        case 'age45': direction = '45+'; break;
        default: direction = '0';
      }

        
      
      if ( direction != '0' ){
        let filter = arr.filter(
          ell =>  
            ell["Направление"].toLowerCase().indexOf(direction) !== -1
          );
        return filter;
      }
  
    return arr;

    
  }
  

}
