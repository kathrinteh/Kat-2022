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
    $("#heart1-overlay").toggle();
    $("#heart2-overlay").toggle();
    $("#star1-overlay").toggle();
    $("#star2-overlay").toggle();
    $("#pinkieswear-overlay").toggle();
  });
  $("#butterly").hover(function () {
    $("#smiley2-overlay").toggle();
    $("#smiley4-overlay").toggle();
    $("#heart3-overlay").toggle();
    $("#circle2-overlay").toggle();
    $("#star4-overlay").toggle();
    $("#crown-overlay").toggle();
    $("#butterly-overlay").toggle();
  });
  $("#gossamer").hover(function () {
    $("#smiley2-overlay").toggle();
    $("#star4-overlay").toggle();
    $("#arrow1-overlay").toggle();
    $("#heart1-overlay").toggle();
    $("#star2-overlay").toggle();
    $("#flower4-overlay").toggle();
    $("#gossamer-overlay").toggle();
  });
  $("#kickboxing").hover(function () {
    $("#smiley3-overlay").toggle();
    $("#star4-overlay").toggle();
    $("#heart3-overlay").toggle();
    $("#heart1-overlay").toggle();
    $("#star6-overlay").toggle();
    $("#flower1-overlay").toggle();
    $("#kickboxing-overlay").toggle();
  });
  $("#keyboard").hover(function () {
    $("#smiley3-overlay").toggle();
    $("#star4-overlay").toggle();
    $("#heart3-overlay").toggle();
    $("#heart1-overlay").toggle();
    $("#flower4-overlay").toggle();
    $("#keyboard1-overlay").toggle();
    $("#keyboard2-overlay").toggle();
  });
  $("#kira").hover(function () {
    $("#smiley1-overlay").toggle();
    $("#star3-overlay").toggle();
    $("#heart4-overlay").toggle();
    $("#circle1-overlay").toggle();
    $("#flower3-overlay").toggle();
    $("#star5-overlay").toggle();
    $("#kira-overlay").toggle();
  });
  $("#baobao").hover(function () {
    $("#smiley2-overlay").toggle();
    $("#star5-overlay").toggle();
    $("#heart3-overlay").toggle();
    $("#star7-overlay").toggle();
    $("#flower2-overlay").toggle();
    $("#arrow3-overlay").toggle();
    $("#baobao-overlay").toggle();
  });
  $("#indigenous").hover(function () {
    $("#smiley3-overlay").toggle();
    $("#star3-overlay").toggle();
    $("#heart3-overlay").toggle();
    $("#star6-overlay").toggle();
    $("#flower1-overlay").toggle();
    $("#indigenous1-overlay").toggle();
    $("#indigenous2-overlay").toggle();
  });

  $("#smiley1-overlay").hover(function () {
    $("#smiley1-overlay").show();
  });
  $("#smiley1-overlay").mouseout(function () {
    $("#smiley1-overlay").hide();
  });
  $("#smiley2-overlay").hover(function () {
    $("#smiley2-overlay").show();
  });
  $("#smiley2-overlay").mouseout(function () {
    $("#smiley2-overlay").hide();
  });
  $("#smiley3-overlay").hover(function () {
    $("#smiley3-overlay").show();
  });
  $("#smiley3-overlay").mouseout(function () {
    $("#smiley3-overlay").hide();
  });
  $("#smiley4-overlay").hover(function () {
    $("#smiley4-overlay").show();
  });
  $("#smiley4-overlay").mouseout(function () {
    $("#smiley4-overlay").hide();
  });

  $("#star1-overlay").hover(function () {
    $("#star1-overlay").show();
  });
  $("#star1-overlay").mouseout(function () {
    $("#star1-overlay").hide();
  });
  $("#star2-overlay").hover(function () {
    $("#star2-overlay").show();
  });
  $("#star2-overlay").mouseout(function () {
    $("#star2-overlay").hide();
  });
  $("#star3-overlay").hover(function () {
    $("#star3-overlay").show();
  });
  $("#star3-overlay").mouseout(function () {
    $("#star3-overlay").hide();
  });
  $("#star4-overlay").hover(function () {
    $("#star4-overlay").show();
  });
  $("#star4-overlay").mouseout(function () {
    $("#star4-overlay").hide();
  });
  $("#star5-overlay").hover(function () {
    $("#star5-overlay").show();
  });
  $("#star5-overlay").mouseout(function () {
    $("#star5-overlay").hide();
  });
  $("#star6-overlay").hover(function () {
    $("#star6-overlay").show();
  });
  $("#star6-overlay").mouseout(function () {
    $("#star6-overlay").hide();
  });
  $("#star7-overlay").hover(function () {
    $("#star7-overlay").show();
  });
  $("#star7-overlay").mouseout(function () {
    $("#star7-overlay").hide();
  });

  $("#arrow1-overlay").hover(function () {
    $("#arrow1-overlay").show();
  });
  $("#arrow1-overlay").mouseout(function () {
    $("#arrow1-overlay").hide();
  });
  $("#arrow2-overlay").hover(function () {
    $("#arrow2-overlay").show();
  });
  $("#arrow2-overlay").mouseout(function () {
    $("#arrow2-overlay").hide();
  });
  $("#arrow3-overlay").hover(function () {
    $("#arrow3-overlay").show();
  });
  $("#arrow3-overlay").mouseout(function () {
    $("#arrow3-overlay").hide();
  });

  $("#crown-overlay").hover(function () {
    $("#crown-overlay").show();
  });
  $("#crown-overlay").mouseout(function () {
    $("#crown-overlay").hide();
  });

  $("#heart1-overlay").hover(function () {
    $("#heart1-overlay").show();
  });
  $("#heart1-overlay").mouseout(function () {
    $("#heart1-overlay").hide();
  });
  $("#heart2-overlay").hover(function () {
    $("#heart2-overlay").show();
  });
  $("#heart2-overlay").mouseout(function () {
    $("#heart2-overlay").hide();
  });
  $("#heart3-overlay").hover(function () {
    $("#heart3-overlay").show();
  });
  $("#heart3-overlay").mouseout(function () {
    $("#heart3-overlay").hide();
  });
  $("#heart4-overlay").hover(function () {
    $("#heart4-overlay").show();
  });
  $("#heart4-overlay").mouseout(function () {
    $("#heart4-overlay").hide();
  });

  $("#flower1-overlay").hover(function () {
    $("#flower1-overlay").show();
  });
  $("#flower1-overlay").mouseout(function () {
    $("#flower1-overlay").hide();
  });
  $("#flower2-overlay").hover(function () {
    $("#flower2-overlay").show();
  });
  $("#flower2-overlay").mouseout(function () {
    $("#flower2-overlay").hide();
  });
  $("#flower3-overlay").hover(function () {
    $("#flower3-overlay").show();
  });
  $("#flower3-overlay").mouseout(function () {
    $("#flower3-overlay").hide();
  });
  $("#flower4-overlay").hover(function () {
    $("#flower4-overlay").show();
  });
  $("#flower4-overlay").mouseout(function () {
    $("#flower4-overlay").hide();
  });

  $("#circle1-overlay").hover(function () {
    $("#circle1-overlay").show();
  });
  $("#circle1-overlay").mouseout(function () {
    $("#circle1-overlay").hide();
  });
  $("#circle2-overlay").hover(function () {
    $("#circle2-overlay").show();
  });
  $("#circle2-overlay").mouseout(function () {
    $("#circle2-overlay").hide();
  });

  $("#pinkieswear-overlay").hover(function () {
    $("#pinkieswear-overlay").show();
  });
  $("#pinkieswear-overlay").mouseout(function () {
    $("#pinkieswear-overlay").hide();
  });
  $("#kickboxing-overlay").hover(function () {
    $("#kickboxing-overlay").show();
  });
  $("#kickboxing-overlay").mouseout(function () {
    $("#kickboxing-overlay").hide();
  });
  $("#baobao-overlay").hover(function () {
    $("#baobao-overlay").show();
  });
  $("#baobao-overlay").mouseout(function () {
    $("#baobao-overlay").hide();
  });
  $("#butterly-overlay").hover(function () {
    $("#butterly-overlay").show();
  });
  $("#butterly-overlay").mouseout(function () {
    $("#butterly-overlay").hide();
  });
  $("#gossamer-overlay").hover(function () {
    $("#gossamer-overlay").show();
  });
  $("#gossamer-overlay").mouseout(function () {
    $("#gossamer-overlay").hide();
  });
  $("#keyboard1-overlay").hover(function () {
    $("#keyboard1-overlay").show();
  });
  $("#keyboard1-overlay").mouseout(function () {
    $("#keyboard1-overlay").hide();
  });
  $("#keyboard2-overlay").hover(function () {
    $("#keyboard2-overlay").show();
  });
  $("#keyboard2-overlay").mouseout(function () {
    $("#keyboard2-overlay").hide();
  });
  $("#kira-overlay").hover(function () {
    $("#kira-overlay").show();
  });
  $("#kira-overlay").mouseout(function () {
    $("#kira-overlay").hide();
  });
  $("#indigenous1-overlay").hover(function () {
    $("#indigenous1-overlay").show();
  });
  $("#indigenous1-overlay").mouseout(function () {
    $("#indigenous1-overlay").hide();
  });
  $("#indigenous2-overlay").hover(function () {
    $("#indigenous2-overlay").show();
  });
  $("#indigenous2-overlay").mouseout(function () {
    $("#indigenous2-overlay").hide();
  });
