var previousTheme = null;

function removeTheme(array) {
  for (let element of array) {
    if (previousTheme !== null) {
    }
  }
}

function assignGroupClass(array, value) {
  let theme = 'light';

  if (value == 0) {
    theme = 'light';
  } else if (value == 1) {
    theme = 'dark';
  } else if (value == 2) {
    theme = 'hidden';
  }
  for (let element of array) {
    element.classList.add(theme);
    element.classList.remove(previousTheme);
  }
  previousTheme = theme;
}

function colorTheme(theme) {
  let settings = [
    document.getElementById('settings'),
    document.getElementById('settings1'),
    document.getElementById('light-label'),
    document.getElementById('dark-label'),
    document.getElementById('theme'),
    document.getElementById('bod'),
  ];
  let elements = [
    document.getElementById('wrapper'),
    document.getElementById('screen'),
    document.getElementById('c00'),
    document.getElementById('c02'),
    document.getElementById('c03'),
    document.getElementById('c10'),
    document.getElementById('c11'),
    document.getElementById('c12'),
    document.getElementById('c13'),
    document.getElementById('c20'),
    document.getElementById('c21'),
    document.getElementById('c22'),
    document.getElementById('c23'),
    document.getElementById('c30'),
    document.getElementById('c31'),
    document.getElementById('c32'),
    document.getElementById('c33'),
    document.getElementById('c40'),
    document.getElementById('c41'),
    document.getElementById('c42'),
    document.getElementById('c43'),
  ];

  if (theme == 1) {
    assignGroupClass(elements.concat(settings), theme);
  }
  if (theme == 0) {
    assignGroupClass(elements.concat(settings), theme);
  }
  if (theme == 2) {
    assignGroupClass(elements, theme);
  }
}
