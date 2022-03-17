
//camleCase
/* const firstName = 'Pasha' */

//const age = '35'
/* const isProgrammer = true //boolean
const _  = 'privat'
const $ = 'some value' */

//const if = 'mkef' // err
/* const withNum5 = '5' */
// const 5withNum = 5 //err

// 2  
//alert('Имя человека ' + firstName + ', а возраст человека:' + age )
/* const lastName = prompt( 'Введите фамилию')
alert(firstName + ' ' + lastName) */

//3 Операторы
/* let currentYear = 2022
const birtYear = 1986
const age = currentYear - birtYear
console.log(age)
 const a = 10
 const b = 5

 let c = 32 */
 //c = c + a 
 //или
 /* c += a

 console.log(a+b)
 console.log(a-b)
 console.log(a*b)
 console.log(a/b)
 console.log(++currentYear)
 console.log(--currentYear)
 console.log(c) */

 //4 Типы данных

 /* const isProgrammer = true
 const name = 'Pasha'
 const age = 35
 let x
 null
 console.log(typeof x)
 console.log(typeof isProgrammer)
 console.log(typeof name)
 console.log(typeof age)
 console.log(null)  */

 //5 Приоритет операций

 /* const fullAge = 35
 const birtYear = 1986
 const currentYear = 2022

 const isFullAge = currentYear - birtYear  >= fullAge //true
 console.log(isFullAge) */

 //6Условные операторы
  /* const  courseStatus = 'афшд' // ready, fail, panding

  if(courseStatus === 'ready'){
      console.log('Курс уже готов и его можно проходить')
  } else if(courseStatus === 'pending'){
      console.log('Курс пока находится в обработке')
  }else{
      console.log('Курс не получился')
  } */

  /* const isReady = false
  if(isReady){ //означает что isReady === true 
      console.log('Все готово')
  }else{
      console.log('Все не готово')
  } */ //тоже самое можно написать  тернарным выражением
 /*  const isReady = false
 isReady ? console.log('Все готово'): console.log('Все не готово') */

 //7   boolean ЛОГИКА
 
 //8 Функция
/* 
  function calculateAge(year){
     return 2022 - year
 } */
 /* console.log(calculateAge(1986))
 console.log(calculateAge(1967))
 console.log(calculateAge(1924)) */


 /* function logInfoAbout(name, year){
     const age = calculateAge(year)
     if(age > 0){
     console.log('Имя ' + name + ' ему ' + age)
 }else{
     console.log('Это будущее')
 }
}
 logInfoAbout('Pasha', 1986)
 logInfoAbout('Mike', 2034) */

 //9 МАССИВЫ
/*  const cars = ['Mazda','Mers', 'Volvo'] //ЛУЧШЕ И НУЖНО ТАК СОЗДАВАТЬ МАССИВ
 console.log(cars) */
 /* const cars = new Array('Mazda','Mers', 'Volvo')
 console.log(cars)
console.log(cars[1])
console.log(cars.length)
cars[0] = 'Posche'
cars[cars.length] = 'Mazda'
console.log(cars) */

 //10 ЦИКЛЫ
 //const cars = ['Mazda','Mers', 'Volvo', 'Porche']
 /*  for(let i = 0;i < cars.length; i++){
      const car = cars[i]
      console.log(car)
  } */
//ТОЖЕ САМОЕ
/* for(let car of cars){
    console.log(car)
} */

//11 ОБЪЕКТЫ
 const person = {
     firstName: 'Pasha',
     lastName: 'Loban',
     year: 1986,
     languages:['ru','en', 'de'],
     hasWife: true,
     greet: function(){
         console.log(this.lastName +' '+this.firstName)
     }
 }
 console.log(person.lastName)
 console.log(person['firstName'])
 const key = 'languages' //ИЛИ 'year'
 console.log(person[key]) //(3)['ru','en', 'de']
 person['hasWife'] = false
 person.isProgrammer = true
 console.log(person)

 person.greet()