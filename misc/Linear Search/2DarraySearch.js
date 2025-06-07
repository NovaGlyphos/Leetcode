
const _2DarraySearch = (matrix,target) => {
    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[row].length ; col++){
            if(target === matrix[row][col]){
                return [row,col];
            }
        }
    }
    return [-1,-1];
}


const matrix = [[1,2,3],[5,6,7],[8,9,10]]
const result = _2DarraySearch(matrix,19);
console.log(result);




// for(let i = 0; i < matrix.length ; i++){
//     for(let j = 0; j < matrix[i].length ; j++){
//         console.log(matrix[i][j]);
//     }
//     console.log("");
// }