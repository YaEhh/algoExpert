// If you value time go with the first, if you value space go with the second

// O(n) |  O(n) space
export function twoNumberSum(array: number[], targetSum: number) : number[] {
    
    const complimentSet : Set<number> = new Set();
    const sumArray: number[] = []

    array.forEach(num => {
        const compliment : number = targetSum - num;
        if (complimentSet.has(num)) {
            sumArray.push(num, compliment);
        } else {
            complimentSet.add(compliment)
        }
    });

    return sumArray;
}

// O(nlog(n)) | O(1) space
export function twoNumberSumAlternative(array: number[], targetSum: number): number[] {

    array.sort((a, b) => {
        return a-b;
    });
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]];
        } else if (currentSum < targetSum) {
            left++;
        } else if (currentSum > targetSum) {
            right--;
        }
    }
    return [];
}

const result: number[] = twoNumberSumAlternative([4,2,5,7], 11);
console.log(result);
