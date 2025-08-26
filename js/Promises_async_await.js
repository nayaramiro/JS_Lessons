function Test(){
    return new Promise((resolve, reject)=>{
        const error = false;
        if(error){
            reject("Error...");
        }else{
            resolve("resolved promises...");
        }
    })
}

Test().then((res) => {
    console.error(res);
}).catch((err) => {
    console.error(err);
})


async function TestAsync(){
    //Ceci ne se produit que lorsque la promesse (Test) est résolue
    await Test().then((res) => {
        console.log(res);
    }).catch((err) => {
        console.error(err);
    })
    console.log("Testando...");
}
TestAsync();