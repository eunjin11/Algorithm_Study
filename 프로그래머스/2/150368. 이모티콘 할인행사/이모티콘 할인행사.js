const getCombination = (list, remainCount) => {
    if(remainCount === 0) return list.map(v=>[v])
    let temp = []
    
    for (let i = 0 ; i<list.length ; i++){
        const newNum = list[i]
        const combinations = getCombination(list,remainCount-1)
        const newCombinations = combinations.map(value => [newNum, ...value])
        temp.push(...newCombinations)
    }
    
    return temp
}

function solution(users, emoticons) {
    const discounts = [10, 20, 30, 40]
    //emoticons*discount에서 가능한 모든 조합을 구함 => m*m*m....
    //모든 조합을 순회하면서 [플러스 가입자 수, 총 판매액]을 구함
    // result 배열을 가입자 수와 판매액 기준으로 정렬하고, 첫번째 요소 반환
    
    const combinations = getCombination(discounts, emoticons.length-1)

    const result = []
    
    const emoticonsLen = emoticons.length
    
    for(discountList of combinations){
        let priceSum = 0
        let plusUserCount = 0
        for(u of users){
            let priceSumPerUser = 0
            const [minDiscount, maxPrice] = u
            for(let i=0 ; i<emoticonsLen;i++){
                const price = emoticons[i]
                const discount = discountList[i]
                if(discount>=minDiscount) priceSumPerUser+=price*((100-discount)/100)
                if(priceSumPerUser>=maxPrice){
                    priceSumPerUser=0
                    plusUserCount+=1
                    break
                }
            }
            priceSum+=priceSumPerUser
        }
        result.push([plusUserCount, priceSum])
    }

    result.sort((a,b)=> b[0]-a[0]||b[1]-a[1])

    return result[0];
}