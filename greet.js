let timeNow = new Date();
let currentHour = timeNow.getHours();
let count = 1;

  function greet(){
    if (count == 10){
    clearInterval(idk);

    }
    if ((5 <= currentHour) && (currentHour <= 10)){
      console.log("Good morning");
    }else if ((12 <= currentHour) && (currentHour <= 16)){
      console.log("Good afternoon");
    }else if ((17 <= currentHour) && (currentHour <= 21)){
      console.log("Good evening");
    }else if ((22 <= currentHour) || (currentHour <= 4)){
      console.log("Good night");
    }
    console.log(count);
    count++;
  }


let idk = setInterval(greet, 1000);
