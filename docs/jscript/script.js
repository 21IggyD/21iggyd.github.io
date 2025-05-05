window.onload = function () {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closePopup');
    const nameInput = document.getElementById("name");
    const form = document.getElementById("donationForm");
  
    popup.style.display = 'flex';
  
    closeBtn.onclick = function () {
      popup.style.display = 'none';
    };
  
    form.onsubmit = function (event) {
      event.preventDefault();
  
      const name = nameInput.value.trim();
      console.log("Name entered:", name); // Debugging
  
      // If Then Else
      if (name.toLowerCase() === "admin") {
        alert("Hello Admin! Thank you for supporting us!");
      } else if (name === "") {
        alert("Please enter your name.");
      } else {
        alert(`Thank you, ${name}, for your donation!`);
      }
  
      popup.style.display = "none";
    };
  };