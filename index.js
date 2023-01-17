window.onload = () => {
  let holewebsitewrapper = document.querySelector(".hole-website-wrapper");
  let mbl = document.querySelector(".mainforloader");
  holewebsitewrapper.style.display = "block";
  mbl.style.display = "none";
};
let btn = document.getElementById("hedbtn");
btn.onclick = () => {
  btn.style.boxShadow = "none";
  btn.style.padding = "1em 1.5em";

  setTimeout(() => {
    btn.style.boxShadow = "10px 10px 10px black";
    btn.style.padding = "1em 2.5em";
  }, 50);
};
let overa, overb, overc;
overa = document.getElementById("overa");
overb = document.getElementById("overb");
overc = document.getElementById("overc");
overa.onclick = () => {
  window.open(
    "https://www.bing.com/images/search?q=fruits&form=HDRSC2&first=1"
  );
};
overb.onclick = () => {
  window.open(
    "https://www.bing.com/images/search?q=vegetables&form=HDRSC2&first=1"
  );
};
overc.onclick = () => {
  window.open(
    "https://www.bing.com/images/search?q=grain-milk&form=HDRSC2&first=1"
  );
};
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
let facebook = document.querySelector(".fa-facebook");
let instagram = document.querySelector(".fa-instagram");
let linkedin = document.querySelector(".fa-linkedin");
facebook.onclick = () => {
  window.open("https://www.facebook.com/shishant.pandey.39");
};
instagram.onclick = () => {
  window.open("https://www.instagram.com/shishantpandey_/");
};
linkedin.onclick = () => {
  window.open("https://www.linkedin.com/in/shishant-pandey/");
};
