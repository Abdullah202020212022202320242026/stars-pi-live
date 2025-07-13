body {
  margin: 0;
  font-family: 'Arial', sans-serif;
  background-color: #f7f7f7;
  text-align: center;
  direction: rtl;
}

header {
  background-color: #6a1b9a;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header h1 {
  margin: 0;
  font-size: 1.5rem;
}

button#pi-login {
  padding: 0.5rem 1rem;
  background-color: #ffb300;
  color: #000;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
}

.stream-area {
  margin: 2rem auto;
  background-color: #ddd;
  width: 90%;
  max-width: 600px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #555;
  font-size: 1.2rem;
  border-radius: 10px;
}

.gifts-section {
  margin: 2rem;
}

.gifts-grid {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.gift {
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
  width: 140px;
  cursor: pointer;
  transition: transform 0.2s;
}

.gift:hover {
  transform: scale(1.05);
  border-color: #6a1b9a;
}

.gift img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
