document.addEventListener("DOMContentLoaded",()=>{

let lang=localStorage.getItem("laylLanguage")||"tr";

const box=document.createElement("div");
box.innerHTML=`
<div id="layl-btn">🤖</div>

<div id="layl-chat">

<div class="head">
LAYL AI
<span id="close">×</span>
</div>

<div id="messages">
<div class="bot">${getText("hello")}</div>
</div>

<div class="send">
<input id="input" placeholder="${getText("write")}">
<button id="send">➤</button>
</div>

</div>
`;

document.body.appendChild(box);


const style=document.createElement("style");
style.innerHTML=`

#layl-btn{
position:fixed;
right:20px;
bottom:90px;
background:#111;
color:white;
width:70px;
height:70px;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
font-size:35px;
z-index:99999;
}

#layl-chat{
display:none;
position:fixed;
right:20px;
bottom:90px;
width:360px;
height:520px;
background:white;
border-radius:20px;
box-shadow:0 10px 40px #0005;
z-index:99999;
overflow:hidden;
}

.head{
background:#111;
color:white;
padding:18px;
font-size:22px;
display:flex;
justify-content:space-between;
}

#messages{
height:390px;
overflow:auto;
padding:10px;
}

.bot,.user{
padding:12px;
margin:8px;
border-radius:15px;
max-width:80%;
}

.bot{
background:#eee;
color:#111;
}

.user{
background:#111;
color:white;
margin-left:auto;
}

.send{
display:flex;
padding:10px;
}

.send input{
flex:1;
padding:12px;
}

.send button{
width:50px;
}

`;

document.head.appendChild(style);


function getText(key){

let t={
tr:{
hello:"Merhaba 👋 Ben LAYL AI. Parfüm ve ürün konusunda yardımcı olabilirim.",
write:"Mesaj yazın",
not:"Size ürün, parfüm, fiyat ve sipariş konusunda yardımcı olabilirim."
},

ar:{
hello:"مرحباً 👋 أنا مساعد LAYL للذكاء الاصطناعي.",
write:"اكتب رسالة",
not:"يمكنني مساعدتك في العطور والمنتجات والطلبات."
},

en:{
hello:"Hello 👋 I am LAYL AI assistant.",
write:"Write a message",
not:"I can help with perfumes, products and orders."
}

};

return t[lang][key]||t.tr[key];

}



function answer(msg){

let m=msg.toLowerCase();

if(m.includes("عطر")||m.includes("parfüm")||m.includes("perfume"))
return lang=="ar"?
"يمكنني اقتراح عطر مناسب حسب ذوقك.":
lang=="en"?
"I can suggest a perfume based on your style.":
"Tarzınıza uygun parfüm önerebilirim.";

if(m.includes("fiyat")||m.includes("price")||m.includes("سعر"))
return lang=="ar"?
"يمكنك رؤية الأسعار من صفحة المنتجات.":
lang=="en"?
"You can see prices on product pages.":
"Ürün fiyatlarını ürün sayfasından görebilirsiniz.";

if(m.includes("stok")||m.includes("stock"))
return "Stok bilgisi için ürün detaylarına bakabilirsiniz.";

if(m.includes("sipariş")||m.includes("order"))
return "Sipariş için WhatsApp destek hattımız yardımcı olabilir.";

if(m.includes("erkek"))
return "Erkek için güçlü, kalıcı ve şık kokular önerebilirim.";

if(m.includes("kadın"))
return "Kadın için zarif ve özel kokular önerebilirim.";

return getText("not");

}



document.querySelector("#layl-btn").onclick=()=>{
document.querySelector("#layl-chat").style.display="block";
};

document.querySelector("#close").onclick=()=>{
document.querySelector("#layl-chat").style.display="none";
};


document.querySelector("#send").onclick=()=>{

let input=document.querySelector("#input");
let text=input.value;

if(!text)return;

let area=document.querySelector("#messages");

area.innerHTML+=`
<div class="user">${text}</div>
`;

setTimeout(()=>{

area.innerHTML+=`
<div class="bot">${answer(text)}</div>
`;

area.scrollTop=area.scrollHeight;

},400);


input.value="";

};

});
