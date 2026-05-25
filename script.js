
const img = document.getElementById('apple1');

let clicks = 0;
 img.addEventListener("click", function(){
    clicks++;
    if (clicks ===0){
        img.src = "images/appl1.png"
    }
    if (clicks=== 2) {
            img.src = "images/appl2.png";
    }
    if (clicks===3) {
            img.src = "images/appl3.png";
           
    }
    if (clicks ===4){
     window.location.href = "home.html"
    }
 })

 // This part of the code was made with ai. 