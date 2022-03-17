//СТРОКИ
/* const name = 'Паша'
const age = 3

//const output = 'Привет меня зовут '+ name + ' и мой возраст '+ age 
const output = `Привет меня зовут ${name}  и мой возраст ${age < 35 ? 'Это не Паша' : age} лет`
console.log(output) */

/* const output = `
 <div>This is div</div>
 <p>this is o</p>
`
console.log(output) */
/* 
const name = 'Паша'
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.charAt(2))
console.log(name.indexOf('аш'))
console.log(name.startsWith('Паша'))
console.log(name.toLowerCase().startsWith('паша'))
console.log(name.repeat(3))
const string = '     pasword     '
console.log(string.trim())//убирает все пробелы
console.log(string.trimEnd())
console.log(string.trimStart()) */

function logPerson(s,name, age){
  if(age < 0){
      age = 'Еще не родился'
  }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Паша'
const personName2 = 'Максим'
const personAge = 35 
const personAge2 = -10
const output = logPerson`Имя ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя ${personName2}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2)



