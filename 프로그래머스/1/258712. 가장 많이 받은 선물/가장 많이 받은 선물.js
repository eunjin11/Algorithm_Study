const giftInfo = () => {
    let giveCount = 0;
    let takeCount = 0;
        
    const updateGiveCount = () => {
        giveCount+=1;
        return
    }
    
    const updateTakeCount = () => {
        takeCount+=1;
        return
    }
        
    const getGiftScore = () => {
        return giveCount - takeCount
    }
        
    return { updateGiveCount, updateTakeCount, getGiftScore }
}

const getMaxFromHashMap = (keyList, hashMap) => {
    let max=0
    for (key of keyList){
        if(hashMap[key]>max){
            max = hashMap[key]
        }
    }
    return max
}

function solution(friends, gifts) {
    //많이 준 사람이 다음달에는 받음
    //서로 동일하거나 기록 없으면 지수(받은 총합-준 총합) 큰 사람이 작은 사람에게 선물
        //선물 지수도 같다면 주고받지않음
    //가장 많이 받을 친구가 받는 선물의 수

    const friendsCount = friends.length;
    
    const friendsHashMap = {}  //사람마다 주고받은 선물의 개수와 선물 지수를 저장하는 해시맵  
    const giftArr = {} // 사람마다 다른 사람의 이름을 key로 저장하고 준 선물의 개수를 value로 저장한 객체

    for (friend of friends){
        friendsHashMap[friend] = giftInfo()
        giftArr[friend] = {}
        for (takenFriend of friends){
            giftArr[friend][takenFriend] = 0
        }
    } 
    
    // 선물 받은 횟수 계산
    for (gift of gifts){
        const [give, take] = gift.split(" ");
        friendsHashMap[give].updateGiveCount();
        friendsHashMap[take].updateTakeCount();
        giftArr[give][take] += 1;
    }
    
    //사람 이름 - 다음 날 받은 선물 횟수 hash map
    const totalTakenGiftCountList = {}
    for (friend of friends){
        totalTakenGiftCountList[friend] = 0
    }
    

    for (let i = 0 ; i<friendsCount;i++){
        //i+1에서부터 시작해 한번 확인한 사람은 제외하고 확인
        for (let j = i+1 ; j<friendsCount;j++){
            const friend = friends[i];
            const takenFriend = friends[j];
            
            //동일인일 경우 break
            if (friend === takenFriend) break;
            
            //내가 많이 줬을 경우 내가 받음
            if(giftArr[friend][takenFriend]>giftArr[takenFriend][friend]){
                totalTakenGiftCountList[friend]+=1;
            }else if(giftArr[friend][takenFriend]===giftArr[takenFriend][friend]){
                //서로 주고받은 선물의 개수가 같을 경우는?
                if (friendsHashMap[friend].getGiftScore()>friendsHashMap[takenFriend].getGiftScore()){
                    //내 선물 지수가 더 높으면 내가 받음
                    totalTakenGiftCountList[friend]+=1;
                }else if (friendsHashMap[friend].getGiftScore()<friendsHashMap[takenFriend].getGiftScore()){
                    //친구의 선물 지수가 더 높으면 친구가 받음
                    totalTakenGiftCountList[takenFriend]+=1;
                }
                //선물지수마저 일치할 경우 넘어감
            }else{ //아닐 경우 친구가 받음
                totalTakenGiftCountList[takenFriend]+=1;
            }
        }
    }
    
    //max 값 구하기
    const answer = getMaxFromHashMap(friends, totalTakenGiftCountList)
    
    return answer;
}