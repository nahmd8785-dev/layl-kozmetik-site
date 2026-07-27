// LAYL AI Top Button

document.addEventListener("DOMContentLoaded", function () {

  const aiButton = document.createElement("div");

  aiButton.innerHTML = `
    <div id="layl-ai-top-btn">
      🤖
    </div>
  `;

  document.body.appendChild(aiButton);


  const style = document.createElement("style");

  style.innerHTML = `
    #layl-ai-top-btn {
      position: fixed;
      top: 80px;
      right: 20px;
      width: 65px;
      height: 65px;
      background: #111;
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      cursor: pointer;
      z-index: 99999;
      box-shadow: 0 4px 15px rgba(0,0,0,0.3);
    }

    #layl-ai-top-btn:hover {
      transform: scale(1.1);
    }
  `;

  document.head.appendChild(style);


  document.getElementById("layl-ai-top-btn").onclick = function () {

    if(window.openLaylAI){
      window.openLaylAI();
    } else {
      alert("Merhaba, ben LAYL AI. Parfüm seçmenize yardımcı olabilirim.");
    }

  };

});
