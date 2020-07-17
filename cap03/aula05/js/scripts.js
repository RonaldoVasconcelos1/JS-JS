window.addEventListener('load', start);

//escopo global
var globalNames = ['um', 'dois', 'tres', 'quatro'];
var inputName = null;
var isEditing = false;
var currentIndex = null;

function start() {
    inputName = document.querySelector('#inputName');
    preventFormSubmit();
    activeForm();
    render();
}

function preventFormSubmit() {
    function handleFormSubmit(event) {
        event.preventDefault();
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', handleFormSubmit);
}

function activeForm(){
    function insertName(newName) {
        globalNames.push(newName);
    }

    function updateName(newName) {

        globalNames[currentIndex] = newName;
    }
    function handleFormTyping(event) {

        var hasText = !!event.target.value && event.target.value.trim() !== '';

        if (!hasText) { clearInput(); return;}
       if (event.key === "Enter") {
           if (isEditing) {
               updateName(event.target.value);
           }
           else{

               insertName(event.target.value);
           }
           isEditing = false;
           clearInput();
           render();
        }
    }
    inputName.addEventListener('keyup', handleFormTyping);
    inputName.focus();
}

function render() {
    function createDeleteButton(index){

        function deleteName() {
            globalNames.splice(index, 1);
            render();
        }
        
        var button = document.createElement('button');
        button.classList.add('deleteButton');
        button.textContent = 'x';

        button.addEventListener('click', deleteName);

        return button;
    }

    function createSpan(name, i) {

        function editItem(){
            inputName.value = name;
            inputName.focus();
            isEditing = true;
            currentIndex = i;
        }
        var span = document.createElement('span');
        span.classList.add('clickable');
        span.textContent = name;
        span.addEventListener('click', editItem)
        return span;
    }
    var divName = document.querySelector('#names')
    
    var ul = document.createElement('ul');
    divName.innerHTML = '';
    
    for (let index = 0; index < globalNames.length; index++) {
        const element = globalNames[index];
        var button = createDeleteButton();
        var li = document.createElement('li');
        var span = createSpan(element, index);

        li.appendChild(button);
        li.appendChild(span);
        ul.appendChild(li);
        
    }
    divName.appendChild(ul);
    clearInput();
}

function clearInput(){
    inputName.value = '';
    inputName.focus();
}