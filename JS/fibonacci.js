// implementation of fibonacci sequence using for loop
function fibs(num) {
    if (num < 0) {
        return 'NUMBER MUST BE POSITIVE';
    }

    if (num === 0) return [0];
    if (num === 1) return [0, 1];

    const result = [0, 1];

    if (num === 2) return result;

    for (let i = 0; i < num - 2; i++) {
        result.push(result[i] + result[i + 1]);
    }

    return result;
}


console.log(fibs(8));
console.log(fibs(-1));
console.log(fibs(1));
console.log(fibs(0));


// implementation of fibonacci sequence using for loop
function fibsRec(n) {
    if (n < 0) {
        return 'NUMBER MUST BE POSITIVE';
    }

    if (n == 0) return [0]
    if (n == 1) return [0, 1]

    const arr = fibsRec(n - 1)

    return [...arr, arr[n - 1] + arr[n - 2]]
}

console.log(fibsRec(8));
console.log(fibsRec(-1));
console.log(fibsRec(1));
console.log(fibsRec(0));