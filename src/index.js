if("ServiceWorker" in navigator){
    navigator.serviveWorker.register(se.js).then(registration=>{
        console.log("SW Registered!");
        console.log(registration)
    }).catch(error=>{
        console.log("SW registration failed");
        console.log(error);
    })
}