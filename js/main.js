// Navbar For Mobile
let navbarForMobileBtn = document.getElementById("navbarForMobileBtn");
let navbarForMobile = document.getElementById("navbarForMobile");
let navbarForMobileBtnMood = "close";
navbarForMobileBtn.addEventListener("click", () => {
  if (navbarForMobileBtnMood == "close") {
    navbarForMobile.style.height = "100%";
    navbarForMobileBtn.classList = "fa-solid fa-x";
    navbarForMobileBtnMood = "open";
  } else {
    navbarForMobile.style.height = "0";
    navbarForMobileBtn.classList = "fa-solid fa-bars";
    navbarForMobileBtnMood = "close";
  }
});


// Skills Counter 
function countToNumber(e) {
    const end = +e.textContent;
    let current = 0;
    const timer = setInterval(() => {
        current++;
        e.textContent = current + '%' ;
        if (current === end) {
            clearInterval(timer);
        }
    }, 30);
}
