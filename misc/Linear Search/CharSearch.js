
const CharacterSearch = (String,target) => {
    const arr = String.split('');
    if(arr.length === 0){
        return "Empty String";
    }
    for(let i=0;i<=arr.length-1;i++){
        if(arr[i] === target){
            return i;
        }
    }
    return "No character found";
}

const result = CharacterSearch("","k");
console.log(result);