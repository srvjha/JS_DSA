


var increasingTriplet = function(nums) {
    let smallest  = Infinity;
    let sceondSmallest = Infinity;

    for (const num of nums) {
        if(num<=smallest){
            smallest = num
        }
        else if(num<=sceondSmallest){
            sceondSmallest = num
        }
        else{
            return true
        }
    }
    return false

};

console.log(increasingTriplet([1,2,3,4,5]));
console.log(increasingTriplet([2,1,5,0,4,6]));
console.log(increasingTriplet([5,4,3,2,1]));