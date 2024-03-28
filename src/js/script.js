let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function generateQR() {
  if (qrText.value === "") {
    alert("Masukan teks atau url terlebih dahulu!");
  } else {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
    let h6 = document.createElement("h6");
    h6.innerHTML = qrText.value;
    imgBox.appendChild(h6);
  }
}
