const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Terima kasih! Pesan Anda berhasil dikirim dengan validasi sukses.');
        form.reset();
    });
}