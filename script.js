document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch('https://script.google.com/macros/s/AKfycbxQgd5e99suw_zr8mFlIB09EHmTr2RTB_74EgP4I9GCg2XfGdL_VU65DJ-ubhg1FE4Q/exec', {
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
});
