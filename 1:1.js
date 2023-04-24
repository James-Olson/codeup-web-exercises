


// function addFrom5(){
//    let sum = 5;
//    for (let i = 0; i < 10; i++) {
//        sum += i;
//        console.log(sum)
//    }
// }



//-----------------------------------------------------------------------------------------------------------------------




// function doubleTheElements(x) {
//    let multiple = x.map(x => x * 2)
//    return multiple;
// }
//
// function sumOfElements(z) {
//    let y = z.reduce((b, a) => b + a);
//    return y
// }
//
// function totalPrice(x) {
//    let prices = x.map(y => y.price);
//    let total = prices.reduce((a, b) => a + b);
//    return total;
// }



//-----------------------------------------------------------------------------------------------------------------------




// users.forEach(function(user) {
//    return emails.push(user.email);
// });
//
// users.forEach(user => emails.push(user.email));
//
// users.forEach(user => {
//    return emails.push(user.email)
// });
//
// users.forEach(function(user) {
//    return names.push(user.name);
// });
//
// users.forEach(user => names.push(user.name));





//-----------------------------------------------------------------------------------------------------------------------





// object destructuring

//const user = {
//   name: "Codeup",
//   email: "codeup@codeup.com",
//   languages: ["english", "spanish"]
//}
//const { name, email, languages } = user;
//
//console.log(user["name"])




//-----------------------------------------------------------------------------------------------------------------------




let chars = ['A', 'B', 'A', 'C', 'B'];

let uniqueChars = [];
chars.forEach((c) => {
   if (!uniqueChars.includes(c)) {
      uniqueChars.push(c);
   }
});

console.log(uniqueChars);




//-----------------------------------------------------------------------------------------------------------------------






//        **** INITIATING keepGoing TO TRUE (keepGoing IS IMPLIED TO BE "TRUE"
//        SO CAN ALSO BE DECLARED AS: " boolean keepGoing; " )******
boolean keepGoing = true;
//      **** PARENT do while (ASKING USER TO ENTER A NUMBER)*******
do {
//            ASKING THE USER TO ENTER A NUMBER.
   System.out.println("What number would you like to go up to?");
//            GETTING THE USER INPUT
   int userInput = scn.nextInt();
//            PRINTING OUT THE TABLE HEADER
   System.out.println("Here's your table:");
   System.out.println("|  Number  |  Squared  |  Cubed  |");
//            FORMATTING TABLE AND WORKING THROUGH CALCULATIONS
   String leftAlignFormat = "| %-8d |     %-4d  |    %-4d |%n";
   for (int i = 1; i <= userInput; i++) {
      int squared = i * i;
      int cubed = i * i * i;
//              PRINTING OUT TABLE WITH CALCULATED OUTPUT INSIDE
      System.out.format(leftAlignFormat, i, squared, cubed);
   }
//                ******** NESTED do while (PURPOSE OF THIS IS TO VERIFY USER INPUT AS "N" OR "Y")**********
//                    SETTING NEW BOOLEAN userKeepGoingPrompt
   boolean userKeepGoingPrompt = true;
   do {
//                    ASKING THE USER IF THEY WANT TO KEEP GOING
      System.out.println("Would you like to keep going? [ Y or N ]");
//                    RETRIEVING THE USER INPUT EITHER "Y" OR "N"
      String userAnswer = scn.next();
//                    IF USER ANSWERS "N" IT WILL STOP OUR OUTER do while FROM RUNNING.
      if (userAnswer.equalsIgnoreCase("n")) {
//                      vvv BY SETTING THE PARENT/OUTER BOOLEAN "keepGoing" TO FALSE
//                      THE PROGRAM WILL STOP RUNNING.
         keepGoing = false;
//                      vvv ALSO NEED TO SET THE NESTED do while BOOLEAN "userKeepGoingPrompt" TO FALSE,
//                      THIS WILL STOP THE NESTED do while AND KEEP IT FROM RERUNNING.
         userKeepGoingPrompt = false;
         System.out.println("OK, bye");
//                      IF USER ANSWERS "Y" THIS WILL RESTART THE PROGRAM
      } else if (userAnswer.equalsIgnoreCase("y")){
//                      WE WANT TO SET OUR NESTED do while BOOLEAN "userKeepGoingPrompt" TO FALSE.
//                      BY DOING THIS IT WILL STOP OUR NESTED do while FROM PROMPTING THE USER
//                      IF THEY WANT TO KEEP GOING AND MOVE ON TO PROMPTING THEM TO ENTER A NUMBER.
         userKeepGoingPrompt = false;
      } else {
//                        IF ANYTHING OTHER THAN "N" OR "Y" IS ENTERED, "Invalid Input!" WILL PRINT.
//                        "userKeepGoingPrompt" BOOLEAN WILL REMAIN TRUE AND OUR NESTED do while WILL
//                        RERUN AND ASK THE USER IF THEY WANT TO KEEP GOING.
         System.out.println("Invalid Input!");
      }
   }
//                HERE "userKeepGoingPrompt" BOOLEAN WILL REMAIN TRUE UNTIL THE USER INPUTS "N" OR "Y". IN THIS
//                CASE EITHER OPTION WILL SET "userKeepGoingPrompt" TO FALSE AND MOVE ON TO OUR PARENT/OUTER do while,
//                PROMPTING THE USER TO ENTER A NUMBER.
   while (userKeepGoingPrompt);
}
//        HERE "KeepGoing" BOOLEAN WILL REMAIN TRUE UNTIL THE USER INPUTS "N" IN OUR NESTED do while.
//        WHEN THE USER INPUTS "N" IT SETS "keepGoing" TO FALSE WHICH IN TURN STOPS OUR PARENT/OUTER
//        do while FROM RUNNING.
while (keepGoing);

