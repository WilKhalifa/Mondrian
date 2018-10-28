let case1 =(document.getElementById("whiteChange"))
let case2 =(document.getElementById('yelChange'))
let case3 =(document.getElementById("redChange"))
let case4 =(document.getElementById("blueChange"))
let case5 =(document.getElementById("whiteChange2"))
let case6 =(document.getElementById("whiteChange3"))
let case7 =(document.getElementById("whiteChange4"))
let case8 =(document.getElementById("whiteChange5"))
let case9 =(document.getElementById("redChange2"))
let case10 =(document.getElementById("whiteChange6"))
let case11 =(document.getElementById("whiteChange7"))
let case12 =(document.getElementById("blueChange2"))
let case13 =(document.getElementById("whiteChange8"))
let case14 =(document.getElementById("redChange3"))
let case15 =(document.getElementById("yelChange2"))
let case16 =(document.getElementById("whiteChange9"))

case1.addEventListener("click", changeColor, false);
case2.addEventListener("click", changeColor, false);
case3.addEventListener("click", changeColor, false);
case4.addEventListener("click", changeColor, false);
case5.addEventListener("click", changeColor, false);
case6.addEventListener("click", changeColor, false);
case7.addEventListener("click", changeColor, false);
case8.addEventListener("click", changeColor, false);
case9.addEventListener("click", changeColor, false);
case10.addEventListener("click", changeColor, false);
case11.addEventListener("click", changeColor, false);
case12.addEventListener("click", changeColor, false);
case13.addEventListener("click", changeColor, false);
case14.addEventListener("click", changeColor, false);
case15.addEventListener("click", changeColor, false);
case16.addEventListener("click", changeColor2, false);


function changeColor() {
  if (this.classList.contains("yellow-bg") === true) {
    this.classList.remove("yellow-bg");
    this.classList.add("blue-bg");
  } else if (this.classList.contains("blue-bg") === true) {
    this.classList.remove("blue-bg");
    this.classList.add("red-bg");
  }
   else if (this.classList.contains("red-bg") === true) {
     this.classList.remove("red-bg");
     this.classList.add("white-bg");
   }
   else if (this.classList.contains("white-bg") === true) {
     this.classList.remove("white-bg");
     this.classList.add("yellow-bg");
   }
};

function changeColor2() {
  if (this.classList.contains("bg-yellow") === true) {
    this.classList.remove("bg-yellow");
    this.classList.add("bg-blue");
  } else if (this.classList.contains("bg-blue") === true) {
    this.classList.remove("bg-blue");
    this.classList.add("bg-red");
  }
   else if (this.classList.contains("bg-red") === true) {
     this.classList.remove("bg-red");
     this.classList.add("none-bdr");
   }
   else if (this.classList.contains("none-bdr") === true) {
     this.classList.remove("none-bdr");
     this.classList.add("bg-yellow");
   }
};
