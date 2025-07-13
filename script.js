function sendGift() {
  const selected = document.getElementById("gift-select").value;
  showGiftAnimation(selected);
}

function showGiftAnimation(giftType) {
  const giftContainer = document.getElementById("gift-animation-container");
  const giftImg = document.createElement("img");

  let giftSrc = "";

  switch(giftType) {
    case "pyramids":
      giftSrc = "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg";
      break;
    case "eiffel":
      giftSrc = "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg";
      break;
    case "sakura":
      giftSrc = "https://upload.wikimedia.org/wikipedia/commons/0/0e/Sakura_cherry_blossom.jpg";
      break;
    case "pi-icon":
      giftSrc = "https://cryptologos.cc/logos/pi-network-pi-logo.png?v=029";
      break;
  }

  giftImg.src = giftSrc;
  giftImg.className = "gift-animation";
  giftContainer.appendChild(giftImg);

  setTimeout(() => {
    giftContainer.removeChild(giftImg);
  }, 2000); // Remove after animation
}
