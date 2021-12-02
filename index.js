const body = document.getElementById("second-body");
const greeting = document.getElementById("greeting");
const card = document.getElementById("card");
const overlay = document.getElementById("overlay");
const christmasBtn = document.getElementById("christmas");
const snowBtn = document.getElementById("snow");

const myFunction = () => {
  // console.log("Hallo!");
  let valueChristmasBtn = christmasBtn.checked;

  // console.log(valueChristmasBtn);
  // console.log(valueSnowBtn);

  if (valueChristmasBtn === true) {
    // console.log("Christmal Look");
    body.style.backgroundColor = "var(--wine-red)";
    card.style.backgroundColor = "var(--snow)";
    overlay.style.visibility = "hidden";
    snow();
  } else {
    // console.log("Snow look");
    body.style.backgroundColor = "var(--snow)";
    card.style.backgroundColor = "var(--wine-red-under-snow)";
    overlay.style.visibility = "visible";
    snow();
  }
};

christmasBtn.addEventListener("change", myFunction);

snowBtn.addEventListener("change", myFunction);
