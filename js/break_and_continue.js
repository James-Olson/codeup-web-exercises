








 function oddNumber(){
     let input = parseFloat(prompt("Enter number between 1 & 50. * Number must be odd! *"))

     if(input % 2 !== 0 && input < 50 && input <1){
         console.log("Number to skip is: " + input);
     }
     for (let i = 1; i <= 50; i++){
         if (input % 2 === 0 || input > 50 || input < 1){
             oddNumber();
             break;
         }
         if (input === i){
             console.log("Yikes! Skipping number: " + input);
             continue;
         }
         if (i % 2 !== 0){
             console.log("Here is an odd number: " + i)
         }
     }
 }
 oddNumber();