var arr = [".one", ".two", ".three", ".four", ".five"];
document.querySelector(".one").addEventListener("mouseenter", function () {
  document.querySelector(".one").style.width = "35%";
  for (i of arr) {
    if (i != ".one") {
      console.log(i);
      document.querySelector(`${i}`).style.width = "20%";
    }
  }
});
document.querySelector(".two").addEventListener("mouseenter", function () {
  document.querySelector(".two").style.width = "35%";
  for (i of arr) {
    if (i != ".two") {
      console.log(i);
      document.querySelector(`${i}`).style.width = "20%";
    }
  }
});
document.querySelector(".three").addEventListener("mouseenter", function () {
  document.querySelector(".three").style.width = "35%";
  for (i of arr) {
    if (i != ".three") {
      console.log(i);
      document.querySelector(`${i}`).style.width = "20%";
    }
  }
});
document.querySelector(".four").addEventListener("mouseenter", function () {
  document.querySelector(".four").style.width = "35%";
  for (i of arr) {
    if (i != ".four") {
      console.log(i);
      document.querySelector(`${i}`).style.width = "20%";
    }
  }
});
document.querySelector(".five").addEventListener("mouseenter", function () {
  document.querySelector(".five").style.width = "35%";
  for (i of arr) {
    if (i != ".five") {
      console.log(i);
      document.querySelector(`${i}`).style.width = "20%";
    }
  }
});
