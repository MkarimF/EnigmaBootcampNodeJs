const username = ["ichigo", "naruto", "luffy", "goku", "tanjiro"];

console.log("Looping array pakai for");
for (let i = 0; i < username.length; i++) {
    const usernamecheck = username[i];
    if (usernamecheck.length > 5) {
        console.log("husbu mu tidak ada yang lebih dari 5 karakter");
    }
}
// username.forEach(item) => {
//     if (item.length > 5) {
//         console.log("husbu mu tidak ada yang lebih dari 5 karakter");
//     }
// };


function laptopGpu(x, y) {
    let paired = [];
    for (let i = 0; i < x.length; i++) {
        paired.push({ laptop: x[i], gpu: y[i] });
    }

    const xSorted = x.sort();
    const ySorted = y.sort((a, b) => a - b);


    const result = xSorted.map((laptop, index) => {
        return `{${laptop} dengan gpu ${ySorted[index]}}`;
    });
    return result;
}

let laptop = ["asus", "lenovo", "acer", "hp", "axioo"];
let gpu = [4070, 4090, 4050, 4080, 4060];
let laptop2 = ["macbook","dell","SAMSUNG"]
let gpu2 = [1000,3000,5000]
console.log(laptopGpu(laptop, gpu));
console.log(laptopGpu(laptop2, gpu2));