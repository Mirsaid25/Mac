let btn_white = document.querySelector(".block-left");
let btn_Grey = document.querySelector(".block-right");

let first_img =  document.querySelector(".img1");
let second_img =  document.querySelector(".img2");

let color_of_mac = document.querySelector(".color_of_mac");
let prise_of_mac = document.querySelector(".prise_of_mac");

let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let btn4 = document.querySelector(".btn4");

btn1.onclick = () =>{
    prise_of_mac.innerHTML = "$1,999"
    btn1.style.border = "3px solid #0071E3"
    btn2.style.border = "2px solid #CFE7FF"
    btn3.style.border = "2px solid #CFE7FF"
    btn4.style.border = "2px solid #CFE7FF"
    
}
btn2.onclick = () =>{
    prise_of_mac.innerHTML = "$2,199"
    btn2.style.border = "3px solid #0071E3"
    btn1.style.border = "2px solid #CFE7FF"
    btn3.style.border = "2px solid #CFE7FF"
    btn4.style.border = "2px solid #CFE7FF"

}
btn3.onclick = () =>{
    prise_of_mac.innerHTML = "$2,599"
    btn3.style.border = "3px solid #0071E3"
    btn1.style.border = "2px solid #CFE7FF"
    btn2.style.border = "2px solid #CFE7FF"
    btn4.style.border = "2px solid #CFE7FF"
}
btn4.onclick = () =>{
    btn4.style.border = "3px solid #0071E3"
    btn1.style.border = "2px solid #CFE7FF"
    btn2.style.border = "2px solid #CFE7FF"
    btn3.style.border = "2px solid #CFE7FF"
    prise_of_mac.innerHTML = "$3,199"
}

btn_white.onclick = () =>{
    btn_white.style.background = "#0071E3"
    btn_white.style.color = "white"
    btn_Grey.style.background = "#CFE7FF"
    btn_Grey.style.color = "#797979"
    first_img.style.display = "block"
    second_img.style.display = "none"
    color_of_mac.innerHTML = "White"
}

btn_Grey.onclick = () =>{
    btn_Grey.style.background = "#0071E3"
    btn_Grey.style.color = "white"
    btn_white.style.background = "#CFE7FF"
    btn_white.style.color = "#797979"
    first_img.style.display = "none"
    second_img.style.display = "block"
    color_of_mac.innerHTML = "Space Gray"

}