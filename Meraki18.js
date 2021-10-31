// Write a function squares_of_numbers which takes a number as a parameter, 
// and runs a loop from 1 to the given number, and makes the number and square
//  of a number as key, value pair. 
function squares_of_numbers(number){
    var dict={}
    for(var i=1;i<=number;i++){
        dict[i]=i**2
        
    }
    console.log(dict);
}
squares_of_numbers(8)