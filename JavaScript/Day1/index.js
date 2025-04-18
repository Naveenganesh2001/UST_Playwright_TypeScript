/*function btnclick(){
    alert('hello')
}*/

let a = 5;
let b = 6;

//const c = 45;

/*console.log(c);
console.log("Sum of "+ a + " & " + b + " is "+ (a + b));
console.log("Subtraction is ",a - b);
console.log(`Product of ${a} & ${b} is ${a * b}`);
console.log(`Division of ${a} & ${b} is ${a / b}`);
console.log(`Remainder of ${a} & ${b} is ${a % b}`);*/

let val = true;
//console.log(!val);
let arr = ["Naveen", "adsd", true, 23,0,"nav"];
//console.log(arr);

for(let i = 0; i<arr.length; i++){
    //console.log(arr[i]);
}

for(const name in arr){
    //console.log(arr[name]);
}

for(const name of arr){
    //console.log(name);
}

arr.forEach(
    function(e){
        //console.log(e)
       // process.stdout.write(e + " "); 
    }
);

arr.push("meow")
//arr.forEach((e) => console.log(e));
arr.pop();//remove last element
//arr.forEach((e) => console.log(e));

//arr.filter((e) => e.toString().startsWith('N'))
   // .forEach((e) => console.log(e));

arr 
    .filter((e) => Number.isInteger(e))
    .map((e) => e*2)
    //.forEach((e) => console.log(e));


// JSON --> Javascript Object Notation
let obj = {
    name: "Naveen",
    role: "Trainee",
    exp: "2",
    lang: ["Java", "Python", "C"]
}
//obj.lang.push("playwright")
//console.log(obj.lang);
console.log([...obj.lang, "playwright"])// spread operator
console.log(obj);

function add(a,b=10){
   // console.log(a+b);
}
add(5,20);

function rec(a) {
    if(a == 10) {
    // termination
    }
    rec(a + 1)
}
rec(1);


