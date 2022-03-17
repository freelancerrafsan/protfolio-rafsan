const aboutBtn = document.getElementById("aboutBtn");
const aboutSection = document.getElementById("aboutSection");
const aboutLocation = document.getElementById("aboutLocation");
const locationBtn = document.getElementById("locationBtn");
const aboutEDUCATIONAL = document.getElementById("aboutEDUCATIONAL");
const educationBtn = document.getElementById("educationBtn");
const totelProject = document.getElementById("totel-Project");
const customerHappy = document.getElementById("customerHappy");
const customerSatisfaction = document.getElementById("customerSatisfaction");
const seeMoreleft = document.getElementById("seeMoreleft");
const seeMoreright = document.getElementById("seeMoreright");
const weblists = document.getElementById("weblist");
const designList = document.getElementById("designlist");
const webVweBtn = document.getElementById("webVweBtn");
const youtubeVideoBTN = document.getElementById("youtubeVideoBTN");
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

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1000) {
    for (let i = 0; i < skillFont.length; i++) {
      skillFont[i].style.animation = "anymationSkil 1s ease-in-out";
    }
  }
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 1250) {
    setInterval(project, 15);
    setInterval(Happy, 100);
    setInterval(customeR, 100);
  } else {
    clearInterval(project);
    clearInterval(Happy);
    clearInterval(customeR);
  }
});

var i = 0;
function project() {
  if (i < 1000) {
    i++;
    totelProject.innerHTML = i;
  } else if (i == 1000) {
    totelProject.innerHTML = "1K";
  }
}

function Happy() {
  if (i < 100) {
    i++;
    customerHappy.innerHTML = i + "%";
  }
}

function customeR() {
  if (i < 100) {
    i++;
    customerSatisfaction.innerHTML = i + "%";
  }
}

let isManu = false;
menuIcons.addEventListener("click", () => {
  if (isManu == false) {
    isManu = true;
    navBar.style.transform = "translateX(0%)";
    menuIcons.classList.replace("fa-bars","fa-times");
  } else {
    isManu = false;
    navBar.style.transform = "translateX(100%)";
    menuIcons.classList.replace("fa-times","fa-bars");
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

protfolioPage.style.height = "126vh";
const protseeFun = () => {
  if (protfolioPage.style.height == "126vh") {
    protfolioPage.style.height = "auto";
    protScc.innerHTML = "scc lend...";
  } else {
    protfolioPage.style.height = "126vh";
    protScc.innerHTML = "scc more...";
  }
};

protScc.addEventListener("click", protseeFun);

const webVwe = () => {
  sectionProt.style.display = "grid";
  videoPort.style.display = "none";
  hoverBtn.style.left = "0";
  webVweBtn.style.color = "#fff";
  youtubeVideoBTN.style.color = "#fff";
};

const videoyoutube = () => {
  sectionProt.style.display = "none";
  hoverBtn.style.left = "50%";
  videoPort.style.display = "flex";
  webVweBtn.style.color = "#fff";
  youtubeVideoBTN.style.color = "#fff";
};

youtubeVideoBTN.addEventListener("click", videoyoutube);
webVweBtn.addEventListener("click", webVwe);

weblists.style.display = "none";
const webrlistFun = () => {
  if (weblists.style.display == "none") {
    weblists.style.display = "block";
  } else {
    weblists.style.display = "none";
  }
};

designList.style.display = "none";
const desigrnlistFun = () => {
  if (designList.style.display == "none") {
    designList.style.display = "block";
  } else {
    designList.style.display = "none";
  }
};

seeMoreleft.addEventListener("click", webrlistFun);
seeMoreright.addEventListener("click", desigrnlistFun);

const aboutBtnFun = () => {
  aboutBtn.style.background = "#c28f2f";
  aboutLocation.style.display = "none";
  aboutEDUCATIONAL.style.display = "none";
  educationBtn.style.background = "#315472";
  locationBtn.style.background = "#315472";
  aboutSection.style.display = "flex";
};
const locationBtnFun = () => {
  aboutBtn.style.background = "#315472";
  aboutLocation.style.display = "block";
  aboutEDUCATIONAL.style.display = "none";
  educationBtn.style.background = "#315472";
  locationBtn.style.background = "#c28f2f";
  aboutSection.style.display = "none";
};
const educationBtnfin = () => {
  aboutBtn.style.background = "#315472";
  aboutLocation.style.display = "none";
  aboutEDUCATIONAL.style.display = "block";
  educationBtn.style.background = "#c28f2f";
  locationBtn.style.background = "#315472";
  aboutSection.style.display = "none";
};

educationBtn.addEventListener("click", educationBtnfin);
locationBtn.addEventListener("click", locationBtnFun);
aboutBtn.addEventListener("click", aboutBtnFun);
