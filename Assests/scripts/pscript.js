  document.getElementById("phone").style.display="block";
  var phone_card = document.getElementById("phone-card");
  var phone_keyboard = document.getElementById("phone-keyboard");
  var phone_container = document.getElementById("phone-container");
  var phone_header_right = document.getElementById("phone-header_right");
  var phone_bg = document.getElementById("phone-bg");
  var phone_instructions = document.getElementById("phone-instructions");
  var phone_cardp = document.getElementById("phone-cardp");
  var phone_image_outer = document.getElementById("phone-image-outer");
  window.addEventListener("load", function(){
      var delayInMilliseconds = 2000; 
      setTimeout(function() {
        load();
      }, delayInMilliseconds);
  });
  
  let triggerSound=()=>{
      
      document.querySelector("body").addEventListener('keydown', (e) => {
            if(e.key=="h"||e.key=="a"||e.key=="c"||e.key=="k"||e.key=="t"||e.key=="e"||e.key=="f"||e.key=="s"||e.key=="t")sound();
        });
  }
  let sound=()=>{
      document.getElementById('audio').play();
  }
  
  let textchange=()=>{
      document.getElementById("phone-w").innerHTML="<p>H</p>";
      document.getElementById("phone-e").innerHTML="<p>A</p>";
      document.getElementById("phone-r").innerHTML="<p>C</p>";
      document.getElementById("phone-t").innerHTML="<p>K</p>";
      document.getElementById("phone-y").innerHTML="<p>-</p>";
      document.getElementById("phone-u").innerHTML="<p>T</p>";
      document.getElementById("phone-i").innerHTML="<p>H</p>";
      document.getElementById("phone-o").innerHTML="<p>E</p>";
      // document.getElementById("i").innerHTML="<p>-</p>";
      document.getElementById("phone-f").innerHTML="<p>F</p>";
      document.getElementById("phone-g").innerHTML="<p>E</p>";
      document.getElementById("phone-h").innerHTML="<p>S</p>";
      document.getElementById("phone-j").innerHTML="<p>T</p>";
      document.getElementById("phone-c").innerHTML="<p>2</p>";
      document.getElementById("phone-v").innerHTML="<p>0</p>";
      document.getElementById("phone-b").innerHTML="<p>2</p>";
      document.getElementById("phone-n").innerHTML="<p>2</p>";
  }
  
  let keyanimations=()=>{
      document.getElementById("phone-q").classList.add("phone-yellow");
      document.getElementById("phone-w").classList.add("phone-yellow");
      document.getElementById("phone-e").classList.add("phone-rr");
      document.getElementById("phone-r").classList.add("phone-rr");
      document.getElementById("phone-t").classList.add("phone-rr");
      document.getElementById("phone-y").classList.add("phone-rg");
      document.getElementById("phone-u").classList.add("phone-rg");
      document.getElementById("phone-i").classList.add("phone-rg");
      document.getElementById("phone-o").classList.add("phone-rgb");
      document.getElementById("phone-p").classList.add("phone-rgb");
      document.getElementById("phone-a").classList.add("phone-yellow");
      // document.getElementById("phone-ghost").classList.add("phone-yellow");
      document.getElementById("phone-s").classList.add("phone-rr");
      document.getElementById("phone-d").classList.add("phone-rr");
      document.getElementById("phone-f").classList.add("phone-rr");
      document.getElementById("phone-g").classList.add("phone-rg");
      document.getElementById("phone-h").classList.add("phone-rg");
      document.getElementById("phone-j").classList.add("phone-rg");
      document.getElementById("phone-k").classList.add("phone-rgb");
      document.getElementById("phone-l").classList.add("phone-rgb");
      document.getElementById("phone-and").classList.add("phone-rgb");
      document.getElementById("phone-p").classList.add("phone-rgb4");
      document.getElementById("phone-up-arrow").classList.add("phone-rr");
      document.getElementById("phone-z").classList.add("phone-rr");
      document.getElementById("phone-x").classList.add("phone-rr");
      document.getElementById("phone-c").classList.add("phone-rg");
      document.getElementById("phone-v").classList.add("phone-rg");
      document.getElementById("phone-b").classList.add("phone-rg");
      document.getElementById("phone-n").classList.add("phone-rgb");
      document.getElementById("phone-m").classList.add("phone-rgb");
      document.getElementById("phone-enter").classList.add("phone-rgb");
      document.getElementById("phone-num").classList.add("phone-rr");
      document.getElementById("phone-slash").classList.add("phone-rr");
      document.getElementById("phone-space").classList.add("phone-rg");
      document.getElementById("phone-dot").classList.add("phone-rg");
      document.getElementById("phone-clear").classList.add("phone-rg");
      textchange();
      triggerSound();
  }
  function load(){
      phone_card.style.height="0px";
      phone_keyboard.style.backgroundColor="#121212";
      phone_keyboard.style.animation="colorchange 3s alternate-reverse infinite";
      phone_keyboard.style.boxShadow= "0 0 16px rgba(237, 45, 45,1)";
      phone_container.setAttribute("class","phone-containerrgb");
      phone_bg.setAttribute("class","phone-bg2");
      phone_header_right.style.opacity="1";
      phone_header_right.style.zIndex="10";
      phone_instructions.style.opacity="1";
      phone_cardp.style.display="none";
      phone_image_outer.style.display="none";
      // phone_btn.style.display="none";
      keyanimations();
  }
  
  function showMenu() {
      var x = document.getElementById("phone-menu");
      console.log(x);
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    }
    function showEvents() {
      var x = document.getElementById("phone-events");
      console.log(x);
      if (x.style.display === "flex") {
        x.style.display = "none";
      } else {
        x.style.display = "flex";
      }
    }
