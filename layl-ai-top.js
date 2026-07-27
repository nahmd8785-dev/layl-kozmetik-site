document.addEventListener("DOMContentLoaded",()=>{

let getLang=()=>localStorage.getItem("laylLang")||"ar";


const words={
tr:{
hello:"Merhaba 👋 Ben LAYL AI. LAYL ürünleri hakkında yardımcı olabilirim.",
default:"Size ürün seçimi, kullanım, fiyat ve stok konusunda yardımcı olabilirim.",
mask:"Maske ürünlerimiz hakkında yardımcı olabilirim. Cilt ihtiyacınıza göre seçim yapabiliriz.",
cream:"Krem ürünlerimiz hakkında bilgi verebilirim.",
perfume:"Parfüm seçiminizde yardımcı olabilirim."
},
ar:{
hello:"مرحباً 👋 أنا مساعد LAYL للمنتجات.",
default:"يمكنني مساعدتك في المنتجات والأسعار والمخزون.",
mask:"يمكنني مساعدتك في اختيار الماسكات المناسبة.",
cream:"يمكنني مساعدتك في الكريمات.",
perfume:"يمكنني مساعدتك في اختيار العطر المناسب."
},
en:{
hello:"Hello 👋 I am LAYL AI product assistant.",
default:"I can help with products, prices and stock.",
mask:"I can help you choose skincare masks.",
cream:"I can help you with creams.",
perfume:"I can help you choose perfumes."
}
};


function langText(){
return words[getLang()]||words.tr;
}


function findProduct(msg){

let products=window.allProducts||[];
let text=msg.toLowerCase();

return products.find(p=>{

let all=[
p.nameTr,
p.nameAr,
p.nameEn,
p.title
]
.filter(Boolean)
.join(" ")
.toLowerCase();

return all.split(" ").some(x=>x.length>3 && text.includes(x));

});

}


function answer(msg){

let t=langText();
let text=msg.toLowerCase();

let product=findProduct(msg);


if(product){

let name=
getLang()=="ar" ? product.nameAr :
getLang()=="en" ? product.nameEn :
product.nameTr;


let desc=
product.descriptionTr ||
product.descriptionAr ||
product.descriptionEn ||
product.description ||
product.desc ||
product.details ||
product.content ||
"";


let price=
product.price ||
product.salePrice ||
"";


let stock=
product.stock===0 ?
"Tükendi" :
"";


return `
<b>${name||"LAYL Ürün"}</b><br>
${desc || "Ürün bilgisi mevcut."}<br>
${price ? "Fiyat: "+price+" TL":""}
${stock}
`;

}


if(text.includes("maske")||text.includes("mask")||text.includes("ماسك"))
return t.mask;


if(text.includes("krem")||text.includes("cream")||text.includes("كريم"))
return t.cream;


if(text.includes("parfüm")||text.includes("perfume")||text.includes("عطر"))
return t.perfume;


return t.default;

}



const app=document.createElement("div");

app.innerHTML=`

<div id="layl-ai-button">🤖</div>

<div id="layl-ai-box">

<div class="layl-ai-header">
LAYL AI
<span id="layl-ai-close">×</span>
</div>

<div id="layl-ai-messages">
<div class="layl-ai-bot">${langText().hello}</div>
</div>

<div class="layl-ai-input">
<input id="layl-ai-text" placeholder="...">
<button id="layl-ai-send">➤</button>
</div>

</div>

`;

document.body.appendChild(app);


let css=document.createElement("style");

css.innerHTML=`

#layl-ai-button{
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
}

#layl-ai-box{
display:none;
position:fixed;
right:20px;
bottom:90px;
width:360px;
height:520px;
background:white;
border-radius:20px;
overflow:hidden;
box-shadow:0 10px 40px #000;
z-index:99999;
}

.layl-ai-header{
background:#111;
color:white;
padding:18px;
font-size:22px;
display:flex;
justify-content:space-between;
}

#layl-ai-messages{
height:390px;
overflow:auto;
padding:10px;
}

.layl-ai-bot,.layl-ai-user{
padding:12px;
margin:8px;
border-radius:15px;
}

.layl-ai-bot{
background:#eee;
color:#111;
}

.layl-ai-user{
background:#111;
color:white;
}

.layl-ai-input{
display:flex;
padding:10px;
}

.layl-ai-input input{
flex:1;
padding:12px;
}

`;

document.head.appendChild(css);


document.querySelector("#layl-ai-button").onclick=()=>{
document.querySelector("#layl-ai-box").style.display="block";
};


document.querySelector("#layl-ai-close").onclick=()=>{
document.querySelector("#layl-ai-box").style.display="none";
};


document.querySelector("#layl-ai-send").onclick=()=>{

let input=document.querySelector("#layl-ai-text");
let msg=input.value.trim();

if(!msg)return;

let area=document.querySelector("#layl-ai-messages");

area.innerHTML+=`<div class="layl-ai-user">${msg}</div>`;

setTimeout(()=>{

area.innerHTML+=`<div class="layl-ai-bot">${answer(msg)}</div>`;
area.scrollTop=area.scrollHeight;

},300);

input.value="";

};

});
