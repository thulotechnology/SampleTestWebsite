function findSum(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;

    sum = parseInt(num1)+ parseInt(num2);

    document.getElementById("result").innerHTML = `The sum is ${sum}`;
}