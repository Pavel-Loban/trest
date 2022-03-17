"use strict";
/* alert('Privet  Я Java Script!');
alert('Мир'); */
/* let name = "Джон";
let admin = name;
alert(admin); */
/* let userName = prompt('Как Вас зовут?', `Укажите свое имя`);
alert(`Вас зовут ${userName}!`); */

/* let isBoss = confirm("Ты здесь главный?");
alert( isBoss ); */

/* alert( 5 % 2 ); // 1, остаток от деления 5 на 2
alert( 8 % 3 ); // 2, остаток от деления 8 на 3

alert( 2 ** 2 ); // 4  (2 умножено на себя 2 раза)
alert( 2 ** 3 ); // 8  (2 * 2 * 2, 3 раза)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2, 4 раза)

alert( 4 ** (1/2) ); // 2 (степень 1/2 эквивалентна взятию квадратного корня)
alert( 8 ** (1/3) ); // 2 (степень 1/3 эквивалентна взятию кубического корня)
 */
/* let apples = "2";
let oranges = "3";
alert( +apples + +oranges ); */

/* let a = 1, b = 1;

alert( ++a ); // 2, префиксная форма возвращает новое значение
alert( b++ ); // 1, постфиксная форма возвращает старое значение

alert( a ); // 2, значение увеличено один раз
alert( b ); // 2, значение увеличено один раз */

/* let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12 */
/* let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year == 2015) {
    alert( "Правильно!" );
    alert( "Вы такой умный!" );
  }else {
    alert( 'А вот и неправильно!' ); // любое значение, кроме 2015
  } */

/*  let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '');

if (year < 2015) {
 alert( 'Это слишком рано...' );
} else if (year > 2015) {
 alert( 'Это поздновато' );
} else {
 alert( 'Верно!' );
} */


/* let age = prompt('Сколько вам лет?', '');

let accessAllowed = (age>18) ? true : false;//сравнение можно сократьть
//age > 18; вернет true ili false

alert(accessAllowed); */

/* let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message ); */
//Zamena if operatora ne recomend
/* let company = prompt('Какая организация создала JS?', '');
(company == 'Netscape') ?
alert('Верно'): alert('Не верно'); */

/* if ("0") {
    alert( 'Привет' );
  }//vivedet Привет */
/*
  let nameJS = prompt('Какое "официальное" название JavaScript');
  if(nameJS == 'ECMAScript'){
      alert('Верно!');
  }else{
      alert('Не знаете? ECMAScript');
  } */

/*   let myNumber = prompt('Введите число');
  if(myNumber> 0){
      alert(1);
  }else if(myNumber < 0){
      alert(-1);
  }else{
      alert(0);
  }

  let result = (a + b <4) ? 'Мало': 'Много';

  let message = (login == 'Сотрудник') ?  'Привет':
   (login == 'Директор') ? 'Здравствуйте':
    (login == '') ? 'Нет логина' : ''; */


/* let age;
if(!(age >= 14 && age <= 90)){

}
 if(age < 14 || age > 90); */

/* let login = prompt('Введите login', '');

if(login === 'Admin'){
 let pass =  prompt('Введите parol', '');
 if(pass === 'I admin'){
     alert('Здравствуйте!');
 }else if(pass === '' || pass === null){
     alert('Отменено');
 }else{
     alert('Неверный пароль!');
 }

} else if(login === '' || login === null){
    alert('Отменено');
}else{
    alert('Я Вас не знаю!');
} */

/*  for (let i = 0; i < 10; i++) {

    // если true, пропустить оставшуюся часть тела цикла
    if (i % 2 == 0) continue;

    alert(i); // 1, затем 3, 5, 7, 9
  } */

/*
      for(let i = 2; i<=10; i++){
          if(i % 2 == 0){
          alert(i);//2,4,6,8,10
      }
    } */
/*
    let i = 0;
    while(i<3){
        i++;
        alert(`number ${i}!`);
    } *///1,2,3


  /*  let num;
   do{
       num = prompt('Введите число больше 100!', 0)
   } while(num <= 100 && num); */



   /* for(let i = 0; i<=10; i++){
      if(i % 2 === 0) {
        alert(i);

      }
   } */ // получаем 0,2,4,6,8,10

   /* for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
  } */ //меняем на while

  /* let i = 0;
  while(i<3){
      alert(`number ${i}!`);
      i++;
  } */
/* let n = 10;;
nextPrime:
for(let i = 2;i < n; i++){
   for(let j = 2; j < i; j++){
       if(i % j === 0)
           continue nextPrime

   }
   alert(i);
} */




/* class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author;
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer); */



// PROMISE
  /* const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer represents a response from a server
    let responseFromServer;

    if(responseFromServer) {
      resolve('We got the data');
    } else {
      reject ('Data not received');
    }
  }); */









