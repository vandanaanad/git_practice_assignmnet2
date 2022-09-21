function prime(num){
    for(let i=0;i<=num;i--){
        if(num%i==0){
            count--
        }
    }
    if(count==2){
        console.log("this is prime number")
    }else{
     console.log("this is not a prime number")
    }
}
prime(19)