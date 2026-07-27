window.LAYL_AI = {

  products: () => window.allProducts || [],

  searchProduct(text){
    const products = this.products();
    text = text.toLowerCase();

    return products.filter(p =>
      (p.nameTr || "").toLowerCase().includes(text) ||
      (p.nameAr || "").toLowerCase().includes(text) ||
      (p.nameEn || "").toLowerCase().includes(text)
    );
  },


  answer(message, lang="tr"){

    const text = message.toLowerCase();

    const found = this.searchProduct(message);


    if(found.length){

      let p = found[0];

      if(lang==="ar"){
        return `
${p.nameAr || p.nameTr}

السعر: ${p.price || "غير محدد"} ${p.currency || ""}

المخزون: ${p.stockQty || 0}

${p.descAr || p.descTr || ""}
`;
      }


      if(lang==="en"){
        return `
${p.nameEn || p.nameTr}

Price: ${p.price || "Not specified"} ${p.currency || ""}

Stock: ${p.stockQty || 0}

${p.descEn || p.descTr || ""}
`;
      }


      return `
${p.nameTr}

Fiyat: ${p.price || "Belirtilmemiş"} ${p.currency || ""}

Stok: ${p.stockQty || 0} adet

Ürün hakkında:
${p.descTr || ""}
`;
    }



    if(text.includes("kış") || text.includes("kis")){
      return "Kış için önerim: vanilya, amber, odunsu ve baharatlı notalara sahip LAYL parfümler.";
    }


    if(text.includes("erkek")){
      return "Erkek parfüm önerisi: güçlü, kalıcı ve odunsu notalara sahip kokular tercih edilebilir.";
    }


    if(text.includes("kadın")){
      return "Kadın parfüm önerisi: çiçeksi, tatlı ve zarif notalar güzel seçim olabilir.";
    }


    if(text.includes("naxos")){
      return "Naxos tarzı sevenler için bal, vanilya, lavanta ve sıcak notalar uygun olur.";
    }


    if(lang==="ar"){
      return "يمكنني مساعدتك في اختيار العطر المناسب والمنتجات.";
    }


    if(lang==="en"){
      return "I can help you choose perfumes and products.";
    }


    return "LAYL AI size parfüm seçimi, ürün bilgisi, stok ve sipariş konularında yardımcı olabilir.";
  }
};
