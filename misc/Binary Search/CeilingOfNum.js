//Notes:
//Ceiling of a number means that particular number or a number greater than it


const Ceiling = (arr,target) => {
    let start = 0;
    let end = arr.length-1;   // 8
    while(start <= end){     // 0 < 8
        let mid = Math.floor((start+end)/2);      // 4   => element:7
        if(arr[mid] === target){
            return mid;
        }
        else if(target>arr[mid]){
            start = mid + 1;
        }
        else{
            end = mid - 1
        }
    }
    return start;
}


const arr = [2,4,5,6,7,8,10,13,15];
const result = Ceiling(arr,16);
console.log(result);

