const input = document.getElementById("inp");
const qrcodeContainer = document.getElementById("qrcode-container");
const qrimg = document.getElementById("qrimg");
const btn = document.getElementById("btn");


btn.addEventListener("click", () => {
  if (input.value) {
    
    qrimg.setAttribute(
      "src",
      `https://api.qrserver.com/v1/create-qr-code/?size=300x150&data=${input.value}`
    );

    qrcodeContainer.style.display = "flex";
  } else {
    
    alert("Please Enter Text!");
  }
});