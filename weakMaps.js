//REFERENCE COUNT of obj is 3
let obj = {};
let m = new Map();
m.set('first', obj);
let newObj = { 'second' : obj};

//WEAK MAP DOESNT PREVENT OBJ From Being GARBAGE COLLECTED
//IF ABOVE REF OF OBJ DOESNT EXIST OBJ WILL THEN ALSO BE GC
let weakMap = new WeakMap();
weakMap.set(obj, 32);