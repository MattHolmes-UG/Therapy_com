var sidenav = document.getElementById("sidenav");
var main = document.getElementById("main");

function openSideNav() {
    sidenav.style.width = "250px";
    main.style.marginLeft = "250px";
}

function closeSideNav() {
    sidenav.style.width = "0";
    main.style.marginLeft = "0";
}
var imgs = [
    "pics/stone.jpg",
    "pics/water.jpg",
    "pics/massage.jpg",
    "pics/massage1.jpg",
    "pics/hope.jpg",
    "pics/harmony.jpg"
];
var slides = document.getElementById("slide");
var num = document.getElementById("number");
var nums = ["1 / 6", " 2 / 6", "3 / 6", "4 / 6", "5 / 6", "6 / 6"];
var thumbnail = document.getElementsByClassName("imgThumbnails");
var x = 0;

function currentSlide(n) {
    if (n == -1 || n == 1) {
        var j;
        for (j = 0; j < thumbnail.length; j++) { thumbnail[j].style.opacity = "0.5"; }
        i = x + n;
        if (i < 0) { i = imgs.length - 1; }
        if (i > (imgs.length - 1)) { i = 0; }
        slides.src = imgs[i];
        num.innerHTML = nums[i];
        thumbnail[i].style.opacity = "1";
        x = i;
    } else {
        slides.src = imgs[n - 2];
        num.innerHTML = nums[n - 2];
        for (j = 0; j < thumbnail.length; j++) { thumbnail[j].style.opacity = "0.5"; }
        thumbnail[n - 2].style.opacity = "1";
        x = n - 2;
    }
}

//to control Modal login
var modal = document.getElementById("login_modal");

function openModal() {
    modal.style.display = "block";
    sidenav.style.width = "0";
    main.style.marginLeft = "0";
}

function closeModal() {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var c = 0;

function openContacts() {
    if (c == 0) {
        document.getElementById("contacts").style.display = "block";
        c++;
    } else {
        document.getElementById("contacts").style.display = "none";
        c = 0;
    }
}

//To make sure password was confirmed
var password = document.getElementById('pass1');
var password2 = document.getElementById('pass2');

function matchpass() {
    if(password.value == password2.value){
        pass;
    } else {
        alert('Password do not match');
        password2.value = '';
    }
}