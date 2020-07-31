window.addEventListener('load', function(){
    fetch('https://api.github.com/users/RonaldoVasconcelos1').then(res => {
        res.json().then(data => {
            showData(data);
        });
    }).catch(error => {
        console.log('error na requisição' + error);
    });
    console.log(divisionPromisse(12,0).then(result => {
        console.log(result);
    })).catch(error => {
        console.log('não pode dividir por 0' + error);
    });

});


function showData(data) {
    const user = document.querySelector('#user');
    user.textContent = data.login + ' ' + data.node_id
}

function divisionPromisse(a, b) {
    return new Promise((resolve, reject) => {
        if(b === 0) {
            reject('não é possivel dividir por 0');
          }

          resolve(a /b);
    });
}
