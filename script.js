// Scroll animation  //

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll(".animate").forEach(section => {
    observer.observe(section);
  });
  

  
  
  // whatsapp logic //
  
  function openWhatsApp(propertyName) {
    const number = "917989195689";
    let message = "Hello, I want more info!";
    if (propertyName) {
      message = `Hello, I want more info about ${propertyName}!`;
    }
    const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
  
  // Phone Or Whatsapp Redirect //
  
  const phoneLink1 = document.getElementById('phoneLink1');
  const phoneLink2 = document.getElementById('phoneLink2');
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (phoneLink1) {
    const num1 = '+917989195689';
    phoneLink1.href = isMobile ? `tel:${num1}` : `https://wa.me/${num1.replace('+', '')}`;
  }
  if (phoneLink2) {
    const num2 = '+919030454645';
    phoneLink2.href = isMobile ? `tel:${num2}` : `https://wa.me/${num2.replace('+', '')}`;
  }

  // Contact Form Submission to WhatsApp //
  
  function sendContactToWhatsApp(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const projectType = document.getElementById('contactProjectType').value;
    const message = document.getElementById('contactMessage').value.trim();
    
    if (!name || !message) {
      alert("Please fill in your Name and Message.");
      return;
    }
    
    const number = "917989195689"; 
    
    const text = `Hello KP Constructions,\n\nI want to get in touch!\n\n*Name:* ${name}\n*Email:* ${email || 'Not provided'}\n*Project Type:* ${projectType}\n*Message:* ${message}`;
    
    const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
