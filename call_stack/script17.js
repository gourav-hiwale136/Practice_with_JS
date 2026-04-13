function first() {
    console.log("First Start");
    second();
    console.log("First End");
}

function second() {
    console.log("Second Start");
    third();
    console.log("Second End");
}

function third() {
    console.log("Third Running");
}

first();


// First Start
// Second Start
// Third Running
// Second End
// First End