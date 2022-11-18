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

  /* this is all the overlay hover shit*/
  $("#pinkieswear").hover(function () {
    $("#smiley1-overlay").toggle();
    $("#arrow2-overlay").toggle();
    $("#pinkieswear-overlay").toggle();
  });

  $("#smiley1-overlay").hover(function () {
    $("#smiley1-overlay").show();
  });
  $("#smiley1-overlay").mouseout(function () {
    $("#smiley1-overlay").hide();
  });
  $("#arrow2-overlay").hover(function () {
    $("#arrow2-overlay").show();
  });
  $("#arrow2-overlay").mouseout(function () {
    $("#arrow2-overlay").hide();
  });
  $("#pinkieswear-overlay").hover(function () {
    $("#pinkieswear-overlay").show();
  });
  $("#pinkieswear-overlay").mouseout(function () {
    $("#pinkieswear-overlay").hide();
  });
