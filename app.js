const qrInput = document.getElementById("qrInput");
const generateBtn = document.getElementById("generateBtn");
const qrContainer = document.getElementById("qrContainer");
const downloadBtn = document.getElementById("downloadBtn");

let qrCreated = false;

generateBtn.addEventListener("click", generateQR);

function generateQR() {

    const text = qrInput.value.trim();

    if (!text) {
        alert("يرجى إدخال رابط أو نص");
        return;
    }

    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: text,
        width: 280,
        height: 280,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    qrCreated = true;

    downloadBtn.style.display = "block";
}

downloadBtn.addEventListener("click", () => {

    if (!qrCreated) {
        alert("قم بإنشاء QR أولاً");
        return;
    }

    const canvas = qrContainer.querySelector("canvas");

    if (canvas) {

        const link = document.createElement("a");

        link.href = canvas.toDataURL("image/png");

        link.download = "webbag-qr-code.png";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        return;
    }

    const img = qrContainer.querySelector("img");

    if (img) {

        const link = document.createElement("a");

        link.href = img.src;

        link.download = "webbag-qr-code.png";

        document.body.appendChild(link);

        link.click();

        document.body.removeChild(link);

        return;
    }

    alert("حدث خطأ أثناء التنزيل");
});
