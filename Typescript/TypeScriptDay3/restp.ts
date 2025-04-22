function sum(...numbers: number[]): number {
    // return numbers.reduce((total, num) => total + num, 0); // take 2 param data, accept
    let total = 0;
    for(let num of numbers) {
        total += num;
    }
    return total;
}

const res = sum(1,2,3);
console.log(res);