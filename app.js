let score = prompt("Please fill your score : ");
// let random_number = Math.floor(Math.random() * 3);
// document.getElementById("selected").innerHTML = lotto_number
if(score >= 80){
    document.getElementById("result").innerHTML = "Your grade is A";
}
else if(score >= 70){
    document.getElementById("result").innerHTML = "Your grade is B";
}
else if(score >= 60) {
    document.getElementById("result").innerHTML = "Your grade is C";
}
else if(score >= 50){
    document.getElementById("result").innerHTML = "Your grade is D";
}
else {
    document.getElementById("result").innerHTML = "Your grade is F";
}