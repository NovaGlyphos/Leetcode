// Notes: 
// Floor of a number denotes a greatest no. that is smaller or equal to the target


const Floor = (arr,target) => {
    let start = 0;
    let end = arr.length - 1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(target === arr[mid]){
            return mid;
        }
        else if(target > arr[mid]){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    }
    return end;
}


const arr = [2,3,5,9,14,16,18];
const result = Floor(arr,17);
console.log(result);