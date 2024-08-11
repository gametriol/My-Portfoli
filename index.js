document.getElementById("menu-toggle").addEventListener('click', function () {
  if (document.getElementById('project-menu').classList == 'open') {
    document.getElementById('project-menu').classList.remove('open');
    document.getElementById("side-menu").classList.toggle("open");
  } else {
    document.getElementById("side-menu").classList.toggle("open");
  }
  if (document.getElementById("side-menu").classList == "open") {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'visible';
  }

});

document.getElementById("project-toggle").addEventListener('click', function () {
  navigationContainer.style.zIndex = -99; // Hide navigation buttons smoothly
  document.body.style.overflow = 'hidden';
  singleButtonContainer.classList.add("open");

  document.getElementById('project-menu').classList.toggle("open");
  document.getElementById('navv').classList.toggle("hede");
});



const navigationContainer = document.querySelector('.navv');
const singleButtonContainer = document.querySelector('.single-button-container');
const triggerElement = document.querySelector('.trigger-element');

const offsetAdjustment = -1300; // Adjust if needed

window.addEventListener('scroll', () => {
  const triggerElementOffset = triggerElement.getBoundingClientRect().top;
  const adjustedScrollPoint = triggerElementOffset + offsetAdjustment;
  const scrollY = window.scrollY;

  if (scrollY >= adjustedScrollPoint) {
    navigationContainer.style.zIndex = -99; // Hide navigation buttons smoothly
    singleButtonContainer.classList.add("open");
  } else if (scrollY <= adjustedScrollPoint) {
    navigationContainer.style.zIndex = 999; // Show navigation buttons smoothly
    singleButtonContainer.classList.remove("open");
  }
});

function clock() {
  if (document.getElementById("project-menu").classList == "open") {
    document.body.style.overflow = 'visible';
    navigationContainer.style.zIndex = 999;
    singleButtonContainer.classList.remove("open");
    document.getElementById("project-menu").classList.remove("open");
  } else if (document.getElementById("project-menu").classList != "open") {
    document.getElementById("side-menu").classList.toggle("open");
  }
};

const elements = document.querySelectorAll('.card');

// for(let i=0;i<elements.length;i++){
//   elements[i].setAttribute("onclick","window.open('./Assets/1/index.html','_blank'");
//   };

// for(let i=0;i<elements.length;i++){
// elements.forEach(card => {
//   card.addEventListener('click', () => {
//     const targetUrl = card.dataset.link;
//     window.location.href = "./Assets//index.html";
//   })})};

for (let i = 0; i < document.querySelectorAll(".card").length; i++) {

  document.querySelectorAll(".card")[i].addEventListener("click", function () {

    var buttonInnerHtml = i;

    linkOpener(buttonInnerHtml);

  })
};

function linkOpener(i) {

  window.location.href = "./Assets/" + i + "/index.html";
}

for (let i = 0; i < document.querySelectorAll(".card-img-top").length; i++) {

  document.querySelectorAll(".card-img-top")[i].attributes.setNamedItem("xmlns", "./Assets/1/goal.png");

};
true


WebGLFluid(document.querySelector('canvas'), {
  TRANSPARENT:true,
  BLOOM:false,
})



