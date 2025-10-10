function solution(cacheSize, cities) {
    let time = 0;
    let caches = []
    
    for(c of cities){
        const city = c.toLowerCase()
        
        let hit = false
        for(let i=0;i<cacheSize;i++){
            if (caches[i]===city){
                time+=1
                caches = [...caches.slice(0,i), ...caches.slice(i+1)]
                hit=true
                break
            }
        }
        
        if(!hit) time+=5

        caches.push(city)
        if(caches.length>cacheSize){
            caches.shift()
        }
    }

    return time;
}