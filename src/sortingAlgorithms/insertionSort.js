export const insertionSort = (array) => {
    const steps = [];
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
            steps.push([...array]);
        }
        array[j + 1] = key;
        steps.push([...array]);
    }
    return steps;
};
