document.addEventListener('DOMContentLoaded', function () {

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission Handler
    const form = document.getElementById('leadForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get values
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const status = document.getElementById('status').value;

            // Simple validation
            if (!name || !phone || !email) {
                alert('Please fill in all fields.');
                return;
            }

            // Simulate API call / Success state
            const btn = form.querySelector('button');
            const originalText = btn.innerText;

            btn.innerText = 'Booking...';
            btn.disabled = true;

            setTimeout(() => {
                // Success Action
                alert(`Thank you, ${name}! We have received your request. We will contact you on WhatsApp shortly.`);

                // Reset form
                form.reset();
                btn.innerText = originalText;
                btn.disabled = false;

                // Redirect to Thank You Page (Simulated)
                // window.location.href = 'thank-you.html';

            }, 1500);

            // Log to console (for debugging)
            console.log('Lead Captured:', { name, phone, email, status });
        });
    }
});
