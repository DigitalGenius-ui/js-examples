// practice number1

// function number(num1, num2){
//     return console.log(num1 === 100 || num2 === 100)
// }
// number(100, 50);

// practice number 2

// const getFile = (file) => file.split(".").pop();

// console.log(getFile("index.html"));

// practice number 3

// const moveWords = (str) => {
    // console.log(str.split('').map((x) => String.fromCharCode(x.charCodeAt(0) + 1)).join(''));
//     console.log(str.split("").map((item) => String.fromCharCode(item.charCodeAt(0) + 10)).join(""))
// }
// moveWords("abcd")

// const numberUp = () => {
//     var num = 0;
//     return num + 1;
// }

// setInterval(() => console.log(numberUp()), 1000);

// const now = (date = new Date()) => {
//     const day = date.getDate();
//     const month = date.getMonth();
//     const year = date.getFullYear();
//     return `${addZero(day)}/${addZero(month)}/${addZero(year)}`
// }

// function addZero(time){
//     return time < 10 ? "0" + time : time;
// }

// console.log(now());

// var x = 1;
// a();
// b();
// console.log(x)
// function a() {
//     var x = 10;
//     console.log(x)
// }
// function b() {
//     var x = 100;
//     console.log(x)
// }

// var x = "milad";
// let a = "milad";
// console.log(this.x);
// cant access the let variable globally because its scoped
// console.log(this.a);

// var x ;
// console.log(x);
// var x = 10;
// console.log(x);
// var x = 100;
// console.log(x);

// function a(){
//     var b = 12;
//     console.log(b)
// }
// a();

// function a(){
//     var x = 10
//     b();
//     function b(){
//         console.log(x);
//     }
// }
// a();

// let hello = "hello"
// console.log(hello)

// let hello = 10
// {
//     let hello = 0
// }
// console.log(hello)

// var a = 10;
// {
//     let a = 10
// }
// console.log(a)

// function a(){
//     var a = 10;
//     function b(){
//         console.log(a)
//     }
//     b();
// }
// a();

// function a(){
//     var x = 10;
//     return function y(){
//         console.log(x);
//     }
// }

// const x = a();
// console.log(x)

// function a(){
//     var x = 200;
//     setTimeout(function(){
//         console.log(x)
//     },1000);
//     console.log("hello world")
// }
// a();

let time = document.querySelector(".todo");
const btn = document.querySelector(".delete");
// let input = document.querySelector(".input");

// const timeCount = () => {
//     var x = 3;
//     return y = setInterval(() => {
//         time.textContent = x;
//         if(x <= 0){
//             return x = "0";
//         }
//         x--
//     }, 1000);
// }
// timeCount();

// function a(){
//     var x = 1000
//     function y(){
//         console.log(x);
//     }
//     y();
//     x = 10;
// }
// a();

// function x(){
//     for (let i = 0; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello world")
// }
// x();

// function x() {
//     for (let i = 1; i <= 5; i++) {
//         function y(x){
//             setTimeout(() => {
//                 console.log(x)
//             }, x * 1000);
//         }
//         y(i)
//     }
// }
// x();

// btn.addEventListener("click", () => {
//     time.classList.add("active");
//     time.remove();
// });

// const addText = () => {
//     const div = document.createElement("div");
//     const p = document.createElement("p");
//     const button = document.createElement("button");
//     div.appendChild(p);
//     div.appendChild(button);
//     button.classList.add("deleteBtn")
//     time.appendChild(div);
//     if(input.value === ""){
//         return (
//             alert("Please fill the input"),
//             button.remove()
//         )
//     }else{
//         p.innerText = input.value
//         button.innerText = "Delete"
//         input.value = "";
//     }
//     div.classList.add("style");
//     const style = document.querySelectorAll(".style");
//     style.forEach((item) => {
//         const deleteBtn = item.querySelectorAll(".deleteBtn"); 
//         deleteBtn.forEach((btn) => {
//             btn.addEventListener("click", () => {
//                 item.remove();
//             })
//         })
//     })
// }

const buttons = document.querySelectorAll(".numbers");

const addNumbers = () => {
    let outPut;
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            let text = document.querySelector(".calc");
            switch (btn.value) {
                case "C" :
                    text.value = "";
                    break;
                case "=" :
                    try {
                        if(text.value){
                            text.value = eval(text.value);
                        }
                    } catch{
                        text.value = "Not Valid"
                    }
                    break;
                case "→" :
                    if(text.value){
                        text.value = text.value.slice(0, -1);
                    }
                    break;
                default:
                text.value += btn.value;
                break;
            }
        })
    })
}

addNumbers();

const photo = document.getElementById("image");

console.log(document.documentElement.clientHeight)
console.log(document.documentElement.scrollTop - document.documentElement.clientHeight);
console.log(photo.webkitRequestFullscreen);

function fullScreen(){
    if(photo.webkitRequestFullscreen){
        photo.webkitRequestFullscreen();
    }
}

const indicate = document.querySelector(".indicate");

function scrollHandler() {
    var scroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var overAll = (scroll / height) * 100;
    indicate.style.width = overAll + "%";
}

window.onscroll = () => {
    scrollHandler();
}

const contain = document.querySelectorAll(".contain");
const btns = document.querySelectorAll(".btns");

function increase(name){
    for (let i = 0; i < contain.length; i++) {
        contain[i].style.display = "none";     
    }
    document.getElementById(name).style.display = "block";
}

const rangeValue = document.getElementById("rangeValue");
const number = document.getElementById("number");
number.innerHTML = rangeValue.value; 
//oninput is used for when we drag the range.
rangeValue.oninput = function(){
    number.innerHTML = this.value;
}

const imageContainer = document.querySelector(".photo")
const images = document.querySelectorAll("img");

let start = 0;
function rightMove(){
    start++;
    if(start > images.length - 2){
        start = 0;
    }
    imageContainer.style.transform = `translateX(${-start * 500}px)`
}

const palBtn = document.querySelector(".click-me");
const input = document.querySelector(".pali-input");
const result = document.querySelector(".pali-text");

function addPalindrome(){
    palBtn.addEventListener("click", function(){
        let words = input.value;
        let first = words.substring(0, Math.floor(words.length) / 2)
        let last = words.slice(words.length - Math.floor(words.length) / 2)
        const reverse = [...last].reverse("").join("");
        if(words == ""){
            alert("Please Write Something")
        }else if(first == reverse ){
            result.innerHTML = `<span class="result">${words.toUpperCase()}</span> is a palindrome`
        }else{
            result.innerHTML = `<span class="result">${words.toUpperCase()}</span> is not a palindrome`
        }
    })
}

addPalindrome();

function passwordGen(){
    var signs = "1234567890@#$%^&*+!ABCDEFGHIJKLMNOMQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        password = password + signs.charAt(Math.floor(Math.random() * signs.length));
    }
    document.querySelector(".pass-input").value = password;
}

function copy(){
    navigator.clipboard.writeText(document.querySelector(".pass-input").value).then(() => {
        notification();
    }) 
}

function notification(){
    const noti = document.querySelector(".notification");
    noti.innerHTML = "<p>Text is successfully copied</p>";
    document.querySelector(".notification").classList.add("active");
    setTimeout(() => {
        document.querySelector(".notification").classList.remove("active");
    }, 1500);
}
