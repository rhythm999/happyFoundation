let link=document.querySelector(".link");
let donateBtn=document.querySelector(".donateBtn");

donateBtn.addEventListener("click", function(e){
    link.href="https://rzp.io/l/zqi2JDqea";
});
var options = {
    "key": "rzp_test_MWvHEstpsnDD0E", 
    "amount": "50000", 
    "currency": "INR",
    "name": "HAPPY FOUNDATION",
    "description": "DONATE TO MAKE SOMEONE HAPPY",
    "image": "https://example.com/your_logo",
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