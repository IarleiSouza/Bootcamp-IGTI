// Decalrar variaveis com let e var

let a = 1;
const b = 1;
//b = 2;

function teste () {
    for (var i = 0; i < 5; i++) {
    //fazer algo    
    }

for (let j = 0; j < 5; j++) {
    //fazer algo
    console.log("j: " + j);
}
console.log("i: " + i);
//console.log("j: " + j);
}
teste();