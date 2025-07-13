const loginBtn = document.getElementById("login-btn");
const usernameDiv = document.getElementById("username");
const statusDiv = document.getElementById("status");
const giftButtons = document.querySelectorAll(".gift");

let currentUser = null;

loginBtn.addEventListener("click", async () => {
  try {
    const scopes = ["username", "payments"];
    Pi.init({ version: "2.0", sandbox: true });
    Pi.authenticate(scopes, onIncompletePaymentFound).then(function(auth) {
      currentUser = auth.user;
      usernameDiv.textContent = `مرحباً، ${currentUser.username}`;
      statusDiv.textContent = "";
    }).catch(function(error) {
      statusDiv.textContent = "فشل تسجيل الدخول: " + error.message;
    });
  } catch (err) {
    statusDiv.textContent = "حدث خطأ في تسجيل الدخول.";
  }
});

giftButtons.forEach(button => {
  button.addEventListener("click", async () => {
    if (!currentUser) {
      statusDiv.textContent = "الرجاء تسجيل الدخول أولاً.";
      return;
    }

    const amount = parseFloat(button.getAttribute("data-amount"));
    const giftName = button.getAttribute("data-name");
    const appShare = (amount * 0.4).toFixed(3);
    const streamerShare = (amount - appShare).toFixed(3);

    statusDiv.textContent = `جاري إرسال هدية ${giftName}...`;

    Pi.createPayment({
      amount: amount.toString(),
      memo: `هدية ${giftName} - ${streamerShare} للمذيع و ${appShare} للتطبيق`,
      metadata: { gift: giftName, from: currentUser.username },
    }, {
      onReadyForServerApproval: function(paymentId) {
        statusDiv.textContent = `✅ بانتظار موافقة السيرفر على الدفع: ${paymentId}`;
      },
      onReadyForServerCompletion: function(paymentId, txid) {
        statusDiv.textContent = `🎉 تم الدفع بنجاح! معرف الدفع: ${paymentId}`;
      },
      onCancel: function(paymentId) {
        statusDiv.textContent = "❌ تم إلغاء الدفع.";
      },
      onError: function(error, payment) {
        statusDiv.textContent = "⚠️ حدث خطأ أثناء الدفع.";
      }
    });
  });
});

function onIncompletePaymentFound(payment) {
  statusDiv.textContent = `يوجد دفع غير مكتمل: ${payment.identifier}`;
}
