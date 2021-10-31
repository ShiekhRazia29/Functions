//Write a function named average which takes 3 numbers and prints the 
//sum of 3 numbers and the average of 3 numbers.
function average_num(num1,num2,num3){
    sum=num1+num2+num3;
    console.log("Sum is",sum);
    average=sum/3;
    console.log("Average is",average);
}
average_num(12,23,56);