function age(){
    var birthyear=prompt("what year you were born?");
    var age=(2023-birthyear)*365;
    var h1=document.createElement('h1');
    var answer=document.createTextNode('you are'+ age+'days old');
    console.log(age);
    h1.setAttribute('id','age');
    h1.appendChild(answer);
    document.getElementById("flex-box-result").appendChild(h1);
}
function reset(){
    document.getElementById('age').remove();
}

// micky-mouse generator

function generatemouse() {
   var image=document.createElement('img');
   var div=document.getElementById('flex-box-img');
   image.src="https://tse4.mm.bing.net/th?id=OIP.3SI1kqPbeabSZ2HSR-jH3gHaHa&pid=Api&P=0&h=180";
   div.appendChild(image);
}