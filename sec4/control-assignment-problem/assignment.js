const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const newRandomNumber = Math.random();

function tooBig(randomNumber){
    if (randomNumber > 0.7){
        console.log(randomNumber);
        alert("This number is too big!!!")
    } else {
        console.log(randomNumber);
    }
}


function displayNumbers(){
    numbers = [5,19,23,17,14,26,7, 18, 92, 103]
    
    for (i = numbers.length -1; i >=0 ;i-- ){
        console.log(numbers[i]);
    }

    for (const index of numbers){
        console.log(index);
    }
}

function conditionalAlert(randomNumber, newRandomNumber){
    console.log(randomNumber, newRandomNumber);

    if (randomNumber && newRandomNumber > 0.7){
       alert("It's too big!");
    } else if (randomNumber || newRandomNumber < 0.2){
        alert("It's not big enough!");
    }
}

conditionalAlert(randomNumber,newRandomNumber);