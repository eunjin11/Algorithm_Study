function solution(s) {
    return s.split(" ").map((word)=>{
        return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()
    }).join(" ");   
}

