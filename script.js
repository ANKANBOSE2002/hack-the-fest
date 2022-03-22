var btn = document.getElementById("btn");
var card = document.getElementById("card");
var keyboard = document.getElementById("keyboard");
var container = document.getElementById("container");
var header_right = document.getElementById("header_right");
var bg = document.getElementById("bg");
var instruction = document.getElementById("instruction");
var cardp = document.getElementById("cardp");
let keyanimations=()=>{
    document.getElementById("esc").classList.add("yellow");
    document.getElementById("one").classList.add("yellow");
    document.getElementById("two").classList.add("rr");
    document.getElementById("three").classList.add("rr");
    document.getElementById("four").classList.add("rr");
    document.getElementById("five").classList.add("rg");
    document.getElementById("six").classList.add("rg");
    document.getElementById("seven").classList.add("rg");
    document.getElementById("eight").classList.add("rgb");
    document.getElementById("nine").classList.add("rgb");
    document.getElementById("zero").classList.add("rgb");
    document.getElementById("minus").classList.add("rgb4");
    document.getElementById("plus").classList.add("rgb4");
    document.getElementById("clear").classList.add("rgb4");
    document.getElementById("tab").classList.add("yellow");
    document.getElementById("ghost").classList.add("yellow");
    document.getElementById("q").classList.add("rr");
    document.getElementById("w").classList.add("rr");
    document.getElementById("e").classList.add("rr");
    document.getElementById("r").classList.add("rg");
    document.getElementById("t").classList.add("rg");
    document.getElementById("y").classList.add("rg");
    document.getElementById("u").classList.add("rgb");
    document.getElementById("i").classList.add("rgb");
    document.getElementById("o").classList.add("rgb");
    document.getElementById("p").classList.add("rgb4");
    document.getElementById("sq-brckt-l").classList.add("rgb4");
    document.getElementById("sq-brckt-r").classList.add("rgb4");
    document.getElementById("slash-l").classList.add("rgb4");
    document.getElementById("capslock").classList.add("rr");
    document.getElementById("a").classList.add("rr");
    document.getElementById("s").classList.add("rr");
    document.getElementById("d").classList.add("rg");
    document.getElementById("f").classList.add("rg");
    document.getElementById("g").classList.add("rg");
    document.getElementById("h").classList.add("rgb");
    document.getElementById("j").classList.add("rgb");
    document.getElementById("k").classList.add("rgb");
    document.getElementById("l").classList.add("rgb4");
    document.getElementById("semicolon").classList.add("rgb4");
    document.getElementById("quote").classList.add("rgb4");
    document.getElementById("enter").classList.add("rgf");
    document.getElementById("shift").classList.add("rr");
    document.getElementById("z").classList.add("rr");
    document.getElementById("x").classList.add("rg");
    document.getElementById("c").classList.add("rg");
    document.getElementById("v").classList.add("rg");
    document.getElementById("b").classList.add("rgb");
    document.getElementById("n").classList.add("rgb");
    document.getElementById("m").classList.add("rgb");
    document.getElementById("comma").classList.add("rgb4");
    document.getElementById("fullstop").classList.add("rgb4");
    document.getElementById("slash-r").classList.add("rgb4");
    document.getElementById("shift2").classList.add("rgf");
    document.getElementById("ctrl").classList.add("rr");
    document.getElementById("fn").classList.add("rr");
    document.getElementById("win").classList.add("rg");
    document.getElementById("alt").classList.add("rg");
    document.getElementById("arrow-up").classList.add("rgf");
    document.getElementById("delete").classList.add("rgf");
    document.getElementById("arrow-right").classList.add("rgf");
    document.getElementById("arrow-dwn").classList.add("rgf");
    document.getElementById("arrow-left").classList.add("rgf");
    document.getElementById("win2").classList.add("rgf");
    document.getElementById("alt2").classList.add("rgb4");
    document.getElementById("spacebar").classList.add("rgb");
    textchange();
    triggerSound();
}
let triggerSound=()=>{
    
    document.querySelector("body").addEventListener('keydown', (e) => {
          if(e.key=="h"||e.key=="a"||e.key=="c"||e.key=="k"||e.key=="t"||e.key=="e"||e.key=="f"||e.key=="s"||e.key=="t")sound();
      });
}
let sound=()=>{
    document.getElementById('audio').play();
}
let textchange=()=>{
    document.getElementById("ghost").innerHTML="<p>H</p>";
    document.getElementById("q").innerHTML="<p>A</p>";
    document.getElementById("w").innerHTML="<p>C</p>";
    document.getElementById("e").innerHTML="<p>K</p>";
    document.getElementById("r").innerHTML="<p>-</p>";
    document.getElementById("t").innerHTML="<p>T</p>";
    document.getElementById("y").innerHTML="<p>H</p>";
    document.getElementById("u").innerHTML="<p>E</p>";
    document.getElementById("i").innerHTML="<p>-</p>";
    document.getElementById("o").innerHTML="<p>F</p>";
    document.getElementById("p").innerHTML="<p>E</p>";
    document.getElementById("sq-brckt-l").innerHTML="<p>S</p>";
    document.getElementById("sq-brckt-r").innerHTML="<p>T</p>";
    // document.getElementById("g").innerHTML="<p>2</p>";
    // document.getElementById("h").innerHTML="<p></p>";
    // document.getElementById("j").innerHTML="<p>0</p>";
    document.getElementById("v").innerHTML="<p>2</p>";
    document.getElementById("b").innerHTML="<p>0</p>";
    document.getElementById("n").innerHTML="<p>2</p>";
    document.getElementById("m").innerHTML="<p>2</p>";
    document.getElementById("comma").innerHTML="<p>!</p>";
}
btn.onclick = function load(){
    card.style.height="0px";
    keyboard.style.backgroundColor="#121212";
    keyboard.style.animation="colorchange 3s alternate-reverse infinite";
    keyboard.style.boxShadow= "0 0 16px rgba(237, 45, 45,1)";
    container.setAttribute("class","containerrgb");
    bg.setAttribute("class","bg2");
    header_right.style.opacity="1";
    header_right.style.zIndex="10";
    instruction.style.opacity="1";
    btn.style.display="none";
    cardp.style.display="none";
    keyanimations();
}
