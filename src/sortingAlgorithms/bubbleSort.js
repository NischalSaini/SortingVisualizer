export function bubbleSort(array) {
    let steps = [];
    let n = array.length;
    let tempArray = array.slice();

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (tempArray[j] > tempArray[j + 1]) {
                
                [tempArray[j], tempArray[j + 1]] = [tempArray[j + 1], tempArray[j]];
                steps.push(tempArray.slice()); 
            }
        }
    }

    return steps;
}
