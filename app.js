const age = parseInt(prompt("How old are you?"));


if(isNaN(age) || age < 0){
    console.log("Please write a number");
} else if (age < 18){
    console.log("you are too young")
} else if (age >= 18 && age <= 50){
    console.log("You can drink")    
} else{
    console.log("You can't drink")
}