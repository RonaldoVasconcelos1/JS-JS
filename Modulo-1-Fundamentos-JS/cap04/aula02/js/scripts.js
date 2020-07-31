window.addEventListener('load', () => {
const nameEmailArray = people.results.map(person => {
    return {
        name: person.name,
        gender : person.gender
    };
 });
 console.log(nameEmailArray);
});

function doMap() {
    
}