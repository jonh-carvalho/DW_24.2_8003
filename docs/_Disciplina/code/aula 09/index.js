/*
? let x = "John Doe";
* let x = 0;
! console.log(x)
  todo: 
*/

/*
function Addittion(num1, num2){
    a =  num1+num2

    return a
}
console.log(Addittion(6.9,9.0))
*/

/*
? Variável recebendo uma função
const add = function Addittion(num1, num2){
    a =  num1+num2
    return a
}
console.log(add(4,4))
*/

/*
let num  =19;

if (num % 2 === 0){
    console.log("O valor dado é par ")
} else{
    console.log("O valor dado é ímpar ")
}
*/

/*
? Condição
! If else
! If else if

let num  = -0;
if (num > 0){
    console.log("O numero é maior que zero ");
} else if (num < 0){
    console.log("O valor dado é menor que zero ")
} else {
    console.log("valor  é zero ")
}
*/

/*
let day =3;
let dayName;
switch (day) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;          
    case 3:
        dayName = "Tuesday";
        break;
    case 4:
        dayName = "Wednesday";
        break;
    case 5:
        dayName = "Thursday";
        break;
    case 6:
        dayName = "Friday";
        break;
    case 7:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}
console.log(dayName)
*/

/*
let x;

for (x = 0; x < 10; x++){
    console.log(x)
}


let x = 2;

for ( ;x < 10; x++){
    console.log(x)
}
*/

/*
let x = 1
while(x < 10){
    console.log(x) 
    x++;
}


let count =1;
do{
    console.log(count)
    count++;
} while(count < 10)
*/

/*
? Uso de in e of
const alunos = [1,2,3,4,5,6,7,8,9,10];
for(const value in alunos){
    console.log(value);
    console.log(alunos[value]);
}

for (const item of alunos){
    console.log(item)
}
*/

/* Array = Vetor de elementos
let i = [1,2,3,4];
i[0]    

let cursos = ["HTML", "CSS", "JS", "PHP"];
cursos[0] 
console.log(cursos[0])

let aula = new Array(1,2,3,4);
aula[0] 
console.log(aula.length) 
aula[0] = 5
aula[0] 
console.log(aula[0])

aula.pop()
console.log(aula)
aula.shift()
console.log(aula)
const courses = ["HTML", "CSS", "JS", "PHP"];
a = courses.slice(1,3);
console.log(a)

let semestre1 = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho,"]
let semestre2 = ["Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
//let ano = semestre1 + semestre2
let ano = semestre1.concat(semestre2)
console.log(ano)


let courses = ["HTML", "CSS", "JS", "PHP"];
console.log(courses.toString());
courses.sort()
console.log(courses)
*/

/* String

//let  str = new String("Hello World");
//console.log(str)
let str = `
            Essa é uma
            frase Tex
            com multiplas linhas`
let str1 = `
            Essa é uma
            frase Tex
            com multiplas linhas`
a = str+str1
console.log(a)    
*/

// Objetos - atributos e métodos
let professor = {
    name: "Jonh",
    age: 52,
    pro : function() {
        console.log("ensina")
    },
    pre : function() {
        console.log("ensina")
    }
}

professor.pro()
professor.pre()
console.log(professor.name)
console.log(professor.age)