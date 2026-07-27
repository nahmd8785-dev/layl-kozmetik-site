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



    if(
      text.includes("layl") ||
      text.includes("marka") ||
      text.includes("hakkında") ||
      text.includes("nedir")
    ){
      if(lang==="ar")
        return "LAYL لمستحضرات التجميل هي علامة متخصصة في العطور ومنتجات العناية والجمال.";

      if(lang==="en")
        return "LAYL Cosmetics is a premium brand focused on perfumes, beauty and personal care products.";

      return "LAYL Kozmetik; premium parfüm, bakım ve güzellik ürünleri sunan bir markadır.";
    }



    if(
      text.includes("sipariş") ||
      text.includes("siparis") ||
      text.includes("satın") ||
      text.includes("almak")
    ){
      if(lang==="ar")
        return "يمكنك الطلب بسهولة عبر واتساب.";

      if(lang==="en")
        return "You can order easily through WhatsApp.";

      return "Sipariş vermek için WhatsApp üzerinden bizimle iletişime geçebilirsiniz.";
    }



    if(
      text.includes("maske") ||
      text.includes("kil") ||
      text.includes("cilt") ||
      text.includes("bakım")
    ){
      if(lang==="ar")
        return "لدينا ماسكات زينيكس للعناية بالبشرة مثل الأفوكادو والليمون وجوز الهند.";

      if(lang==="en")
        return "We have Zenix skincare masks with options like avocado, lemon and coconut.";

      return "LAYL'da Zenix kil maskeleri bulunuyor. Avokado, limon, hindistan cevizi gibi seçenekler mevcut.";
    }



    if(text.includes("kış") || text.includes("kis")){
      return "Kış için vanilya, amber, odunsu ve baharatlı notalara sahip sıcak kokular önerilir.";
    }



    if(text.includes("erkek")){
      return "Erkek parfümlerinde odunsu, baharatlı ve kalıcı kokular iyi seçim olabilir.";
    }



    if(text.includes("kadın")){
      return "Kadın parfümlerinde çiçeksi, tatlı ve zarif notalar tercih edilebilir.";
    }



    if(text.includes("naxos")){
      return "Naxos tarzı sevenler için bal, vanilya, lavanta ve sıcak notalar uygun olabilir.";
    }



    if(
      text.includes("fiyat") ||
      text.includes("ücret") ||
      text.includes("para")
    ){
      if(lang==="ar")
        return "يمكنك معرفة أسعار المنتجات من صفحة المنتجات أو التواصل عبر واتساب.";

      if(lang==="en")
        return "You can check product prices on the product page or contact us via WhatsApp.";

      return "Fiyatları ürün sayfasından görebilir veya WhatsApp üzerinden bilgi alabilirsiniz.";
    }



    if(lang==="ar"){
      return "يمكنني مساعدتك في اختيار العطر المناسب، معرفة المنتجات، الأسعار والطلبات.";
    }


    if(lang==="en"){
      return "I can help you choose perfumes, find products, check prices and place orders.";
    }


    return "LAYL AI size parfüm seçimi, ürün bilgisi, stok, fiyat ve sipariş konularında yardımcı olabilir.";
  }
};
