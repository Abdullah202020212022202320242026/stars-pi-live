const gifts = [
  { name: "أهرامات", price: 1000 },
  { name: "أبو الهول", price: 800 },
  { name: "برج خليفة", price: 600 },
  { name: "برج إيفل", price: 400 },
  { name: "ساعة بيغ بن", price: 200 },
  { name: "فنجان قهوة", price: 50 }
];

const giftList = document.getElementById("giftList");

// رسم الهدايا
gifts.forEach((gift, index) => {
  const el = document.createElement("div");
  el.className = "gift-item";
  el.innerHTML = `<strong>${gift.name}</strong><br>💰 ${gift.price} Pi`;
  el.onclick = () => sendGift(index);
  giftList.appendChild(el);
});

// محاكاة عداد مشاهدين
let viewers = Math.floor(Math.random() * 100) + 1;
const viewerCounter = document.getElementById("viewer-counter");
viewerCounter.textContent = `👁️ ${viewers}`;

// إرسال هدية
function sendGift(index) {
  const gift = gifts[index];
  const giftPrice = gift.price;
  const appShare = giftPrice * 0.4;
  const streamerShare = giftPrice - appShare;

  alert(
    `🎁 أرسلت "${gift.name}"\nالمبلغ الكلي: ${giftPrice} Pi\nللمذيع: ${streamerShare} Pi\nنصيب التطبيق: ${appShare} Pi`
  );

  // هنا يتم تنفيذ الدفع عبر Pi Network Testnet (لاحقًا سنربطها فعليًا)
}
