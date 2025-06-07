//Search for an element in the range of [1,4];

const searchInRange = (arr,target,lower,upper) => {
    if(arr.length === 0){
        return "Empty Array";
    }
    if(upper>=arr.length){
        return "Out of range"
    }
    if(upper>lower){
        for(let i=lower;i<=upper;i++){
            if(target === arr[i]){
                return i;
            }
        }
    }
    return "No element found";
}

const result = searchInRange([],28,1,9);
console.log(result);
