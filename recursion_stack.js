//Recursion in using function inside of given function
function countdown(number){
    if(number <=0){
        console.log("Counting is over!")
        return;
    } else {
            console.log(number)
             countdown(number -1)
            
        }
        
    }
   
countdown(5);

