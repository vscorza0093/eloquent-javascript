function range(start, end, modifier = 1){
    let new_array = []
    if (modifier < 1){
        for (let i = start; i >= end; i += modifier) {
            new_array[i] = i;
        }
    }
    else{
        for (let i = start; i <= end; i += modifier) {
            new_array[i] = i;
        }
    }
    return new_array;
}

function sum(array){
    let sum = 0;
    array.forEach(num => sum += num)
    return sum;
}
console.log(range(5, 2, -1))
console.log(sum(range(5,2,-1)))
console.log(sum(range(1,10)))