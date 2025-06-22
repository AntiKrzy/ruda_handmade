document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(this);

  fetch('https://script.google.com/macros/s/AKfycbyMS3be7NYQWno0vSWYG82WpCQDUwWcjCYM_dl0dQutk5BhueZvMzV0y-pLgQ0nIW-C2w/exec', {
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
