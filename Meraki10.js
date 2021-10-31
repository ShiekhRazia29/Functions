//  Question-14
//  Write a function named check_numbers_list which takes two lists of integers and checks 
//  the numbers of the same index numbers whether they both are even or not. 
//  For checking both even or not you can use the function written in the previous question.
 function check_numbers_list(list1,list2)
     for(var i of list1){
              for(var j of list2){
                       if(i%2==0 && j%2==0){
                 console.log("Donu even hain");
                 console.log(______________________________);
                

            }else{
                 console.log("Donu even nhi hai");
             }
         }
 }check_numbers_list([6, 19, 24, 12, 3, 87],[2, 6, 18, 10, 3, 75])


