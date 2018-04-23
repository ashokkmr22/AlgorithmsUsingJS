/**
 * This Function is used to print the 2D array value by spiral notation.
 *
 * @since 1.0.0
 * @author Ashok
 * @see https://www.geeksforgeeks.org/print-a-given-matrix-in-spiral-form/
 * @example
 *
 * input array [[2,1,3,4],[3,4,5,1],[9,8,7,1],[7,2,7,1]]
 *
 * output array [ 2, 1, 3, 4, 1, 1, 1, 7, 2, 7, 9, 3, 4, 5, 7, 8 ]
 */
/**
   * @method circularArray
   * @param {array} inputArray [ input array ]
   * @return {array} result array
   */
function spiralArray(array){
  var row = array[0].length;
  var column = array.length;
  /**
  * @var {number} startingRowIndex [ Starting row index of the given array ]
  * @var {number} endingRowIndex [  Ending row index of the given array ]
  * @var {number} startingColIndex [  Starting column index of the given array ]
  * @var {number} endingColIndex [  Ending column index of the given array ]
  */
  var startingRowIndex =0;
  var endingRowIndex = row;
  var startingColIndex = 0;
  var endingColIndex = column;
  var resultArray = [];
  //console.log(endingRowIndex,endingColIndex);
  while(startingRowIndex < endingRowIndex && startingColIndex < endingColIndex){
    
    //get first row element
    for(let i = startingColIndex; i < endingColIndex; i++){
      resultArray.push(array[startingRowIndex][i]);
    }
    startingRowIndex++;
    //get last column element
    for(let i = startingRowIndex; i < endingRowIndex; i++){
      resultArray.push(array[i][endingColIndex - 1]);
    }
    endingColIndex--;
    //get last row element
    if(startingRowIndex < endingRowIndex){
      for(let i = endingColIndex - 1;i >= startingColIndex; i--){
        resultArray.push(array[endingRowIndex - 1][i]);
      }
      endingRowIndex--;
    }
    //get first column element
    if(startingColIndex < endingColIndex){
      for(let i = endingRowIndex - 1; i >= startingRowIndex; i--){
        resultArray.push(array[i][startingColIndex]);
      }
      startingColIndex++;
    }
   
  }
  return resultArray;
}
spiralArray(array);