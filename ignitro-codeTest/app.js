// slider details
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    wrapAround: true,
    groupCells: 3,
    pageDots: false,
  });

  // media query for slider
  function smallScreenSlider(x) {
    if (x.matches) { // If media query matches
      $('.main-carousel').flickity({
        groupCells: 1
      });
    } else {
      $('.main-carousel').flickity({
        groupCells: 3
      });
    }
  }
  var x = window.matchMedia("(max-width: 800px)")
  smallScreenSlider(x) // Call listener function at run time
  x.addListener(smallScreenSlider) // Attach listener function on state changes

  
  
  // nav burger
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "left-navlist") {
      x.className += " responsive";
    } else {
      x.className = "left-navlist";
    }
  }

  