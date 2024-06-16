

// Iterative Approach
// Problem Statement

// arr=[3,2,4,5,6,7,5]
// elementTobeFound = 5
// currentIndex=0

function firstOccurance(arr,elementTobeFound,currentIndex)
  {
    while(currentIndex<arr.length)
        {
            if(arr[currentIndex]===elementTobeFound) return currentIndex
            else currentIndex+=1
        }
        return -1;
  }
   let myArr = [3,2,4,5,6,7,5]
//   console.log(firstOccurance(myArr,5,0))

function recursiveFirstOcc(arr,elementTobeFound,currentIndex){
    // Base Case
    if(arr[currentIndex]===elementTobeFound) return currentIndex
    if(arr.length===currentIndex) return -1

    return recursiveFirstOcc(arr,elementTobeFound,currentIndex+1)
}

console.log(recursiveFirstOcc(myArr,5,0))