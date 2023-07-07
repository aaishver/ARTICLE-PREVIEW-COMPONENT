// shrinked js code

const shareBtn = document.querySelector(".share-btn");
const hiddenShareBtn = document.querySelector(".hidden-share-btn");
const shareSection = document.querySelector(".share-section");
const shareLink = document.querySelector(".share-link");
const socialMediaSection = document.querySelector(".social-icons");

function toggleSection() {
  shareSection.classList.toggle("shown");
}
function removeToggle() {
  shareSection.classList.remove("shown");
}
shareBtn.addEventListener("click", function () {
  toggleSection();
});
hiddenShareBtn.addEventListener("click", function () {
  toggleSection();
});

//Hide section event
document.addEventListener("click", function (e) {
  let targetSection = shareBtn.contains(e.target);
  let showntargetSection = hiddenShareBtn.contains(e.target);
  let sharableLink = shareLink.contains(e.target);
  let socialIcons = socialMediaSection.contains(e.target);
  if (!showntargetSection && !targetSection && !sharableLink && !socialIcons) {
    removeHiddenSection();
  }
});

// detailed js

// document.querySelector(".share-btn").addEventListener("click", function () {
//   document.querySelector(".share-section").classList.toggle("shown");
// });

// document
//   .querySelector(".hidden-share-btn")
//   .addEventListener("click", function () {
//     document.querySelector(".share-section").classList.toggle("shown");
//   });

// document.addEventListener("click", function (e) {
//   let shareBut = document.querySelector(".share-btn").contains(e.target);
//   let hidShr = document.querySelector(".hidden-share-btn").contains(e.target);
//   let shreable = document.querySelector(".share-link").contains(e.target);
//   let shreicon = document.querySelector(".social-icons").contains(e.target);
//   if (!shareBut && !hidShr && !shreable && !shreicon) {
//     document.querySelector(".share-section").classList.remove("shown");
//   }
// });
