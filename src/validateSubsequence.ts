// O(n) | O(1) space
export function isValidSubsequence(array: number[], sequence: number[]) : boolean {
    // need to iterate over array
    // need to keep track of index in sequence is contained in array 
    let sequenceIdx: number = 0;

    array.forEach(num => {
        if (sequence[sequenceIdx] == num) {
            sequenceIdx++;
        }
    })

    return sequenceIdx == sequence.length ? true : false;
}

const result: boolean = isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]);
console.log(result);