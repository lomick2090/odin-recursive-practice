function fibs(n) {
    array = [];
    for (let i=0; i <= n; i ++) {
        if (i < 2) {
            array.push(1);
        } else {
            array.push(array[i-1]+array[i-2]);
        }
    }
    return array;
}

console.log(fibs(8));

