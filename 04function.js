//Function
/* //Function Declaretion
function greet(name){
    console.log('Привет -', name)
}

//Function Expression
const greet2 = function greet2(name){
console.log('Привет 2 - ', name )
} 

greet('Лена')
greet2('Pasha') */

/* console.log(typeof greet) */
/* console.dir(greet) */
// АНОНИМНЫЕ ФУНКЦИИ

/* let counter = 0
const interval = setInterval(function(){
    if(counter ===5){
        clearInterval(interval) //clear Timeout
    }else{
   console.log(++counter)
    }
},1000) */

//СТРЕЛОЧНЫЕ ФУНКЦИИ
/* function greet(name){
    console.log('Привет -', name)
}
greet('Vasya');
//записи одинаковы
const arrow = (name) =>{
    console.log('Привет -', name)
}
arrow('Pasha')
//можно сократить стрелочную функцию
const arrow2 = (name) => console.log('Привет - ', name)
arrow2('Petya') */
//
/* const pow2 = (num, age) => {
    return num **2
}
console.log(pow2(5))
//или так
const pow3 = num => num ** 2
console.log(pow3(4)) */

//Параметры по умолчанию

/* const sum = (a = 40,b = a*2) => a+b

console.log(sum()) */

/* function sumAll(...all){
    let result = 0
    for(let num of all){
      result += num  
    }
    return result
}
const res = sumAll(1,2,3,4,5,7,7,8)
console.log(res) */
// замыкание
/* function createMember(name){
    return function(lastName){
      console.log(name+lastName)
    }
} 

const logWithLastName = createMember('Pasha')
console.log(logWithLastName('Ivanov'))
console.log(logWithLastName(' Loban')) */

/* 
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
function lookUpProfile(name, prop) {
    // Only change code below this line
  for(let i=0;i<contacts.length;i++){
    if(contacts[i].firstName === name){
    if(contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
        
      }else{
        return "No such property";
      }
    }
  }return "No such contact";
  }
  console.log(lookUpProfile("Akira", "likes")); */