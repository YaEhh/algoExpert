// O(nlogn) time | O(n) space - where n is the length of the input array
export function sortedSquareArray(array: number[]): number[] {
    return array.sort((a, b) => Math.abs(a) - Math.abs(b)).map(num => Math.pow(num, 2));
}

// O(n) time | O(n) space - where n is the length of the input array
export function sortedSquareArrayFaster(array: number[]): number[] {
    const sortedSquares = new Array(array.length).fill(0);
    let smallerValueIdx = 0;
    let largerValueIdx = array.length - 1;
    for (let idx = array.length - 1; idx >= 0; idx--) {
        const smallerValue = array[smallerValueIdx];
        const largerValue = array[largerValueIdx];
        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            sortedSquares[idx] = smallerValue * smallerValue;
            smallerValueIdx++;
        } else {
            sortedSquares[idx] = largerValue * largerValue;
            largerValueIdx--;
        }
    }
    return sortedSquares;
}

console.log(sortedSquareArray([-3, -2, -1]));