function sendGift() {
  const giftDisplay = document.getElementById('giftDisplay');
  giftDisplay.textContent = '🗼 Eiffel Tower Sent!';
  giftDisplay.style.display = 'block';

  setTimeout(() => {
    giftDisplay.style.display = 'none';
  }, 2000);
}
