$(document).ready(function() {
  // Apply smooth scrolling to all navbar links and footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

  // Make sure this exists before overriding default behavior
  if (this.hash !== "") {

    // Stop the default behavior
    event.preventDefault();

    // Store the hash
    var hash = this.hash;

    // Use jQuery's animate() for smooth page scroll
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to the url when scroll finishes
      window.location.hash = hash;
      });
    }
  });
})
