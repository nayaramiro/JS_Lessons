// Templates String = Espaces et sauts de ligne conservés
var nameDog = "Bolt";
var context = `
Ceci est mon contenu
sur plusieurs lignes
et avec des espaces
${nameDog}
`;

//let ne fonctionne que dans le scope où elle est déclarée
{
  //variable global
  var nameDog = "Ruy";

  //variable local
  let nameCat = "Mimi";
  function showName() {
    let nameBird = "Kiki";
    console.log(nameDog, nameCat, nameBird);
  }
  console.log(nameCat);
}

showName();
console.log(nameDog);
