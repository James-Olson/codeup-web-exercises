

/*function showMultiplicationTable(x){
    for(let y = 1; y<10; y++)
        console.log(x + 'x' + y + '=' (x*y))
}*/




for(let x = 1; x <= 10; x++){
    let x = Math.floor(Math.random() * ((200-20)+1) + 20);
    if (x % 2==0){
        console.log(x + ' is even')
    }else {
        console.log(x + ' is odd')
    }
}



 function showMultiplicationTable(sum){
     for(let i = 1 ; i <= 10; i++) {
         console.log(sum + " x " + i + " = " + (sum * i) );
     }
 }
 console.log(showMultiplicationTable(7));



 for(let i=0; i<10; i++){
     let randomNumber = Math.floor((Math.random() * (200-201)) +11);
     if(randomNumber % 2 === 0){
         console.log(randomNumber + " is even.");
     }else{
         console.log(randomNumber + " is odd.");
     }
 }




 for(let x = 1; x < 10; x++){
     let nums = x.toString().repeat(x);
     console.log(x.toString().repeat(x));
 }



 for(let i = 100; i >= 5; i -= 5){
     console.log(i)
 }


