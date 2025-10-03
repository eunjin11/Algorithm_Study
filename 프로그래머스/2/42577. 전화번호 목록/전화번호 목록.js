function solution(phone_book) {
    phone_book.sort()
    
    const hash={}
    for(let i=0;i<phone_book.length;i++){
        const phone=phone_book[i]
        hash[phone]=true
        }
    for(let i=0;i<phone_book.length;i++){
           const otherPhone=phone_book[i]
         for(let j=0;j<otherPhone.length;j++){
             
           if(hash[otherPhone.substring(0,j)]){
               return false
            }
        }
    }

    return true;
}