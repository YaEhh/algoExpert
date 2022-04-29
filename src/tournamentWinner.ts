import { sortedSquareArrayFaster } from "./sortedSquareArray";

export function tournamentWinner(competitions: string[][], results: number[]) : string {

    let currentBestTeam : string = ''
    const pointMap: {[key:string] : number} = {[currentBestTeam] : 0};

    for(let idx: number = 0; idx < results.length; idx++) {
        const idxOfWinnerInCompetition = results[idx] == 0 ? 1 : 0;
        const winner: string = competitions[idx][idxOfWinnerInCompetition];
        let winnerScore: number = winner in pointMap ? pointMap[winner] : 0
        
        winnerScore += 3;
        pointMap[winner] = winnerScore;

        if (winnerScore > pointMap[currentBestTeam]) {
            currentBestTeam = winner;
        }
    }
    return currentBestTeam;
}


console.log(tournamentWinner([
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
], [0, 1, 1]));