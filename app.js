const lotto_number = prompt("Please select your number!");
// console.log(lotto_number);
// console.log(Math.floor(Math.random() *100));
document.getElementById("selected").innerHTML = lotto_number
document.getElementById("result").innerHTML =  Math.floor(Math.random() *100);