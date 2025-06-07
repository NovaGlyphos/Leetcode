
const max = (matrix) => {
    let max = matrix[0][0];
    for(let row = 0 ; row < matrix.length ; row++){
        for(let col = 0 ; col < matrix[row].length ; col++){
            if(matrix[row][col]>max){
                max = matrix[row][col];
            }
        }
    }
    return max;
}

const matrix = [[1,2,3],[5,16,7],[8,9,10]]
const maximum = max(matrix);
console.log(maximum)