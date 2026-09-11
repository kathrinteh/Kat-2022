
    /* this is all the background change stuff when you click the buttons*/
    function changeBackground() {
      document.querySelector('body').style.backgroundColor = '#FFF5F5';
      document.querySelector('body').style.color = '#DD3E3E';
      var elements = document.querySelectorAll("a");
      [].slice.call(elements).forEach(function (elem) {
        elem.style.color = "#DD3E3E";
      });
    }

    function changeBackground2() {
      document.querySelector('body').style.backgroundColor = '#D2F4FF';
      document.querySelector('body').style.color = '#53815D';
      var elements = document.querySelectorAll("a");
      [].slice.call(elements).forEach(function (elem) {
        elem.style.color = "#53815D";
      });
    }

    function changeBackground3() {
      document.querySelector('body').style.backgroundColor = '#53815D';
      document.querySelector('body').style.color = '#D2F4FF';
      var elements = document.querySelectorAll("a");
      [].slice.call(elements).forEach(function (elem) {
        elem.style.color = "#D2F4FF";
      });
    }

    function changeBackground4() {
      document.querySelector('body').style.backgroundColor = '#DD3E3E';
      document.querySelector('body').style.color = '#FFF5F5';
      var elements = document.querySelectorAll("a");
      [].slice.call(elements).forEach(function (elem) {
        elem.style.color = "#FFF5F5";
      });
    }
    $('#btn').on("click", function () {
      $('#part1, #part2, #part3, #part4, #part5, #part6').css({
        fill: "#DD3E3E"
      });
    });

    $('#btnblue').on("click", function () {
      $('#part1, #part2, #part3, #part4, #part5, #part6').css({
        fill: "#53815D"
      });
    });

    $('#btngreen').on("click", function () {
      $('#part1, #part2, #part3, #part4, #part5, #part6').css({
        fill: "#D2F4FF"
      });
    });

    $('#btnred').on("click", function () {
      $('#part1, #part2, #part3, #part4, #part5, #part6').css({
        fill: "#FFF5F5"
      });
    });
    /* this is all the overlay hover shit*/
    $("#pinkieswear").hover(function () {
      $("#smiley1-overlay").toggle();
      $("#arrow2-overlay").toggle();
      $("#Crunch-overlay").toggle();
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
    $("#Crunch-overlay").hover(function () {
      $("#Crunch-overlay").show();
    });
    $("#pinkieswear-overlay").mouseout(function () {
      $("#pinkieswear-overlay").hide();
    });
