function sendEmail() {
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var message = document.getElementById('message').value;
  window.location = 'mailto:jack.qian97@gmail.com?subject='+name+
  ' '+email+'&body='+message;
}
