// Ajax Example traditional
/*
var request = new XMLHttpRequest();
request.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);
request.onload = function(){
    if(this.status >= 200 && this.status < 400){
        var data = JSON.parse(this.response);
        console.log(data);
    } else {
        console.log('Error server');    
    }
}
*/

//fetch Example GET
//Je lui passe l'url et je mets la response en json, puis je l'affiche dans la console
fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json())
.then(json => console.log(json))

var title = 'foo';
var body = 'bar';
var userId = 1;


//method POST avec Fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: "POST",
    body: JSON.stringify({
        title: title,
        body: body,
        userId: userId
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    }
}).then(res => res.json())
.then(json => console.log(json))