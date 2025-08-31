 document.getElementById("contactForm").addEventListener("submit", function(event) {
      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();

      let nameRegex = /^[a-zA-Z\s]+$/;
      let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      
      if (!nameRegex.test(name) || !emailRegex.test(email)) {
        event.preventDefault();
        document.getElementById("error-msg").textContent = "Please fill valid name and email.";
      } else {
        document.getElementById("error-msg").textContent = "";
        event.preventDefault(); 
        alert("Thank you for submitting! We will contact you soon.");
        document.getElementById("contactForm").reset();
      }
    });