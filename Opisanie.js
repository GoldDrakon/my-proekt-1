let likesNumber = document.querySelector('.likes-number');
let heart = document.querySelector('.heart');
let heartColor = document.querySelector('.heart_color');

heart.onclick = function () {
if (heartColor.classList.contains('active1')) {
likesNumber.textContent--;
  } else {
likesNumber.textContent++;}
heartColor.classList.toggle('active1');}
