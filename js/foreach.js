
var arr = ["John", "Doe", "Admin"];

for(var i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(function(value, index){
    console.log(index + " : " + value);
})