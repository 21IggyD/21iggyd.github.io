window.onload = function () {
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closePopup');
  
    popup.style.display = 'flex';
  
    closeBtn.onclick = function () {
      popup.style.display = 'none';
    };
  };