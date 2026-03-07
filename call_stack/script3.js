console.log("start");


setTimeout(()=>{
    console.log("Timeout 1");

    Promise.resolve().then(()=>{
    console.log("Promise 1");
    
    })
    
}, 0);

Promise.resolve().then(()=>{
    console.log("promise 2");

    setTimeout(()=>{
        console.log("Timeout 2");
        
    }, 0)
    
})


async function test() {
    console.log("Async start");

    await Promise.resolve()

    console.log("async after await");

    Promise.resolve().then(()=>{
        console.log("promise inside async");
        
    })
       
}

test();


console.log("end");
