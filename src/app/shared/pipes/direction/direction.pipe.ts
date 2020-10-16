import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'direction'
})
export class DirectionPipe implements PipeTransform {

  transform(
      arr: any = [], headingParams: any = {}, change: boolean): unknown {

      function answere(ell: any = {}, arrParams: any = []) {
        for (let i = 0; i < arrParams.length; i++){
          if (ell.name !== undefined && ell.name.toLowerCase().indexOf(arrParams[i].toLowerCase()) === 0)
            return true;
        }
        return false;
      }
      
      // let games = [
      //   'Программирование для самых маленьких',
      //   'Программирование для самых маленьких в Tynker', 
      //   'Программирование Kodu Game Lab', 
      //   'Основы программирования и алгоритмики',
      //   'Minecraft: программирование на Python',
      //   'Minecraft: введение в искусственный интеллект',
      //   'Программирование на Lua в Minecraft',
      //   'Unity 3D',
      //   'Программирование игр на Java',
      //   'Разработка игр на CryEngine 5',
      //   'Создание 2D и 3D игр на C#',
      //   'Создание игр в Roblox Studio',
      //   'Создание игр в Scratch',
      //   'Создание AR-приложений на Unity3D', 
      //   'Unreal Engine 4',
      //   'Программирование игр на Python',
      //   'Игровое 3D-моделирование',
      //   'Разработка игр на C++',
      //   '3D-игры в Scratch',
      //   "Python и JavaScript: игровое программирование в CodeCombat",
      //   'Разработка 2D-игр для Windows',
      //   'Разработка сценария игр'
      // ];

      // let sites = [
      //   'Web-мастеринг',
      //   'Программирование на JavaScript',
      //   'Веб-дизайн с нуля',
      //   'PHP и MySQL',
      //   'Веб-программирование',
      //   'Дизайн сайтов',
      //   'Веб-приложения на Python при партнерстве с ВМК МГУ им. М.В. Ломоносова',
      //   'Веб-приложения'
      // ];
      // let applications = [
      //   'iOS-разработка для начинающих',
      //   'Создание AR-приложений на Unity3D',
      //   'Стэнфордский курс Swift',
      //   'Мобильные приложения',
      // ];
      // let hard = [
      //   'Разработка чат-ботов на Python совместно с ВМК МГУ им. М.В. Ломоносова',
      //   'Веб-приложения на Python при партнерстве с ВМК МГУ им. М.В. Ломоносова',
      //   'Разработка игр на C++',
      //   'Гарвардский курс CS50',
      //   'Подготовка к ОГЭ по математике',
      //   'Разработка приложения для Google Ассистента',
      //   'Олимпиадное программирование',
      //   'Стэнфордский курс Swift'
      // ];
      // let python = [
      //   'Разработка чат-ботов на Python совместно с ВМК МГУ им. М.В. Ломоносова',
      //   'Боты на Python',
      //   'Веб-приложения на Python при партнерстве с ВМК МГУ им. М.В. Ломоносова',
      //   'Minecraft: программирование на Python',
      //   'Python и машинное обучение',
      //   'English&Python',
      //   'Программирование игр на Python',
      //   "Python и JavaScript: игровое программирование в CodeCombat",
      //   'Программирование на Python3'
      // ];
      // let minecraft = [
      //   'Minecraft: введение в искусственный интеллект',
      //   'Minecraft: программирование на Python',
      //   'Программирование Minecraft',
      //   'Программирование на Lua в Minecraft',
      //   'Minecraft в Scratch'
      // ]
      // let softSkills = [
      //   'Дизайн-мышление',
      //   'Актерское мастерство для детей',
      //   'Ораторское мастерство',
      //   'Интернет-предпринимательство',
      //   'Операторское мастерство',
      //   'Я выбираю профессию',
      //   'Презентация PowerPoint',
      //   'Мастер коммуникации',
      //   'Финансовая грамотность',
      //   'StartUp English',
      //   'Киберспорт',
      //   'Компьютерная грамотность', 
      //   'Компьютерная грамотность для взрослых',
      //   'Разработка сценария игр',
      //   'Видеоблоггинг',
      //   'Видеоблоггинг 50+',
      //   'Блогинг и новые медиа'
      // ]
      // let cybercream = ['Этичный хакер', 'Кибербезопасность']
      // let design = [
      //   'Дизайн сайтов',
      //   'Веб-дизайн с нуля',
      //   'Дизайн-мышление',
      //   'Операторское мастерство',
      //   'StartUp English',
      //   'Видеоблоггинг',
      //   'Видеоблоггинг 50+',
      //   'Блогинг и новые медиа',
      //   'Видеомонтаж',
      //   'Основы Adobe Illustrator',
      //   'Основы мультипликации в Adobe Animate',
      //   'Рисование в стиле «Аниме»',
      //   'Актерское мастерство для детей',
      //   'Создание игрового персонажа в Photoshop',
      //   'Marvel в Photoshop',
      //   'Игровое 3D-моделирование',
      //   'Трехмерное моделирование в 3ds Max',
      //   'Digital art: рисование на планшете',
      //   'Город будущего',
      //   'Создание комиксов Манга',
      // ]; 
      // let age18 = [
      //   'Unity 3D',
      //   'Разработка игр на C++',
      //   'Программирование на JavaScript', 
      //   'Web-мастеринг',
      //   'Графический дизайн Photoshop' ,
      //   'Digital art: рисование на планшете' ,
      //   'Боты на Python',
      //   'Основы Adobe Illustrator',
      //   'Дизайн сайтов',
      //   'Веб-дизайн с нуля',
      //   'Программирование игр на Python',
      //   'Видеоблоггинг',
      //   'Создание комиксов Манга', 
      //   'Программирование на Python3',
      //   'Программирование игр на Java',
      //   'Трехмерное моделирование в 3ds Max',
      //   'Этичный хакер',
      //   'Гарвардский курс CS50',
      //   'Стэнфордский курс Swift',
      //   'Рисование в стиле «Аниме»'
      // ];
      // let age45 = [
      //   'Основы Adobe Illustrator',
      //   'Digital art: рисование на планшете', 
      //   'Графический дизайн Photoshop' ,
      //   'Видеоблоггинг 50+',
      //   'Интернет-предпринимательство',
      //   'Боты на Python',
      //   'Веб-программирование',
      //   'Дизайн сайтов',
      //   'Веб-дизайн с нуля',
      //   'Финансовая грамотность',
      //   'Компьютерная грамотность для взрослых'
      // ] 
      
        
      
      if ( headingParams.applications || headingParams.age18 || headingParams.cybercream
         || headingParams.games || headingParams.design || headingParams.sites || headingParams.hard || headingParams.python 
         || headingParams.minecraft || headingParams.softSkills || headingParams.age45){
        let filter = arr.filter(
          // ell =>  ell.type.indexOf(onn) === 0 || ell.type.indexOf(off) === 0
          ell =>  {
            if (ell.heading){
              if (headingParams.applications && ell.heading.toLowerCase().indexOf('Мобильные приложения'.toLowerCase()) === 0) return true;
              if (headingParams.cybercream && ell.heading.toLowerCase().indexOf('Кибербезопасность'.toLowerCase()) === 0) return true;
              if (headingParams.games && ell.heading.toLowerCase().indexOf('Создание игр'.toLowerCase()) === 0) return true;
              if (headingParams.design && ell.heading.toLowerCase().indexOf('Дизайн и творчество'.toLowerCase()) === 0) return true;
              if (headingParams.sites && ell.heading.toLowerCase().indexOf('Создание сайтов'.toLowerCase()) === 0) return true;
              if (headingParams.hard && ell.heading.toLowerCase().indexOf('Курсы повышенной сложности'.toLowerCase()) === 0) return true;
              if (headingParams.python && ell.heading.toLowerCase().indexOf('Все о Python'.toLowerCase()) === 0) return true;
              if (headingParams.minecraft && ell.heading.toLowerCase().indexOf('Все о майнкрафт'.toLowerCase()) === 0) return true;
              if (headingParams.softSkills && ell.heading.toLowerCase().indexOf('Всестороннее развитие (Soft Skills)'.toLowerCase()) === 0) return true;
              if (headingParams.age18 && ell.heading.toLowerCase().indexOf('Для взрослых (18+)'.toLowerCase()) === 0) return true;
              if (headingParams.age45 && ell.heading.toLowerCase().indexOf('Для взрослых (45+)'.toLowerCase()) === 0) return true;
              return false;
            }else return false;
          });
        return filter;
      }
  
      return arr;

    return null;
    
  }
  

}
