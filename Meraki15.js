// Write a function named multiplesOfNumbers which takes an argument as limit, and 
// runs a loop from o to that limit and prints the multiples of 3 and 5.
function multiplesOfNumbers(limit){
    for(var i=0;i<=limit;i++){
        if(i%3==0 && i%5==0){
            console.log(i);
        }
    }
}
multiplesOfNumbers(45)
