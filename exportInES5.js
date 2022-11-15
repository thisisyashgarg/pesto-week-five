let v = 1;
function inc(){
    v++;
}
function print(){
    console.log(v);
}

module.exports = {inc, print};

module.exports.inc = inc;
module.exports.print = print;