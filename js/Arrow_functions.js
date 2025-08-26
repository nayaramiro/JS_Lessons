//Nouvelle syntaxe pour les fonctions
const Test = (Par) => {
    console.log(Par);
}
Test("Hello");
// -------------------


// Je passe un props et une function en callback
const Test2 = (text, par)=>{
    par(text)
}
//J'apelle la function en lui donnant le props et une function avec le props
// Ce que je passe comme 2ème argument est la function callback
Test2('Test2',(text)=>{
    console.log(text);
})


const Test3 = (message, callback) => {
  console.log(message);
  if (callback) callback();
};
Test3("2", () => {
  console.log("Test3 callback exécuté");
});