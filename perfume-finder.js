(() => {
const style=document.createElement("style");
style.textContent=`
.pf-wrap{padding:20px 0 45px}
.pf-box{border:1px solid rgba(245,220,138,.35);border-radius:30px;padding:30px;background:linear-gradient(135deg,#2b1e0d,#080808);box-shadow:0 24px 70px rgba(0,0,0,.35)}
.pf-head{text-align:center}
.pf-head h2{font-family:Georgia,serif;font-size:clamp(30px,5vw,52px);margin:10px 0;color:#f0d36d}
.pf-head p{color:#bdb5a6;line-height:1.7}
.pf-quiz,.pf-results{display:none;margin-top:25px}
.pf-quiz.show,.pf-results.show{display:block}
.pf-progress{height:7px;background:#242018;border-radius:99px;overflow:hidden;margin-bottom:22px}
.pf-progress i{display:block;height:100%;background:linear-gradient(90deg,#d4af37,#f5dc8a);transition:.3s}
.pf-question{text-align:center}
.pf-question h3{font-size:25px}
.pf-options{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;max-width:760px;margin:auto}
.pf-option{border:1px solid rgba(212,175,55,.4);background:#111;color:#fff;padding:16px 10px;border-radius:16px;font-weight:800;cursor:pointer}
.pf-option:hover{border-color:#f0d36d;background:#211b0e}
.pf-result-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.pf-result{border:1px solid rgba(212,175,55,.3);background:#111;border-radius:18px;overflow:hidden}
.pf-result img{width:100%;height:190px;object-fit:cover}
.pf-result-body{padding:15px}
.pf-score{color:#f0d36d;font-weight:900}
.pf-empty{text-align:center;color:#bdb5a6;padding:25px;grid-column:1/-1}
.pf-start,.pf-restart{display:block;margin:20px auto 0}
@media(max-width:700px){
.pf-box{padding:22px 15px}
.pf-options{grid-template-columns:1fr 1fr}
.pf-result-grid{grid-template-columns:1fr}
}`;
document.head.appendChild(style);

const texts={
tr:{
title:"Sana En Uygun Parfümü Bul",
sub:"5 kısa soruyu cevapla, sana en uygun parfümleri keşfet.",
start:"Parfümümü Bul",
restart:"Tekrar Dene",
result:"Sana En Uygun Parfümler",
none:"Henüz eşleşen parfüm bulunamadı. Parfümler eklendikçe öneriler burada görünecek.",
questions:[
["Kimin için?",["Kadın","Erkek","Unisex"]],
["Nasıl bir koku seviyorsun?",["Tatlı","Ferah","Odunsu","Baharatlı","Çiçeksi"]],
["Hangi mevsim?",["Yaz","Kış","İlkbahar","Sonbahar"]],
["Ne zaman kullanacaksın?",["Gündüz","Gece","Günlük","Özel Gün"]],
["Koku yoğunluğu?",["Hafif","Orta","Güçlü"]]
]},
ar:{
title:"اعثر على عطرك المثالي",
sub:"أجب عن 5 أسئلة قصيرة واكتشف العطور الأنسب لك.",
start:"اعثر على عطري",
restart:"إعادة الاختبار",
result:"العطور الأنسب لك",
none:"لا توجد عطور مطابقة بعد. ستظهر الاقتراحات هنا عند إضافة العطور.",
questions:[
["لمن؟",["نسائي","رجالي","للجنسين"]],
["ما نوع الرائحة التي تفضلها؟",["حلوة","منعشة","خشبية","حارة","زهرية"]],
["أي فصل؟",["الصيف","الشتاء","الربيع","الخريف"]],
["متى ستستخدمه؟",["النهار","الليل","يومي","مناسبة خاصة"]],
["قوة الرائحة؟",["خفيفة","متوسطة","قوية"]]
]},
en:{
title:"Find Your Perfect Perfume",
sub:"Answer 5 quick questions and discover your best perfume matches.",
start:"Find My Perfume",
restart:"Try Again",
result:"Your Best Perfume Matches",
none:"No matching perfumes yet. Recommendations will appear as perfumes are added.",
questions:[
["Who is it for?",["Women","Men","Unisex"]],
["What scent style do you like?",["Sweet","Fresh","Woody","Spicy","Floral"]],
["Which season?",["Summer","Winter","Spring","Autumn"]],
["When will you wear it?",["Day","Night","Daily","Special Occasion"]],
["Scent strength?",["Light","Medium","Strong"]]
]}
};

const section=document.createElement("section");
section.className="pf-wrap";
section.innerHTML=`
<div class="container">
<div class="pf-box">
<div class="pf-head">
<div class="hero-badge">✦ LAYL PERFUME MATCH</div>
<h2 id="pfTitle"></h2>
<p id="pfSub"></p>
<button class="btn gold pf-start" id="pfStart"></button>
</div>

<div class="pf-quiz" id="pfQuiz">
<div class="pf-progress"><i id="pfBar"></i></div>
<div class="pf-question">
<h3 id="pfQuestion"></h3>
<div class="pf-options" id="pfOptions"></div>
</div>
</div>

<div class="pf-results" id="pfResults">
<h3 id="pfResultTitle" style="text-align:center"></h3>
<div class="pf-result-grid" id="pfResultGrid"></div>
<button class="btn pf-restart" id="pfRestart"></button>
</div>
</div>
</div>`;

const hero=document.querySelector(".hero");
if(hero) hero.insertAdjacentElement("afterend",section);

let step=0;
let answers=[];

function getLang(){
return localStorage.getItem("laylLang") || "ar";
}

function getText(){
return texts[getLang()] || texts.ar;
}

function updateText(){
const x=getText();
document.getElementById("pfTitle").textContent=x.title;
document.getElementById("pfSub").textContent=x.sub;
document.getElementById("pfStart").textContent=x.start;
document.getElementById("pfRestart").textContent=x.restart;
document.getElementById("pfResultTitle").textContent=x.result;
}

function showQuestion(){
const x=getText();
const q=x.questions[step];
document.getElementById("pfQuestion").textContent=q[0];
document.getElementById("pfBar").style.width=((step+1)/5*100)+"%";
document.getElementById("pfOptions").innerHTML=q[1].map((option,index)=>
`<button class="pf-option" data-index="${index}">${option}</button>`
).join("");
}

function startQuiz(){
step=0;
answers=[];
document.getElementById("pfStart").style.display="none";
document.getElementById("pfResults").classList.remove("show");
document.getElementById("pfQuiz").classList.add("show");
showQuestion();
}

function finishQuiz(){
document.getElementById("pfQuiz").classList.remove("show");
document.getElementById("pfResults").classList.add("show");

const keys=[
["women","men","unisex"],
["sweet","fresh","woody","spicy","floral"],
["summer","winter","spring","autumn"],
["day","night","daily","special"],
["light","medium","strong"]
];
const wanted=answers.map((a,i)=>keys[i][a]);
const products=(window.allProducts || [])
.filter(p=>p.category==="perfume")
.map(p=>{const x=p.perfumeProfile||{};let score=0;["gender","scent","season","occasion","strength"].forEach((k,i)=>{if(x[k]===wanted[i])score++});return {...p,_match:score};})
.sort((a,b)=>b._match-a._match)
.slice(0,3);

if(!products.length){
document.getElementById("pfResultGrid").innerHTML=
`<div class="pf-empty">${getText().none}</div>`;
return;
}

document.getElementById("pfResultGrid").innerHTML=products.map(p=>{
let language=getLang();
let name=language==="ar"?(p.nameAr||p.nameTr):
language==="en"?(p.nameEn||p.nameTr):
(p.nameTr||p.nameEn||p.nameAr);

return `
<div class="pf-result">
<img src="${p.image||"logo.jpeg"}" alt="">
<div class="pf-result-body">
<div class="pf-score">✦ ${Math.round((p._match||0)/5*100)}% MATCH</div>
<h3>${name||"LAYL Perfume"}</h3>
</div>
</div>`;
}).join("");
}

document.getElementById("pfStart").onclick=startQuiz;
document.getElementById("pfRestart").onclick=startQuiz;

document.getElementById("pfOptions").onclick=e=>{
const button=e.target.closest("[data-index]");
if(!button)return;

answers.push(Number(button.dataset.index));
step++;

if(step<5){
showQuestion();
}else{
finishQuiz();
}
};

["arBtn","trBtn","enBtn"].forEach(id=>{
document.getElementById(id)?.addEventListener("click",()=>{
setTimeout(updateText,100);
});
});

updateText();
})();
