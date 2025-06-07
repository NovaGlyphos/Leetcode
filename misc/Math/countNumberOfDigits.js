

const numberOfDigits = (x) => {
    let count = 0;
    while(x>0){
        let lastDigit = x%10;     
        count++;
        x=Math.floor(x/10);
    }
    return count;
}

console.log(numberOfDigits(128));