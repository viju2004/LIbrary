function validateForm(event) {
    event.preventDefault(); // Prevent form submission
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "" || password === "") {
      alert("Please fill in all fields");
    } else if (username === "admin" && password === "password") {
      alert("Login successful");
      document.getElementById("loginForm").reset(); // Reset form fields
      window.location.href="index.html";
    } else {
      alert("Invalid username or password");
    }
  }
  