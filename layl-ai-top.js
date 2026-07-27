document.addEventListener("DOMContentLoaded", function(){

const btn=document.createElement("div");
btn.id="layl-ai-btn";
btn.innerHTML="🤖";

const chat=document.createElement("div");
chat.id="layl-ai-chat";

chat.innerHTML=`
<div class="layl-head">
LAYL AI
<span id="layl-close">×</span>
</div>

<div id="layl-messages">
<div class="bot">Merhaba 👋 Ben LAYL AI. Parfüm, ürün, fiyat ve sipariş konusunda yardımcı olabilirim.</div>
</div>

<div class="layl-input">
<input id="layl-text" placeholder="Mesaj yazın...">
<button id="layl-send">➤</button>
</div>
`;

document.body.appendChild(btn);
document.body.appendChild(chat);


const style=document.createElement("style");
style.innerHTML=`

#layl-ai-btn{
position:fixed;
right:20px;
bottom:90px;
width:75px;
height:75px;
border-radius:50%;
background:#111;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:38px;
cursor:pointer;
z-index:999999;
box-shadow:0 5px 20px #0005;
}

#layl-ai-chat{
display:none;
position:fixed;
right:20px;
bottom:90px;
width:360px;
height:520px;
background:white;
border-radius:20px;
box-shadow:0 10px 40px #0005;
overflow:hidden;
z-index:999999;
}

.layl-head{
background:#111;
color:white;
padding:18px;
font-size:22px;
display:flex;
justify-content:space-between;
}

#layl-messages{
height:390px;
padding:10px;
overflow-y:auto;
}

.bot,.user{
max-width:80%;
padding:12px;
margin:10px;
border-radius:15px;
font-size:15px;
}

.bot{
background:#eee;
color:#111;
}

.user{
background:#111;
color:white;
margin-left:auto;
text-align:right;
}

.layl-input{
display:flex;
padding:10px;
border-top:1px solid #ddd;
}

.layl-input input{
flex:1;
padding:12px;
border-radius:10px;
border:1px solid #ccc;
}

.layl-input button{
width:50px;
margin-left:5px;
background:#111;
color:white;
border:0;
border-radius:10px;
}

@media(max-width:600px){

#layl-ai-chat{
right:10px;
bottom:80px;
width:calc(100% - 20px);
height:520px;
}

#layl-ai-btn{
right:15px;
bottom:80px;
}

}

`;

document.head.appendChild(style);


btn.onclick=()=>{
chat.style.display="block";
};

document.getElementById("layl-close").onclick=()=>{
chat.style.display="none";
};


document.getElementById("layl-send").onclick=function(){

let input=document.getElementById("layl-text");
let text=input.value.trim();

if(!text)return;

let area=document.getElementById("layl-messages");

area.innerHTML+=`
<div class="user">${text}</div>
`;

let t=text.toLowerCase();
let cevap="";


if(t.includes("merhaba")||t.includes("selam")){
cevap="Merhaba 👋 LAYL AI size yardımcı olabilir.";
}
else if(t.includes("erkek")){
cevap="Erkek parfümleri için kalıcı ve şık seçenekler önerebilirim.";
}
else if(t.includes("kadın")){
cevap="Kadın parfümleri için zarif ve özel seçenekler önerebilirim.";
}
else if(t.includes("fiyat")||t.includes("price")||t.includes("سعر")){
cevap="Ürün fiyatlarını ürün sayfasından görebilirsiniz.";
}
else if(t.includes("عطر")){
cevap="يمكنني مساعدتك في اختيار العطر المناسب.";
}
else if(t.includes("hello")){
cevap="Hello 👋 I am LAYL AI assistant.";
}
else{
cevap="Parfüm seçimi, ürün bilgisi, fiyat, stok ve sipariş konularında yardımcı olabilirim.";
}


setTimeout(()=>{
area.innerHTML+=`
<div class="bot">${cevap}</div>
`;
area.scrollTop=area.scrollHeight;
},500);


input.value="";

};

});
