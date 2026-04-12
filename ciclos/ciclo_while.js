// cuenta desde el 0 hasta el 9
let i = 0;
while(i < 10) {
    console.log("i:" + i);
    i++;
}

console.log("-----------")

let j = 0;
i = 0;
while(j < 10) {
    console.log("j:" + j);
    i++;
    j += i;
}