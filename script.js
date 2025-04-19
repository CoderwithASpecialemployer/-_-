document.getElementById('bewerbungsFormular').addEventListener('submit', function (e) {
  e.preventDefault();
  const msg = document.getElementById('success-message');
  msg.textContent = 'Danke für deine Bewerbung! Wir melden uns bald.';
  this.reset();
});