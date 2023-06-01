
document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open');
})    


function readMore1() {
    let dots = document.getElementById("dots1");
    let moreText = document.getElementById("more1");
    let btnText = document.getElementById("Btn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Показать больше...";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Скрыть";
      moreText.style.display = "inline";
    }
}

function readMore2() {
  let dots = document.getElementById("dots2");
  let moreText = document.getElementById("more2");
  let btnText = document.getElementById("Btn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Показать больше...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Скрыть";
    moreText.style.display = "inline";
  }
}
