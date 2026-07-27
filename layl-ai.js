// LAYL AI Asistan

window.laylAI = function(message, lang = "tr") {

  const text = message.toLowerCase();


  // Önce ürünleri kontrol et
  if (window.LAYL_AI && window.LAYL_AI.answer) {

    const productAnswer = window.LAYL_AI.answer(message, lang);

    if (
      productAnswer &&
      !productAnswer.includes("Ürün, fiyat, stok")
    ) {
      return productAnswer;
    }
  }


  const responses = {

    tr: {
      hello:
      "Merhaba, ben LAYL AI. Parfüm seçimi, ürün bilgisi ve sipariş konusunda yardımcı olabilirim.",

      perfume:
      "Size uygun parfümü bulabilirim. Erkek, kadın veya unisex seçeneklerinden yardımcı olabilirim.",

      male:
      "Erkek parfümlerinde odunsu, baharatlı, amber ve vanilyalı kokular önerebilirim.",

      female:
      "Kadın parfümlerinde çiçeksi, tatlı ve zarif kokular önerebilirim.",

      vanilla:
      "Vanilyalı kokular sıcak, tatlı ve kalıcı bir his verir.",

      price:
      "Ürün fiyatlarını ürün sayfasından görebilirsiniz.",

      stock:
      "Stok bilgilerini ürün sayfasından kontrol edebilirsiniz.",

      default:
      "LAYL AI size parfüm seçimi, ürün bilgisi ve stok konusunda yardımcı olabilir."
    },


    ar: {
      hello:
      "مرحباً، أنا مساعد LAYL للذكاء الاصطناعي.",

      perfume:
      "يمكنني مساعدتك في اختيار العطر المناسب.",

      male:
      "لدينا عطور رجالية بروائح قوية وفاخرة.",

      female:
      "لدينا عطور نسائية بروائح ناعمة وجذابة.",

      default:
      "يمكنني مساعدتك في اختيار العطور والمنتجات."
    },


    en: {
      hello:
      "Hello, I am LAYL AI assistant.",

      perfume:
      "I can help you choose the right perfume.",

      male:
      "I can recommend strong and elegant men's perfumes.",

      female:
      "I can recommend elegant women's perfumes.",

      default:
      "I can help you with perfumes and products."
    }

  };


  const r = responses[lang] || responses.tr;


  if(
    text.includes("merhaba") ||
    text.includes("hello") ||
    text.includes("مرحبا")
  )
  return r.hello;


  if(
    text.includes("parfüm") ||
    text.includes("perfume") ||
    text.includes("عطر")
  )
  return r.perfume;


  if(
    text.includes("erkek") ||
    text.includes("male") ||
    text.includes("رجال")
  )
  return r.male;


  if(
    text.includes("kadın") ||
    text.includes("female") ||
    text.includes("نساء")
  )
  return r.female;


  if(
    text.includes("vanilya") ||
    text.includes("vanilla")
  )
  return r.vanilla;


  if(
    text.includes("fiyat") ||
    text.includes("price")
  )
  return r.price;


  if(
    text.includes("stok") ||
    text.includes("stock")
  )
  return r.stock;


  return r.default;

};
