// Write a function named perfect() which takes 1 parameter and checks that 
//given parameter is a perfect number or not. Perfect number means we will count
// the factors of a given number including 1 but you need to exclude the own number as its factor.
// If it is a perfect number prints num is a perfect number hai or else prints num is not a perfect number hain.
function perfect(number){
    sum=0
    for(var i=1;i<number;i++){
        if(number%i==0){
            sum+=i
        }
    }
    if(number===sum){
        console.log("Perfect number");
    }
    else{
        console.log("Not perfect number");
    }
}
perfect(10)