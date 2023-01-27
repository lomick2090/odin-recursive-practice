function fibs(n) {
    array = [];
    for (let i=0; i < n; i ++) {
        if (i < 2) {
            array.push(1);
        } else {
            array.push(array[i-1]+array[i-2]);
        }
    }
    return array;
}

console.log(fibs(10));

function fibsRec(n, array = []) {
    if (n <= 0) {
        return array;
    } 

    while (array.length < 2) {
        array.push(1);
        n--
    }

    array.push(array[array.length-2]+ array[array.length-1]);
    return fibsRec(n-1, array)
}

console.log(fibsRec(10));
