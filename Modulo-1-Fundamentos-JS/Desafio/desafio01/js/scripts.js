var input = document.querySelectorAll("input");


function rgbCores() {
    var red = document.getElementById("red").value,
         green = document.getElementById("green").value,
         blue = document.getElementById("blue").value;


       var cores = document.getElementById('cores');
       cores.style.background = "rgb(" + red + ", " + green + " ," + blue + ")";
}

for (var i = 0; i < input.length; i++) {
    input[i].addEventListener("input",rgbCores)
}



