function hamburgerMenu(value) {
  if (value == 1) {
    document.getElementById('openHam').classList.add('hidden');
    document.getElementById('openHam').classList.add('undisplayed');
    document.getElementById('closeHam').classList.remove('hidden');
    document.getElementById('closeHam').classList.remove('undisplayed');
    document.getElementById('hamNav').classList.remove('hidden');
    addHidden(document.getElementsByClassName('hamItem'), value);
  }
  if (value == 0) {
    document.getElementById('openHam').classList.remove('hidden');
    document.getElementById('openHam').classList.remove('undisplayed');
    document.getElementById('closeHam').classList.add('hidden');
    document.getElementById('closeHam').classList.add('undisplayed');
    document.getElementById('hamNav').classList.add('hidden');
    addHidden(document.getElementsByClassName('hamItem'), value);
  }
}

function addHidden(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (value == 0) {
      array[i] = array[i].classList.add('hidden');
      array[i] = array[i].classList.add('undisplayed');
    } else {
      array[i] = array[i].classList.remove('hidden');
      array[i] = array[i].classList.remove('undisplayed');
    }
  }
}
