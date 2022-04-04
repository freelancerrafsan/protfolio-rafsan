const seeMoreleft = document.getElementById("seeMoreleft");
const seeMoreright = document.getElementById("seeMoreright");
const weblists = document.getElementById("weblist");
const designList = document.getElementById("designlist");
const webVweBtn = document.getElementById("webVweBtn");
const youtubeVideoBTN = document.getElementById("youtubeVideoBTN");
const wordpressBtn = document.getElementById("wordpressBtn");
const protScc = document.getElementById("protScc");
const protfolioPage = document.getElementById("protfolioPage");
const Fullname = document.getElementById("Fullname");
const Email = document.getElementById("Email");
const Subject = document.getElementById("Subject");
const Messages = document.getElementById("Messages");
const poppap = document.getElementById("poppap");
const subBtn = document.getElementById("subBtn");
const closePop = document.getElementById("closePop");
const Poptext = document.getElementById("Poptext");
const haderSection = document.querySelector(".haderSection");
const menuIcons = document.getElementById("menuIcons");
const navBar = document.querySelector(".nav-bar");
const mamuli = document.querySelectorAll("#mamuli");
const skillFont = document.querySelectorAll("#skillFont");
const preloder = document.getElementById("preloder");
const wordpressVideo = document.getElementById("wordpressVideo");

window.addEventListener("load", () => {
    preloder.style.display = "none";
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 1000) {
        for (let i = 0; i < skillFont.length; i++) {
            skillFont[i].style.animation = "anymationSkil 1s ease-in-out";
        }
    }
});

let isManu = false;
menuIcons.addEventListener("click", () => {
    if (isManu == false) {
        isManu = true;
        navBar.style.transform = "translateX(0%)";
        menuIcons.classList.replace("fa-bars", "fa-times");
    } else {
        isManu = false;
        navBar.style.transform = "translateX(100%)";
        menuIcons.classList.replace("fa-times", "fa-bars");
    }
});

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        haderSection.style.background = "#002333";
        haderSection.style.height = "15%";
        navBar.style.top = "70px";
        for (let i = 0; i < 4; i++) {
            mamuli[i].style.background = "#315472";
        }
    } else {
        haderSection.style.background = "none";
        haderSection.style.height = "18%";
        navBar.style.top = "80px";
        for (let i = 0; i < 4; i++) {
            mamuli[i].style.background = "rgba(231, 231, 231, 0.144)";
        }
    }
});

const closePopFun = () => {
    poppap.style.display = "none";
};

const subBtnFun = () => {
    console.log(Fullname.value);

    if (Fullname.value == "" && Email.value == "" && Messages.value == "") {
        poppap.style.display = "grid";
        Poptext.innerText = "Plz...Enter Your Deteles";
    } else if (Email.value == "") {
        poppap.style.display = "grid";
        Poptext.innerText = "Plz...Enter Your Email";
    } else if (Email.value.length < 5) {
        poppap.style.display = "grid";
        Poptext.innerText = "Email rong";
    } else if (Messages.value == "") {
        poppap.style.display = "grid";
        Poptext.innerText = "You Can't fill Messages Box";
    } else if (Fullname.value == "") {
        poppap.style.display = "grid";
        Poptext.innerText = "Plz...Enter Your Name";
    } else {
        poppap.style.display = "none";
    }
};

subBtn.addEventListener("click", subBtnFun);
closePop.addEventListener("click", closePopFun);

let isprotfolioPage = false;
const protseeFun = () => {
    if (isprotfolioPage == false) {
        protfolioPage.style.height = "auto";
        protScc.innerHTML = "scc lend...";
        isprotfolioPage = true;
    } else {
        protfolioPage.style.height = "126vh";
        protScc.innerHTML = "scc more...";
        isprotfolioPage = false;
    }
};

protScc.addEventListener("click", protseeFun);

const webVwe = () => {
    sectionProt.style.display = "grid";
    videoPort.style.display = "none";
    hoverBtn.style.left = "0";
    webVweBtn.style.color = "#fff";
    wordpressVideo.style.display = "none";
    youtubeVideoBTN.style.color = "#fff";
};

const videoyoutube = () => {
    sectionProt.style.display = "none";
    hoverBtn.style.left = "33.33%";
    videoPort.style.display = "flex";
    webVweBtn.style.color = "#fff";
    wordpressVideo.style.display = "none";
    youtubeVideoBTN.style.color = "#fff";
};

const wordpress_Video = () => {
    sectionProt.style.display = "none";
    hoverBtn.style.left = "66.66%";
    videoPort.style.display = "none";
    wordpressVideo.style.display = "flex";
    webVweBtn.style.color = "#fff";
    youtubeVideoBTN.style.color = "#fff";
};

youtubeVideoBTN.addEventListener("click", videoyoutube);
webVweBtn.addEventListener("click", webVwe);
wordpressBtn.addEventListener("click", wordpress_Video);

// SURVISE section
let isweblists = false;
const webrlistFun = () => {
    if (isweblists == false) {
        weblists.style.display = "block";
        isweblists = true;
    } else {
        weblists.style.display = "none";
        isweblists = false;
    }
};

let isdesignList = false;
const desigrnlistFun = () => {
    if (isdesignList === false) {
        designList.style.display = "block";
        isdesignList = true;
    } else {
        designList.style.display = "none";
        isdesignList = false;
    }
};
seeMoreleft.addEventListener("click", webrlistFun);
seeMoreright.addEventListener("click", desigrnlistFun);
