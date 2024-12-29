//equal to
const a = 10;
const b = 10;
console.log(a == b);

//strict equal to
const c = 10;
const d = '10';
console.log(c === d);//false

//not equal to
const e = 10;
const f = 5;
console.log(e != f);

//strict not equal to
const g = 10;
const h = '10';
console.log(g !== h);

//greater than
const i = 10;
const j = 5;
console.log(i > j);

//greater than or equal to
const k = 10;
const l = 10;
console.log(k >= l);

//less than
const m = 10;
const n = 5;
console.log(m < n);

//less than or equal to
const o = 10;
const p = 10;
console.log(o <= p);

//Logical Operators
//and   
const q = 10;
const r = 5;
const s = 15;
const t = 20;
console.log(q > r && s > t); //false
console.log(q > r && s < t); //true

//or
const u = 10;
const v = 5;
const w = 15; 
const x = 20;
console.log(u > v || w > x); //false
console.log(u > v || w < x); //true
