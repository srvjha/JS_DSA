var uniqueOccurrences = function(arr) {
    const countMap = new Map()

    for(const num of arr){
        countMap.set(num,(countMap.get(num) || 0) + 1)
    }

    const counSet = new Set()

    for(const count of countMap.values()){
        if(counSet.has(count)) return false
        counSet.add(count)
    }

    return true
   
};