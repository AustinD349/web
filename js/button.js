function button_one_function(){
    document.getElementById("clearfix").style.display = "block";
}

const button1 = document.getElementById("button-one");
button1.addEventListener('click', button_one_function);



// function button_two_function(){
//     document.getElementsByClassName("text1234").style.color = "red";
// }
// const button2 = document.getElementById("button-two");
// button2.addEventListener('click', button_two_function);

document.getElementById("button-two").onclick = function() {
    document.getElementById("main").style.color = "#e88282";
}