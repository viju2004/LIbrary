function validateForm(event) {
    event.preventDefault(); 
  
    alert("Registration Successfull");
    var fullName = document.getElementById("fullName").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var id = document.getElementById("id").value;
    var address = document.getElementById("address").value;
    var userId = document.getElementById("userId").value;
    var password = document.getElementById("password").value;
  
    if (fullName.trim() === "") {
      alert("Please enter your full name.");
      return;
    }

    if(isNan(mobileNumber)){
      alert("Please enter valid mobile number.");
      return;
    }

    if (mobileNumber.trim() === "") {
      alert("Please enter your mobile number.");
      return;
    }
  
    if (id.trim() === "") {
      alert("Please enter your ID.");
      return;
    }
  
    if (address.trim() === "") {
      alert("Please enter your address.");
      return;
    }
  
    if (userId.trim() === "") {
      alert("Please enter a username.");
      return;
    }
  
    if (password.trim() === "") {
      alert("Please enter a password.");
      return;
    }
  
    alert("Registration successful!");
    document.getElementById("registrationForm").reset(); 
  }
  