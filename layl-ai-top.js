document.addEventListener("DOMContentLoaded", () => {

const aiButton = document.createElement("button");

aiButton.innerHTML = "🤖 LAYL AI";
aiButton.style.position = "fixed";
aiButton.style.top = "90px";
aiButton.style.right = "20px";
aiButton.style.zIndex = "9999";
aiButton.style.padding = "12px 18px";
aiButton.style.borderRadius = "30px";
aiButton.style.border = "1px solid #d4af37";
aiButton.style.background = "#111";
aiButton.style.color = "#f0d36d";
aiButton.style.fontWeight = "bold";
aiButton.style.cursor = "pointer";

aiButton.onclick = () => {
 alert("Merhaba, ben LAYL AI. Parfüm seçmenize yardımcı olabilirim.");
};

document.body.appendChild(aiButton);

});
