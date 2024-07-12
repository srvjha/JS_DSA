

function mergeSort(array){
    if(array.length === 1) return array;

    const middle = Math.floor(array.length/2);
    const left = array.slice(0,middle)
    const right = array.slice(middle)

    return merge(mergeSort(left),mergeSort(right))
}


function merge(left,right){
    let result = [];
    let leftSide = 0;
    let rightSide = 0;

    while(leftSide<left.length && rightSide<right.length){
        if(left[leftSide]<right[rightSide]){
            result.push(left[leftSide]);
            leftSide++;
        } else {
            result.push(right[rightSide]);
            rightSide++;
        }
    }

    // fill the remaining part
    while(leftSide<left.length){
        result.push(left[leftSide])
        leftSide++;
    }

    while(rightSide<right.length){
        result.push(right[rightSide])
        rightSide++;
    }

    return result
}

console.log(
    mergeSort([4,3,5,1,2,3,4,100])
)