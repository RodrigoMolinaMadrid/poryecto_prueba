// En esta funcioón queremos que se añada un item a un array.
function netxInLine(arr,item){
    arr.push(item);
    return arr[0];
}
var testArray = [1,2,3,4,5]

console.log("Before: " + JSON.stringify(testArray))
console.log(netxInLine(testArray,6))
console.log("After: " + JSON.stringify(testArray))
