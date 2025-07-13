body {
  font-family: 'Arial', sans-serif;
  background-color: #121212;
  color: #fff;
  text-align: center;
  padding: 20px;
  direction: rtl;
}

.live-container {
  max-width: 420px;
  margin: auto;
  background-color: #1f1f1f;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 0 10px #000;
  position: relative;
}

#video-placeholder {
  width: 100%;
  height: 220px;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-bottom: 20px;
  font-size: 18px;
  color: #ccc;
  position: relative;
}

button {
  padding: 12px 24px;
  background-color: #e91e63;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

#gifts-container {
  margin-top: 20px;
  text-align: right;
}

#gifts-container button {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #2c2c2c;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}

.hidden {
  display: none;
}

/* أنيميشن هدية تطير */
.gift-fly {
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 48px;
  animation: flyGift 3s ease-in-out forwards;
  z-index: 999;
}

@keyframes flyGift {
  0% {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
  30% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.2);
  }
  70% {
    transform: translate(-50%, -70%) scale(1.0);
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -200%) scale(0.5);
  }
}
