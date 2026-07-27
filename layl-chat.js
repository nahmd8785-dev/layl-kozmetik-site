// LAYL AI Chat

function openLaylChat() {

  let oldChat = document.getElementById("layl-chat-box");

  if (oldChat) {
    oldChat.style.display = "flex";
    return;
  }

  const chat = document.createElement("div");
  chat.id = "layl-chat-box";

  chat.innerHTML = `
    <div class="layl-header">
      🤖 LAYL AI
      <span id="layl-close">×</span>
    </div>

    <div id="layl-messages">
      <div class="ai-message">
      Merhaba, ben LAYL AI. Ürün seçimi, parfüm önerisi ve site hakkında yardımcı olabilirim.
      </div>
    </div>

    <div class="layl-input">
      <input id="layl-text" placeholder="Bir şey yazın...">
      <button id="layl-send">➤</button>
    </div>
  `;

  document.body.appendChild(chat);

  const style = document.createElement("style");

  style.innerHTML = `

  #layl-chat-box {
    position:fixed;
    right:20px;
    bottom:170px;
    width:330px;
    height:450px;
    background:white;
    border-radius:20px;
    box-shadow:0 5px 30px rgba(0,0,0,.3);
    display:flex;
    flex-direction:column;
    overflow:hidden;
    z-index:999999;
    font-family:Arial;
  }

  .layl-header {
    background:#111;
    color:white;
    padding:15px;
    font-size:18px;
    display:flex;
    justify-content:space-between;
  }

  #layl-close {
    cursor:pointer;
    font-size:25px;
  }

  #layl-messages {
    flex:1;
    padding:15px;
    overflow:auto;
  }

  .ai-message,
  .user-message {
    padding:10px;
    margin:8px 0;
    border-radius:15px;
    max-width:80%;
  }

  .ai-message {
    background:#eee;
  }

  .user-message {
    background:#111;
    color:white;
    margin-left:auto;
  }

  .layl-input {
    display:flex;
    padding:10px;
    border-top:1px solid #ddd;
  }

  .layl-input input {
    flex:1;
    padding:10px;
    border-radius:20px;
    border:1px solid #ccc;
  }

  .layl-input button {
    margin-left:8px;
    border-radius:50%;
    width:40px;
    border:none;
    background:#111;
    color:white;
  }

  `;

  document.head.appendChild(style);

  document.getElementById("layl-send").onclick = function(){

    const input = document.getElementById("layl-text");
    const text = input.value;

    if(!text) return;

    const messages = document.getElementById("layl-messages");

    messages.innerHTML += `
    <div class="user-message">
    ${text}
    </div>
    `;

    let lang = "tr";

if (
  /[\u0600-\u06FF]/.test(text)
) {
  lang = "ar";
}

if (
  /^[a-zA-Z\s]+$/.test(text)
) {
  lang = "en";
}

const answer = laylAI(text, lang);

    messages.innerHTML += `
    <div class="ai-message">
    ${answer}
    </div>
    `;

    input.value="";

    messages.scrollTop = messages.scrollHeight;

  };

  document.getElementById("layl-close").onclick=function(){
    chat.style.display="none";
  };

}
