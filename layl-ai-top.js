document.addEventListener("DOMContentLoaded", function(){

const button=document.createElement("div");
button.id="layl-ai-btn";
button.innerHTML="🤖";

const chat=document.createElement("div");
chat.id="layl-ai-chat";

chat.innerHTML=`

<div class="layl-title">
LAYL AI
<span id="layl-x">×</span>
</div>

<div id="layl-msg">
<div class="bot">
Merhaba 👋 Ben LAYL AI. Parfüm seçimi, ürünler ve sipariş konusunda yardımcı olabilirim.
</div>
</div>

<div class="layl-send">
<input id="layl-input" placeholder="Mesaj yazın...">
<button id="layl-go">➤</button>
</div>

`;

document.body.appendChild(button);
document.body.appendChild(chat);


let css=document.createElement("style");

css.innerHTML=`

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
}


#layl-ai-chat{
display:none;
position:fixed;
right:20px;
bottom:180px;
width:350px;
height:500px;
background:white;
border-radius:20px;
box-shadow:0 10px 40px #0005;
overflow:hidden;
z-index:999999;
}


.layl-title{
background:#111;
color:white;
padding:18px;
font-size:22px;
display:flex;
justify-content:space-between;
}


#layl-msg{
height:380px;
padding:10px;
overflow:auto;
}


.bot,.user{
padding:12px;
margin:8px;
border-radius:15px;
}


.bot{
background:#eee;
}


.user{
background:#111;
color:white;
}


.layl-send{
display:flex;
padding:10px;
}


.layl-send input{
flex:1;
padding:12px;
border-radius:10px;
border:1px solid #ccc;
}


.layl-send button{
width:50px;
margin-left:5px;
}


`;

document.head.appendChild(css);



button.onclick=()=>{
chat.style.display="block";
};


document.getElementById("layl-x").onclick=()=>{
chat.style.display="none";
};



document.getElementById("layl-go").onclick=function(){

let input=document.getElementById("layl-input");

let text=input.value.toLowerCase();

if(!text)return;


let box=document.getElementById("layl-msg");

box.innerHTML+=`
<div class="user">${input.value}</div>
`;


let cevap="";


if(text.includes("merhaba")||text.includes("selam")){
cevap="Merhaba 👋 LAYL AI size yardımcı olmaktan mutluluk duyar.";
}

else if(text.includes("erkek")){
cevap="Erkek parfümleri için kalıcı, odunsu, ferah ve güçlü seçenekler önerebilirim.";
}

else if(text.includes("kadın")){
cevap="Kadın parfümlerinde çiçeksi, tatlı ve zarif seçenekler önerebilirim.";
}

else if(text.includes("unisex")){
cevap="Unisex parfümler hem kadın hem erkek kullanımı için uygundur.";
}

else if(text.includes("fiyat")||text.includes("price")||text.includes("سعر")){
cevap="Ürün fiyatlarını LAYL ürün sayfasından görebilirsiniz.";
}

else if(text.includes("stok")){
cevap="Stok bilgisi için ürün detaylarını kontrol edebilirsiniz.";
}

else if(text.includes("sipariş")){
cevap="Sipariş için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.";
}

else if(text.includes("عطر")){
cevap="يمكنني مساعدتك في اختيار العطر المناسب.";
}

else if(text.includes("hello")){
cevap="Hello 👋 I am LAYL AI assistant.";
}

else{
cevap="Size parfüm seçimi, ürün bilgisi, fiyat, stok ve sipariş konularında yardımcı olabilirim.";
}


setTimeout(()=>{

box.innerHTML+=`
<div class="bot">${cevap}</div>
`;

box.scrollTop=box.scrollHeight;

},500);


input.value="";

};


});
