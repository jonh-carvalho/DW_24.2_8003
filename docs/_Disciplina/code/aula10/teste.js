/* var student =  { 
    name : "Joe Rayy", 
    sclass : "I", 
    rollno : 12  };

  console.log(student);
  delete student.rollno;
  console.log(student.rollno);
  student.rollno = 15;
  console.log(student)
*/

/* Escreva um programa que cria um botão e
que adiciona um evento click que imprima uma mensagem de texto no console. 
*/
const button = document.createElement('button');
button.textContent = 'Click me'
button.addEventListener('click', () => { console.log('Button clicado')})

document.body.appendChild(button);

function clique() {
  console.log('Button clicado');
}