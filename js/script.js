
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    
    hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
  
  
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  
    
    document.addEventListener('click', function(event) {
      if (!event.target.closest('.nav-container') && 
          navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
  emailjs.init("kWRSYyHgbVCyW-pRH"); 

  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_357w1m5", "template_5x8nv6a", this)
      .then(function () {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
      }, function (error) {
        console.log(error);
        alert("Failed to send message. Please try again.");
      });
  });