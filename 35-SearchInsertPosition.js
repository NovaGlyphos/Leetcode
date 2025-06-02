var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    if(target > nums[right]){
        return right+1;
    }
    while(right>=left){
        let mid = Math.floor((left+right)/2);
        if(target === nums[mid]){
            return mid;
        }
        else if(target<nums[mid]){
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return left;
};