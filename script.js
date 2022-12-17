let a = document.getElementsByClassName('btn')[0];

a.addEventListener("click", (e) => {
  document.body.classList.toggle("dark-body");

  //   btn Color

  document.getElementsByClassName("btn")[0].classList.toggle("dark-btn");

  document.getElementById('alpha').classList.toggle("dark-card-body")

  document.getElementById('beta').classList.toggle("dark-header")
});
