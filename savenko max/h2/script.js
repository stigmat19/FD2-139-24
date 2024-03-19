const arr = [5,7,[4,[2],8,[1,3],2],[9,[]],1,8];

function treeSum(array){
    let total = 0;

    for(let i = 0; i<array.length; i++){
        if (typeof array[i] === 'object'){
            total += treeSum(array[i])
        }
        else if (typeof array[i] === 'number'){
            total += array[i]
        }   
    }
    return total
}
console.log('result:', treeSum(arr)); 

