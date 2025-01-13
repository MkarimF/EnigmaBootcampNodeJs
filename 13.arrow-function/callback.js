function sum(x,y){
    return x + y;
}
function kalkulator(a,b,callback){
    return callback(a,b);
}

const sum2 = (x,y) => x + y;

const kalkulator2 = (a,b,callback) => callback(a,b);

console.log(kalkulator(2,3,sum));