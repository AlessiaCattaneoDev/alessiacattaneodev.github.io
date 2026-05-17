(function () {
  if (typeof emailjs !== 'undefined') {
    emailjs.init({ publicKey: 'JJmKqlitS3D46M3nq' });
  }

  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var btn = document.getElementById('contactSubmit');
    var msg = document.getElementById('contactMsg');
    var orig = btn.textContent;
    btn.textContent = '…';
    btn.disabled = true;

    emailjs.sendForm('service_szsj0r9', 'template_bf752oo', form)
      .then(function () {
        msg.textContent = 'Messaggio inviato! Ti rispondo al più presto.';
        msg.style.color = '#FF6F59';
        msg.style.display = 'block';
        form.reset();
        btn.textContent = orig;
        btn.disabled = false;
      })
      .catch(function () {
        msg.textContent = 'Errore nell\'invio. Scrivimi a alessiacattaneo.developer@gmail.com';
        msg.style.color = '#C96B5A';
        msg.style.display = 'block';
        btn.textContent = orig;
        btn.disabled = false;
      });
  });
})();
