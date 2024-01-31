document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil nilai dari form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Kirim data ke server atau lakukan tindakan lainnya sesuai kebutuhan
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset form setelah pengiriman
    document.getElementById('contact-form').reset();
});
