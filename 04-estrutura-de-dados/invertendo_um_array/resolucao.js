function reverseArray (array){
    let new_array = []
    i = array.length -1;
    array.forEach(element => {
        new_array[i] = element;
        i--;
    });
    return new_array;
}

console.log(reverseArray(["a","b","c"]));

function reverseArrayInPlace (array){
    let j = array.length -1;
    for (let i = 0; i < array.length; i++) {
        if(j == i){
            break;
        }
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        j--;
    }
    return arr;
}

arr = [1, 2, 3, 4, 5, 6, 7];
console.log(reverseArrayInPlace(arr));