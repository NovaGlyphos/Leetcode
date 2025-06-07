


var maximumWealth = function(accounts) {
    let wealth=Number.MIN_VALUE;
    //customer = row h
    //accounts = column h
    for(let customer = 0 ; customer < accounts.length ; customer++){
        let wealthAtThatParticularRow = 0;
        for(let account = 0; account < accounts[customer].length ; account++){
            wealthAtThatParticularRow += accounts[customer][account]
        }

        //checking maximum wealth now....
        if(wealthAtThatParticularRow>wealth){
            wealth = wealthAtThatParticularRow;
        }
    }
    return wealth
};

const accounts = [[2,8,7],[7,1,3],[1,9,5]];
const maxWealth = maximumWealth(accounts);
console.log(maxWealth);