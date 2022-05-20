var imgCounter = 0;

function changeImage(value) {
  if (value == 'r') {
    if (imgCounter < 6) {
      pickImage(imgCounter, imgCounter + 1);
      imgCounter++;
    } else if (imgCounter == 6) {
      pickImage(imgCounter, 0);
      imgCounter -= 6;
    }
  } else if (value == 'l') {
    if (imgCounter > 0) {
      pickImage(imgCounter, imgCounter - 1);
      imgCounter--;
    } else {
      pickImage(imgCounter, 6);
      imgCounter += 6;
    }
  }
}

function pickImage(prevImg, newImg) {
  document.getElementById('hero').classList.remove(`hero${prevImg}`);
  document.getElementById('hero').classList.add(`hero${newImg}`);
}
