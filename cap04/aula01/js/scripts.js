'use strict' // JS acusa mais erros


//var tem scopo abrangente
// let tem scopo reduzido


function withVar(){
    for (var i = 0; i <= 10; i++) {
        console.log('Var = ' + i);    
    }

    i = 20;

    console.log(i);
}

withVar();

function withLet() {
    for (let i = 0; i <= 10; i++) {
      console.log('Let = ' + i);
        
    }

  //  i = 30;

   // console.log(i);
}

withLet();

//const c = 10;
//c = 20;

const d = [];
console.log(d);

d.push(1);

console.log(d);

function sum(a, b) {
    return a + b;
}
const sum2 = function(a,b){
    return a+ b;
}
//Arrow Function
const sum3 = (a,b) => {
    return a + b;
}

//Arrow Function Reduzida

const sum4 = (a,b) => a + b;
console.log(sum(2,3));
console.log(sum2(2,3));
console.log(sum3(2,3));
console.log(sum4(2,3));

//Template Literals

const name = 'Ronaldo';
const surName = 'Vasconcelos';

const text1 = 'meu nome é: ' + name + ' ' + surName;
const text2 = `meu nome é: ${name} ${surName}`;

console.log(text1);
console.log(text2);
////

const sum5 = (a = 10,b) => a+ b;

console.log(sum5(2));
console.log(sum5(2));





