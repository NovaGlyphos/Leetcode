// You are given an array of characters letters that is sorted in non-decreasing order (ascending order), 
// and a character target. There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than 
// target. If such a character does not exist, return the first character in letters.


//["g","k","k","w"]
//target = j 
// return k

//target = x 
//return g

var nextGreatestLetter = (letters,target) => {
    let start = 0;
    let end = letters.length - 1;
    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(target >= letters[mid]){
            start = mid + 1;
        }
        else if(target < letters[mid]){
            end = mid - 1;
        }
    }
    if(start === letters.length){
        return letters[0];
    }
    return letters[start];
}

const letters = ["x","x","y","y"];
const result = nextGreatestLetter(letters,"z");
console.log(result);
