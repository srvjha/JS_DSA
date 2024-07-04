var largestAltitude = function(gain) {
    let altitude = 0
    let netSum = 0

    for(let i=0;i<gain.length;i++){
        netSum += gain[i]
        altitude = Math.max(altitude,netSum)
    }

    return altitude
};