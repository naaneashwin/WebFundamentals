//Question 1
console.log("Hello World");

//Question 2
//Check for Prime numbers
let n = 29;
let res = 0;
for(let i=1; i<=n; i++){
    if(n%i===0){
        res++;
    }
}
if(res===2) console.log("Prime Number");
else console.log("Not a prime number");