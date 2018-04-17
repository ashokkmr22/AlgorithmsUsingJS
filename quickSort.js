/**
 * This Class is used to sort an array by using Quicksort algorithm.
 *
 * @since 1.0.0
 * @author Ashok
 * @see https://www.geeksforgeeks.org/quick-sort/
 * @example
 *
 * input array [10, 90, 60, 8, 80]
 *
 * output array [ 8, 10, 60, 80, 90 ]
 */

class QuickSort{
  /**
   * @constructor constructor function of QuickSort class
   * @param {array} inputArray [ input array ]
   * @param {string} option [ "ASC/asc" or "DESC/desc" ]
   */
  constructor(inputArray, option){
    this.option = option.toLowerCase();
    this.result = this.quickSort(inputArray, 0, inputArray.length - 1, option);
  }
  /**
   * @method QuickSort.swapArrayByIndex
   * @param {array} inputArray [ input array ]
   * @param {number} from [ Swap from index value]
   * @param {number} to [ Swap to index value]
   * @return {array} Swaped array
   */
  swapArrayByIndex(inputArray, from, to){
    var swapTemp = inputArray[to];
    inputArray[to] = inputArray[from];
    inputArray[from] = swapTemp;
    return inputArray;
  }
   /**
   * @method QuickSort.partition
   * @param {array} inputArray [ input array ]
   * @param {number} lowestIndex [ Initial index value of the input array ]
   * @param {number} highestIndex [ Lase index value of the input array ]
   * @return {array} Sort array & index value
   */
  partition(inputArray, lowestIndex, highestIndex){
    //Taking array last value from the
    var pivotValue = inputArray[highestIndex];
    var i = lowestIndex - 1;
    var result = {};
    for (var j = 0; j <= highestIndex - 1; j++){
      // If current element is smaller than or equal to pivot
      if((inputArray[j] <= pivotValue && this.option === "asc") || (inputArray[j] >= pivotValue && this.option === "desc") ){
        i++;
        //Swap the array
        inputArray = this.swapArrayByIndex(inputArray, i, j);
      }
    }
    result.inputArray  = this.swapArrayByIndex(inputArray, i+1, highestIndex);
    result.index = i+1;
    return result;
  }
  /**
   * @method QuickSort.partition
   * @description Main method holds all the logics
   * @param {array} inputArray [ input array ]
   * @param {number} lowestIndex [ Initial index value of the input array ]
   * @param {number} highestIndex [ Lase index value of the input array ]
   * @return {array} sorted array
   */
  quickSort(inputArray, lowestIndex, highestIndex){
    if(lowestIndex < highestIndex){
      var partitionResult = this.partition(inputArray, 0, highestIndex);
  
      this.quickSort(partitionResult.inputArray, lowestIndex, partitionResult.index - 1);//QuickSort Right
      this.quickSort(partitionResult.inputArray, partitionResult.index + 1, highestIndex);//QuickSort Left
    }
    return partitionResult;
  }
}

const inputArray = [10,90,60,8,80];
var quickSortInstance = new QuickSort(inputArray, "asc");
console.log(quickSortInstance.result);
