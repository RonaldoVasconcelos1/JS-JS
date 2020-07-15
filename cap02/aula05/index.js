var a = 5;
var b = 6;

if (a > b) {
    console.log(a + ' é maior que ' + b)
} else {
    if (a < b) {
        console.log( a + 'é menor que ' + b)
    }
    else {
        console.log(a + 'igual a ' + b)
 }
}

var dia = 1;
//Condição IF
if(dia === 1){
    console.log('domingo');
}else if(dia === 2){
    console.log('segunda');
}else if(dia === 3){
    console.log('terça');
}else if(dia === 4){
    console.log('quarta');
}else if(dia === 5){
    console.log('quinta');
}else if(dia ===6){
    console.log('sexta');
}else if(dia === 7){
    console.log('sabado');
}

var r = '';
//CASE 
switch(dia) {
    case 1: r = 'domingo'; break;
    case 2: r = 'segunda'; break;
    case 3: r = 'terça'; break;
    case 4: r = 'quarta'; break;
    case 5: r = 'quinta'; break;
    case 6: r = 'sexta'; break;
    case 7: r = 'sabado'; break;

    default : r = 'Dia invalido';
}
//Operadores Ternarios
a = 6;
b = 7;
var resposta = a > b ? 'Maior' :  a < b ? 'menor' : 'igual';
console.log(resposta); 

var diaSemana = dia === 1 ? 'Domingo' : dia === 2 ? 'segunda' : dia === 3 ? 'terça' : dia === 4 ? 'quarta' : dia === 5 ? 'quinta' : dia === 6 ? 'sexta' : dia === 7 ? 'sabado' : 'Dia invalido';

console.log(diaSemana);

//Somatorio com while
var numeroAtual = 1;
var somatorio = 0;

while (numeroAtual <= 10) 
{
    //somatorio = somatorio + numeroAtual;
    somatorio += numeroAtual;
    numeroAtual++;
}
console.log(somatorio);

var somatorio = 0;
var numeroAtual = 1;

do {
    somatorio += numeroAtual;
    numeroAtual++;
}while(numeroAtual <= 10)

console.log(somatorio)

//Estrutura for
var somatorio = 0;
var numeroAtual = 1;

for(numeroAtual = 0; numeroAtual <= 10; numeroAtual++) {
    somatorio += numeroAtual;
}
console.log(somatorio);

//Funções
