//모든 조합 구하기
const getCombination = (list, remainCount) => {
    if(remainCount === 0) return list.map(v=>[v])
    let temp = []
    
    for (let i = 0 ; i<list.length ; i++){
        const newNum = list[i]
        const combinations = getCombination(list.slice(i+1),remainCount-1)
        const newCombinations = combinations.map(value => [newNum, ...value])
        temp.push(...newCombinations)
    }
    
    return temp
}

// 주사위 목록으로 가능한 "합 → 빈도수" 맵 구하기
const getSumFrequencies = (diceList) => {
    let freq = new Map();
    const dfs = (idx, sum) => {
        if (idx === diceList.length) {
            freq.set(sum, (freq.get(sum) || 0) + 1);
            return;
        }
        for (const face of diceList[idx]) {
            dfs(idx+1, sum+face);
        }
    };
    dfs(0, 0);
    return freq;
};


function solution(dice) {
    const diceList = Array.from({length: dice.length}, (_, i)=>i)
    const combinations = getCombination(diceList, dice.length/2-1)
    
    let bestWin = -1;
    let bestChoice = [];

    for (const comb of combinations) {
        const aDice = comb.map(i => dice[i]);
        const bDice = diceList.filter(i => !comb.includes(i)).map(i => dice[i]);

        const aFreq = getSumFrequencies(aDice);
        const bFreq = getSumFrequencies(bDice);

        let win = 0;

        for (const [aSum, aCount] of aFreq.entries()) {
            for (const [bSum, bCount] of bFreq.entries()) {
                if (aSum > bSum) win += aCount * bCount;
            }
        }

        if (win > bestWin) {
            bestWin = win;
            bestChoice = comb.map(i => i+1); // 1-based index로
        }
    }
  return bestChoice.sort((a,b)=>a-b);
}