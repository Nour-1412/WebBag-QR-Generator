const qrInput = document.getElementById("qrInput");
const qrContainer = document.getElementById("qrContainer");

const qrColor = document.getElementById("qrColor");
const bgColor = document.getElementById("bgColor");

const qrSize = document.getElementById("qrSize");
const type = document.getElementById("type");

const downloadBtn =
document.getElementById("downloadBtn");

const copyBtn =
document.getElementById("copyBtn");

function generateQR(){

const value =
qrInput.value.trim();

if(!value){

qrContainer.innerHTML = "";

return;

}

let finalText = value;

if(type.value === "email"){
finalText = "mailto:" + value;
}

if(type.value === "phone"){
finalText = "tel:" + value;
}

qrContainer.innerHTML = "";

new QRCode(qrContainer,{
text:finalText,
width:Number(qrSize.value),
height:Number(qrSize.value),
colorDark:qrColor.value,
colorLight:bgColor.value,
correctLevel:QRCode.CorrectLevel.H
});

}

qrInput.addEventListener("input",generateQR);

qrColor.addEventListener("input",generateQR);

bgColor.addEventListener("input",generateQR);

qrSize.addEventListener("change",generateQR);

type.addEventListener("change",generateQR);

downloadBtn.addEventListener(
"click",
()=>{

const canvas =
qrContainer.querySelector("canvas");

if(!canvas){

alert("قم بإنشاء QR أولاً");

return;

}

const link =
document.createElement("a");

link.href =
canvas.toDataURL("image/png");

link.download =
"webbag-qr-code.png";

link.click();

}
);

copyBtn.addEventListener(
"click",
()=>{

if(!qrInput.value.trim()){

alert("لا يوجد محتوى للنسخ");

return;

}

navigator.clipboard.writeText(
qrInput.value
);

alert("تم النسخ بنجاح");

}
);
