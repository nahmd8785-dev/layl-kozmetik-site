document.addEventListener("DOMContentLoaded", function () {

  const aiButton = document.createElement("div");
  aiButton.id = "layl-ai-top";
  aiButton.innerHTML = "🤖";

  const style = document.createElement("style");
  style.innerHTML = `
  #layl-ai-top {
    position: fixed;
    right: 20px;
    bottom: 90px;
    width: 70px;
    height: 70px;
    background: #111;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 35px;
    cursor: pointer;
    z-index: 99999;
    box-shadow: 0 5px 20px rgba(0,0,0,0.4);
  }

  #layl-ai-top:hover {
    transform: scale(1.1);
  }

  @media(max-width:600px){
    #layl-ai-top {
      width:65px;
      height:65px;
      right:15px;
      bottom:85px;
    }
  }
  `;

  document.head.appendChild(style);
  document.body.appendChild(aiButton);


  aiButton.onclick = function(){

    let chat = document.querySelector("#layl-chat");

    if(chat){
      chat.style.display = "block";
    } else {
      alert("Merhaba, ben LAYL AI. Parfüm seçmenize yardımcı olabilirim.");
    }

  };

});
