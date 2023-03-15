


 let x = 1;
 while (x < 65536){
    console.log(x *= 2);
 }






 let allCones = Math.floor(Math.random() * 50) + 50;
 do{
     console.log(allCones);
// This expression will generate a random number between 1 and 5
     let sold = Math.floor(Math.random() * 5) + 1;
     if(sold <= allCones){
         console.log(sold + "cones sold...")
         allCones -= sold;
     }else{
         console.log("Cannot sell you " + sold + "cones I only have " + allCones)
     }
 }while(allCones !== 0)
 console.log("Yay! I sold them all!");
