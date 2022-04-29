export function nonConstructibleChange(coins: number[]) : number {
    // start from 1 and increment and try to construct it 

    coins.sort();

    let coinSequence : number[] = []

    for (let idx: number = 0; idx < coins.length; idx++) {
        const target = idx + 1;
        coinSequence.push(coins[idx]);
        if (constructChangeFromCoinSequence(coinSequence, target )) {
            continue;
        } else {
            return target;
        }
    }

    return 0;
}

function constructChangeFromCoinSequence(coinSequence : number[], target: number) : boolean {
    // 
    return coinSequence.reduce((a,b) => a + b, 0) == target ? true : false;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));