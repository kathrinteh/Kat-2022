let switches = document.getElementsByClassName('switch');
let style = localStorage.getItem('style');

if (style == null) {
  setTheme('pearl');
} else {
  setTheme(style);
}

for (let i of switches) {
  i.addEventListener('click', function () {
    let theme = this.dataset.theme;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == 'pearl') {
    document.getElementById('switcher-id').href = './themes/pearl.css';
  } else if (theme == 'red') {
    document.getElementById('switcher-id').href = './themes/red.css';
  } else if (theme == 'green') {
    document.getElementById('switcher-id').href = './themes/green.css';
  } else if (theme == 'blue') {
    document.getElementById('switcher-id').href = './themes/blue.css';
  }
  localStorage.setItem('style', theme);
}
