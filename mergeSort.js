function mergeSort(array) {
    let l = array.length;
    if (l < 2) {
        return array;
    }
    let arrayLeft=array.slice(0, Math.round((l)/2));
    let arrayRight=array.slice(Math.round((l)/2));

    function merge(array1, array2) {
        let i = 0;
        let j = 0;
        let k = 0;
        let sortedArray = [];
        while (i < array1.length || j < array2.length) {
            if (i < array1.length) {
                if (array1[i] <= array2[j] || j == array2.length) {
                    sortedArray[k] = array1[i];
                    i++;
                    k++;
                } else {
                    sortedArray[k] = array2[j];
                    j++;
                    k++;
                }
            } else {
                sortedArray[k] = array2[j];
                j++;
                k++;
            }
        }
        return sortedArray;
    }

    return merge(mergeSort(arrayLeft), mergeSort(arrayRight))
    
}

array = [8,98,65,8,4,8,5,44,5,5,11,2356,98542,552,44,11,10,22,7,8];
console.log(array);
console.log(mergeSort(array));