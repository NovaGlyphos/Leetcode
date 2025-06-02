var search = function(nums, target) {
    let left = 0;
    let right = nums.length;
    while(right >= left){
        let mid = Math.floor((right+left)/2);
        if(target === nums[mid]){
            return mid;
        }
        else if(target > nums[mid]){
            left = mid+1;
        }
        else{
            right = mid-1;
        }
    }
    return -1;
};