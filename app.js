/* const cars = ['Mazda','Mers', 'Volvo', 'Porche']
const fib = [1,1,2,3,5,8,11,13]
console.log(cars);
//Function
function addItemToEnd(){

} */


//Method
/* cars.push('BMW')
console.log(cars)
cars.unshift('Lada')
console.log(cars)
const firstItem = cars.shift()
console.log(cars)
const lastCar = cars.pop()
console.log(lastCar)
console.log(cars)
console.log(firstItem) */
/*  console.log(cars.reverse())
 console.log(cars) */


 //Zadacha 1 массив наоборот

 /* const text = 'Привет, мы изучаем JS'
 const reverseText = text.split('').reverse().join('')
 console.log(reverseText) */


/* const index = cars.indexOf('Volvo');

console.log(cars[index])
cars[index] = 'Ford'
console.log(cars) */

/* 
const people=[
    {name: 'Pasha', budjet: 4200},
    {name: 'Sasha', budjet: 3200},
    {name: 'Dasha', budjet: 2200}
]
 */
/* const index = people.findIndex(function(person){
return person.budjet === 3200
})
console.log(people[index]) */
/* const person = people.find(function(person){//ищем объект с 3200 по person
    return person.budjet === 2200
    }) */
    // ili tak
    /* const person = people.find((person) => {
        return person.budjet === 2200
    }) */

    //ILI TAK SOCRATIT'
/* const person = people.find(person => person.budjet == 2200)
    console.log(person) */
    /* let findedPerson
    for(const person of people){
        console.log(person)
        if(person.budjet === 3200){
            findedPerson = person
        }
    }
console.log(findedPerson)
 */
/* const cars = ['Mazda','Mers', 'Volvo', 'Porche']

let look = cars.includes('Mazda')
console.log(look) */
const cars = ['Mazda','Mers', 'Volvo', 'Porche']
const upperCaseCars = cars.map(car =>{
    return car.toUpperCase()
})
console.log(upperCaseCars)

const fib = [1,1,2,3,5,8,11,13]
const pow2 = num => num ** 2
const pow2Fib = fib.map(pow2)
console.log(pow2Fib)
