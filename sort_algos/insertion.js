function insertionSort(array){
    // start from 2nd position
    for(let i = 1; i < array.length; i++){
        let currentElement = array[i]
        let pastElement = i-1
        while(pastElement>=0 && array[pastElement]>currentElement){
            array[pastElement + 1] = array[pastElement]
            pastElement--;
        }
        array[pastElement + 1]  = currentElement
        console.log(`${array.join(', ')}`)
    }
}

let array = [1,6,7,4,2,9];
insertionSort(array);