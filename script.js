let link=document.querySelector(".link");
let donateBtn=document.querySelector(".donateBtn");

donateBtn.addEventListener("click", function(e){
    link.href="https://rzp.io/l/zqi2JDqea";
});
var options = {
    "key": "rzp_test_MWvHEstpsnDD0E", // Enter the Key ID generated from the Dashboard
    "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "HAPPY FOUNDATION",
    "description": "DONATE TO MAKE SOMEONE HAPPY",
    "image": "https://example.com/your_logo",
    // "order_id": "order_Ef80WJDPBmAeNt", //Pass the `id` obtained in the previous step
    // "account_id": "acc_Ef7ArAsdU5t0XL",
    "handler": function (response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature)
    }
};
var rzp1 = new Razorpay(options);
rzp1.on("payment.failed", function (response) {
    alert(response.error.code);
    alert(response.error.description);
    alert(response.error.source);
    alert(response.error.step);
    alert(response.error.reason);
    alert(response.error.metadata.order_id);
    alert(response.error.metadata.payment_id);
});
document.querySelector("donateBtn").onclick = function (e) {
    rzp1.open();
    e.preventDefault();
}