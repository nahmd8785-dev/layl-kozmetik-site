document.addEventListener("DOMContentLoaded",()=>{

let lang=localStorage.getItem("laylLang")||"ar";

const text={
tr:{
hello:"Merhaba 👋 Ben LAYL AI. Tüm ürünler hakkında yardımcı olabilirim.",
write:"Mesaj yazın...",
not:"Size ürün, fiyat, stok ve kullanım bilgileri konusunda yardımcı olabilirim."
},
ar:{
hello:"مرحباً 👋 أنا مساعد LAYL. يمكنني مساعدتك في جميع المنتجات.",
write:"اكتب رسالتك...",
not:"يمكنني مساعدتك في المنتجات والأسعار والمخزون."
},
en:{
hello:"Hello 👋 I am LAYL AI. I can help with all products.",
write:"Write a message...",
not:"I can help with products, prices and stock."
}
};


function getLang(){
lang=localStorage.getItem("laylLang")||"ar";
return text[lang]||text.ar;
}


function findProduct(message){

let products=window.allProducts||[];

let m=message.toLowerCase();

return products.find(p=>{

let names=[
p.nameTr,
p.nameAr,
p.nameEn
].filter(Boolean).join(" ").toLowerCase();

return names.split(" ").some(word=>
word.length>3 && m.includes(word)
);

});

}


function answer(message){

let t=getLang();
let m=message.toLowerCase();

let product=findProduct(message);

if(product){

let name=
lang==="ar" ? product.nameAr :
lang==="en" ? product.nameEn :
product.nameTr;

return `
<b>${name||"LAYL Ürün"}</b><br>
${product.descriptionTr||product.descriptionAr||"Ürün bilgisi mevcut."}
<br>
${product.price ? "Fiyat: "+product.price+" TL":""}
`;

}


if(
m.includes("maske")||
m.includes("mask")||
m.includes("ماسك")
)
return lang==="ar"?
"لدينا ماسكات للعناية بالبشرة. يمكنني مساعدتك باختيار المناسب.":
lang==="en"?
"We have skincare masks. I can help you choose one.":
"Maske ürünlerimiz var. Cilt ihtiyacınıza göre seçim yapabiliriz.";


if(
m.includes("krem")||
m.includes("cream")||
m.includes("كريم")
)
return lang==="ar"?
"لدينا كريمات للعناية بالبشرة.":
lang==="en"?
"We have skincare creams.":
"Krem ürünlerimiz mevcut. Size uygun olanı bulabiliriz.";


if(
m.includes("fiyat")||
m.includes("price")||
m.includes("سعر")
)
return t.not;


if(
m.includes("stok")||
m.includes("stock")||
m.includes("متوفر")
)
return t.not;


if(
m.includes("parfüm")||
m.includes("perfume")||
m.includes("عطر")
)
return lang==="ar"?
"يمكنني مساعدتك في اختيار العطر المناسب.":
lang==="en"?
"I can help you choose the right perfume.":
"Size uygun parfüm seçmenize yardımcı olabilirim.";


return t.not;

}



const app=document.createElement("div");

app.innerHTML=`

<div id="layl-ai-btn">🤖</div>

<div id="layl-ai-chat">

<div class="ai-head">
LAYL AI
<span id="ai-close">×</span>
</div>

<div id="ai-msg">
<div class="bot">${getLang().hello}</div>
</div>

<div class="ai-send">
<input id="ai-input" placeholder="${getLang().write}">
<button id="ai-send">➤</button>
</div>

</div>

`;

document.body.appendChild(app);


let css=document.createElement("style");
css.innerHTML=`

#layl-ai-btn{
position:fixed;
right:20px;
bottom:90px;
width:70px;
height:70px;
border-radius:50%;
background:#111;
color:white;
display:flex;
align-items:center;
justify-content:center;
font-size:35px;
z-index:99999;
cursor:pointer;
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
overflow:hidden;
z-index:99999;
box-shadow:0 10px 40px #000;
}

.ai-head{
background:#111;
color:white;
padding:18px;
font-size:22px;
display:flex;
justify-content:space-between;
}

#ai-msg{
height:390px;
overflow:auto;
padding:10px;
}

.bot,.user{
padding:12px;
margin:8px;
border-radius:15px;
}

.bot{
background:#eee;
color:#111;
}

.user{
background:#111;
color:white;
}

.ai-send{
display:flex;
padding:10px;
}

.ai-send input{
flex:1;
padding:12px;
}

.ai-send button{
width:50px;
}

`;

document.head.appendChild(css);


document.querySelector("#layl-ai-btn").onclick=()=>{
document.querySelector("#layl-ai-chat").style.display="block";
};


document.querySelector("#ai-close").onclick=()=>{
document.querySelector("#layl-ai-chat").style.display="none";
};


document.querySelector("#ai-send").onclick=()=>{

let input=document.querySelector("#ai-input");
let msg=input.value.trim();

if(!msg)return;

let box=document.querySelector("#ai-msg");

box.innerHTML+=`<div class="user">${msg}</div>`;

setTimeout(()=>{

box.innerHTML+=`<div class="bot">${answer(msg)}</div>`;
box.scrollTop=box.scrollHeight;

},300);

input.value="";

};


});
