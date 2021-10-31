// Write a function named eligible_for_vote which takes age as a parameter and prints
//  if he/she is eligible to vote or not.
//  ( Consider minimum age of voting to be 18. )
function eligible_for_vote(age){
    if(age>=18){
        console.log("Eligible for vote.");
    }
    else{
        console.log("Not eligible for vote");
    }
}
eligible_for_vote(19)