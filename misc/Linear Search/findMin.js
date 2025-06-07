

const minNum = (arr) => {
    let min = arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}

const minimum = minNum([2,64,7675,2427,92,32,2428]);
console.log(minimum);