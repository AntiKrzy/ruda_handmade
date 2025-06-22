document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);

  fetch('YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL', {
    method: 'POST',
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    document.getElementById('msg').textContent = "Zamówienie wysłane!";
    this.reset();
  })
  .catch(err => {
    document.getElementById('msg').textContent = "Błąd przy wysyłaniu zamówienia.";
  });
});
