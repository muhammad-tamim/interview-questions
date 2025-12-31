function sumArray(arr) {
    return arr.reduce((total, num) => total + num, 0);
}


console.log(sumArray([1, 2, 3, 4])); // 10
console.log(sumArray([5, 10, 15])); // 30