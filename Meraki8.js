// Write a function named add_numbers_list which takes two lists as arguments and adds
// the same position numbers and prints the sum of them.
function add_numbers(num1,num2){
    console.log(num1+num2);
    console.log("______________________");
}
function add_numbers_list(list1,list2){
    for(var i=0;i<3;i++){
    add_numbers(list1[i],list2[i])    
    }
}
add_numbers_list([50,20,30],[30,50,90])