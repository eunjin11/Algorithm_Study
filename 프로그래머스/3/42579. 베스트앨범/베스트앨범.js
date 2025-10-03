function solution(genres, plays) {
    const count = genres.length;
    
    const genresMap = {}
    for(let i=0;i<genres.length;i++){
        const [genre, play] = [genres[i], plays[i]]
        if(!genresMap[genre]) genresMap[genre]={count:play, music:[[play, i]]}
        else {genresMap[genre].music.push([play, i])
             genresMap[genre].count+=play}
    }
    
    const genresArr = Object.entries(genresMap)
    genresArr.sort((a,b)=> b[1].count-a[1].count)
    genresArr.map(genres=>genres[1].music.sort((a,b)=> b[0]-a[0]||a[1]-b[1]))
    const answer = []
    for(genre of genresArr){
        let count = 0
        for(music of genre[1].music){
            if(count==2) break
            answer.push(music[1])
            count+=1
        }
    }
    return answer;
}