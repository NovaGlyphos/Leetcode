var findNumbers = function(nums) {
    let evenNumberCount = 0;
    for(let i = 0; i < nums.length ; i++){
        let number = nums[i];
        let cnt = 0;
        while(number>0){
            cnt++;
            number = Math.floor(number/10);
        }
        if(cnt%2 === 0){
            evenNumberCount++;
        }
    }
    return evenNumberCount;
};


const nums = [10,555,0,482,1771]
const evenDigitCount  = findNumbers(nums);
console.log(evenDigitCount);