//ACCIDENTAL KEYS PROBLEM IN OBJECTS
let map = {};
console.log(map.constructor);

let word = 'constructor';
if(map[word]){
    map[word] = map[word] + 1;
}
console.log(map);


//MAP STRUCTURE
let map2 = new Map([
    [23, 'yash'],
    [221, 'tie'],
 ]);
console.log(map2);