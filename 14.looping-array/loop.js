const user = [ "naruto", "sasuke", "sakura", "kakashi", "hinata" ];

// Looping array

console.log("Looping array pakai looping");

for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}
console.log(user.map((item) => item.toUpperCase()));