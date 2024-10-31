// Form validation
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    if (!name || !email || !message) {
      alert("Please fill in all fields.");
    } else {
      alert("Thank you for your message!");
    }
  });

  document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', function () {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.cssText = `
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        const imgClone = img.cloneNode();
        imgClone.style.maxWidth = '90%';
        imgClone.style.maxHeight = '90%';
        lightbox.appendChild(imgClone);

        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// JavaScript to handle Bootstrap form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});