
const LinearSearch = (arr,target) => {
    if(arr.length === 0){
        return "Empty array";
    }
    for(let i=0; i<=arr.length-1;i++){
        if(target === arr[i]){
            return i;
        }
    }
    return -1;
}

const result = LinearSearch([2,1,3,4,5,21,2],22);
console.log(result);