import ev from "./events.js";

ev.emit("testeEvent", "Ronaldo Vascpncelos");


ev.on("testeEvent", obj => {
    console.log('Ouviu esse tbm');
});
