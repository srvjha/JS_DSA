// [1,2,3,2,5,2]
// key:-2

// Iterative approach

function countKeyOCC(inputArray,key)
{
    let count = 0;
    for(let i=0;i<inputArray.length;i++)
        {
            if(inputArray[i]===key) count++
        }
    return count;
}

//console.log(countKeyOCC([1,2,3,2,5,2],2))


function recurCountKeyOCC(inputArray,key,index=0)
{
    if(index>=inputArray.length) return 0;

    return (inputArray[index]===key?1:0) + recurCountKeyOCC( inputArray, key, index+1);

}
console.log(recurCountKeyOCC([1,2,3,2,5,2],2,0))