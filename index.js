alert("My name is Azamat and I am from CS-2110S group.");
function calendar() {
    var dateobj = new Date();{
    var dateObject = dateobj.getFullYear();
     document.getElementById("year").innerHTML = "Year : " + dateObject;
}{
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
let day = days[d.getDay()];
document.getElementById("day").innerHTML = "Today is: " + day;
}{
const d = new Date();
document.getElementById("date").innerHTML ="Date: " + d.getDate();
}{
const d = new Date();
document.getElementById("month").innerHTML ="Month: " + (d.getMonth()+1);
}{
const d = new Date();
document.getElementById("currentTime").innerHTML ="Current time is: " +d.getHours()+":"+ d.getMinutes()+":" + d.getSeconds();
}
}
function daysBetween(){
var date1 = new Date("02/01/2022");
var date2 = new Date("05/31/2024");

// To calculate the time difference of two dates
var Difference_In_Time = date2.getTime() - date1.getTime();

// To calculate the no. of days between two dates
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

//To display the final no. of days (result)
document.getElementById("between").innerHTML= Difference_In_Days + " days left until the freedom!!!(no)";
}
function multiply()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = "Result is: " + (num1 * num2);
}

function divide() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML ="Result is: " +(num1 / num2);
}