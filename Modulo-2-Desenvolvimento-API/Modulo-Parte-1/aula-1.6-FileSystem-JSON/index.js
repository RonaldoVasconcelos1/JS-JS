import {promises as fs}  from "fs";

// // Utilizando com CallBack

// // fs.writeFile('teste.csv', 'bla bla bla',  (err) => {
// //     if(err) {
// //         console.log(err);
// //     }
// //     else {
// //         fs.appendFile('teste.csv', ' teste de concatencao com APPENDFILE', (err) => {
// //             if(err) {
// //                 console.log(err.message);
// //             }
// //             else {
// //                 fs.readFile('teste.csv', 'utf-8', (err, data) => {
// //                     if(err) {
// //                         console.log(err.message);
// //                     } else {
// //                         console.log(data);
// //                     }
// //                 })
// //             }
// //         })

// //     }
// // });

// //Não recomendado ASYNC para APIS
// // try{
// //     console.log('1');
// //     fs.writeFileSync('teste.txt', 'hello. hello');
// //     console.log('2');
// //     const data = fs.readFileSync('teste.txt', 'utf8');
// //     console.log(data);
// //     console.log('3');
// // }catch(err){
// //     console.log(err.message);
// // }

// //Com Promisses
// fs.writeFile('test.txt', 'Com promisses').then(() => {
//     fs.appendFile('test.txt','\ntesteando com AppendFile').then(() => {
//     fs.readFile('test.txt', 'utf-8').then(resp => {
//         console.log(resp);
//     })
//     }).catch(err => {
//         console.log(err);
//     });
// });

//com async AWAIT
async function init() {
    try {
        await fs.writeFile('test.txt', 'Com Async AWAIT');
        await fs.appendFile('test.txt', '\n Testando com Async');
        const data = await fs.readFile('test.txt', 'utf8');
        console.log(data);
        
    } catch (error) {
        console.log(error.message);
    }
}

//init();
writeReadJson();
//lendo Aqruivos Json
async function writeReadJson() {
    try {

        //valores iniciais
        const ARRAYcarros = ['UNO', 'PALIO', 'CELTA'];
        const obj = {
            carros : ARRAYcarros
        };

        //escrita no arquivo json
        await fs.writeFile('teste.json', JSON.stringify(obj));
        //lendo o arquivo
        const data = JSON.parse(await fs.readFile('teste.json'));
        //modificavao dos arquivos
        data.carros.push('Sandero');
        console.log(data);
        //sobrescrita do arquivo
        await fs.writeFile('teste.json', JSON.stringify(data));

 
    } catch (error) {
        console.log(error.message);
        
    }
}