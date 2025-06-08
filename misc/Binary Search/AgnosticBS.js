

const AgnosticBS = (nums,target) => {
    let start = 0;
    let end = nums.length-1;
    //We have the array that is sorted 
    // we dont know whether our array is sorted in ascending order or descending order
    //First we will check the order of array
    let isAsc = nums[start]<nums[end];
    
    while(start <= end){
        let mid = Math.floor((start+end)/2);

        if(target === nums[mid]){
            //ans found
            return mid;
        }

        if(isAsc){
            //Ascending order - Normal BS
            if(target > nums[mid]){
                start = mid + 1;
            }
            else{
                end = mid - 1;
            }
        }
        else{
            //Descending order
            if(target > nums[mid]){
                end = mid - 1;
            }
            else{
                start = mid + 1;
            }
        }
    }
    return -1;
}

const Darr = [90,75,18,12,6,4,3,1];
const Aarr = [1,2,3,5,6,8,10];
const result = AgnosticBS(Darr,3);
console.log(result);
