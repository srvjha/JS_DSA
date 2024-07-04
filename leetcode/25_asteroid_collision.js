// var asteroidCollision = function(asteroids) {
//     let result=[]
//     for(const asteroid of asteroids){
        
//        if(asteroid>0) result.push(asteroid)
//        else if(asteroid<0){
//         let prevAsteroid = result.pop()
//         if(prevAsteroid===Math.abs(asteroid)){
//             return result;
//         }
//         let maxAsteroid = Math.max(prevAsteroid,Math.abs(asteroid))
//         result.push(maxAsteroid)
//        }
//     }
//     return result
// };

var asteroidCollision = function(asteroids) {
    let stack=[]
    for(let asteroid of asteroids){
       let explode = false
       while(stack.length > 0 && asteroid<0 && stack[stack.length-1]>0){
        const rightAsteroid = stack.pop()
        if(rightAsteroid === Math.abs(asteroid)){
            explode = true
            break
        } else if(Math.abs(asteroid)<rightAsteroid){
            asteroid=0
            stack.push(rightAsteroid)
            break
        }
       }
       if(!explode && asteroid!==0){
        stack.push(asteroid)
       }
      
    }
    return stack
};