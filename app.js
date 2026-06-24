const qrInput =
document.getElementById("qrInput");

const generateBtn =
document.getElementById("generateBtn");

const qrContainer =
document.getElementById("qrContainer");

const downloadBtn =
document.getElementById("downloadBtn");

generateBtn.addEventListener(
"click",
generateQR
);

function generateQR(){

const text =
qrInput.value.trim();

if(!text){

alert("يرجى إدخال رابط أو نص");

return;

}

qrContainer.innerHTML = "";

new QRCode(
qrContainer,
{
text:text,
width:250,
height:250,
colorDark:"#000000",
colorLight:"#ffffff",
correctLevel:QRCode.CorrectLevel.H
}
);

setTimeout(()=>{

downloadBtn.style.display =
"inline-block";

},300);

}

downloadBtn.addEventListener(
"click",
()=>{

const img =
qrContainer.querySelector("img");

const canvas =
qrContainer.querySelector("canvas");

let imageURL = "";

if(img){

imageURL = img.src;

}
else if(canvas){

imageURL =
canvas.toDataURL("image/png");

}

if(!imageURL){

alert("قم بإنشاء QR أولاً");

return;

}

const link =
document.createElement("a");

link.href = imageURL;

link.download =
"webbag-qr-code.png";

document.body.appendChild(link);

link.click();

document.body.removeChild(link);

}
);
