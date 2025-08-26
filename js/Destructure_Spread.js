const person = ['John', 'Doe', 'John', 'Marc', 'Andreuw'];
const [a, b,...c] = person;
console.log(c[2]);


const names = [
    {name: 'Ruy'},
    {name: 'Mimi'},
    {name: 'Kiki'},
    {name: 'Bolt'},
]
//Je copie le tableau names et j'ajoute 2 nouveaux objets
const obj = [...names, {name: 'John'},{name: 'Doe'}];
console.log(obj);

// --- IGNORE ---
//Mme logique que spread mais ont passe les arguments dans la function
function Rest(...args){
    console.log(args);
}
Rest(
    {name: 'Ruy'},
    {name: 'Claude'},
    {name: 'John'},
    {name: 'Doe'},
)
