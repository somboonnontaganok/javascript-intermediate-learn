let lotto_number = prompt("Please fill your number : ");
let random_number = Math.floor(Math.random() * 1000);
// document.getElementById("selected").innerHTML = lotto_number
document.getElementById("random").innerHTML = random_number;
if(lotto_number == random_number) {
    document.getElementById("result").innerHTML = "Congratulations you win 3last number";
}
else {
    document.getElementById("result").innerHTML = "Sorry, you lost 3last number";
}