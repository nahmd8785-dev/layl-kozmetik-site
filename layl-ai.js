// LAYL AI Asistan

const laylAI = (message, lang = "tr") => {
  const text = message.toLowerCase();

  const responses = {
    tr: {
      hello: "Merhaba, ben LAYL AI. Ürün seçimi, parfüm önerisi ve site hakkında yardımcı olabilirim.",
      perfume: "Size uygun parfümü bulabilirim. Erkek, kadın veya unisex seçeneklerinden tercih yapabilirsiniz.",
      male: "Erkek parfümlerinde odunsu, baharatlı, ferah ve güçlü kokular önerebilirim.",
      female: "Kadın parfümlerinde çiçeksi, tatlı, vanilyalı ve zarif kokular önerebilirim.",
      unisex: "Unisex parfümler hem kadın hem erkek kullanımı için uygundur.",
      vanilla: "Vanilyalı ve tatlı kokular sıcak ve dikkat çekici bir his verir.",
      fresh: "Ferah kokular günlük kullanım için uygundur.",
      price: "Ürün fiyatlarını ürün sayfasından görebilirsiniz.",
      stock: "Stok bilgisi için ürün sayfasındaki bilgileri kontrol edebilirsiniz.",
      category: "Kategoriler: Erkek Parfüm, Kadın Parfüm, Unisex Parfüm ve Mask ürünleri.",
      whatsapp: "Size yardımcı olmam için WhatsApp üzerinden de iletişime geçebilirsiniz.",
      default: "Size yardımcı olabilirim. Parfüm, ürün, fiyat, stok veya kategori hakkında soru sorabilirsiniz."
    },

    ar: {
      hello: "مرحباً، أنا مساعد LAYL للذكاء الاصطناعي. يمكنني مساعدتك في اختيار المنتجات.",
      perfume: "يمكنني مساعدتك في اختيار العطر المناسب.",
      male: "لدينا عطور رجالية بروائح قوية ومنعشة.",
      female: "لدينا عطور نسائية بروائح ناعمة وجذابة.",
      unisex: "عطور مناسبة للنساء والرجال.",
      price: "يمكنك رؤية الأسعار من صفحة المنتجات.",
      stock: "يمكنك معرفة حالة المخزون من صفحة المنتج.",
      default: "يمكنك السؤال عن العطور أو المنتجات."
    },

    en: {
      hello: "Hello, I am LAYL AI assistant. I can help with products and perfumes.",
      perfume: "I can help you choose the right perfume.",
      male: "We have men's perfumes with fresh and strong notes.",
      female: "We have women's perfumes with elegant scents.",
      unisex: "Unisex perfumes are suitable for everyone.",
      price: "You can check prices on the product page.",
      stock: "You can check stock information on product pages.",
      default: "Ask me about perfumes, products, prices or categories."
    }
  };

  const r = responses[lang] || responses.tr;


  if (
    text.includes("merhaba") ||
    text.includes("hello") ||
    text.includes("مرحبا")
  ) return r.hello;


  if (
    text.includes("parfüm") ||
    text.includes("perfume") ||
    text.includes("عطر")
  ) return r.perfume;


  if (
    text.includes("erkek") ||
    text.includes("male") ||
    text.includes("رجال")
  ) return r.male;


  if (
    text.includes("kadın") ||
    text.includes("female") ||
    text.includes("نساء")
  ) return r.female;


  if (
    text.includes("unisex")
  ) return r.unisex;


  if (
    text.includes("vanilya") ||
    text.includes("vanilla")
  ) return r.vanilla;


  if (
    text.includes("ferah") ||
    text.includes("fresh")
  ) return r.fresh;


  if (
    text.includes("fiyat") ||
    text.includes("price") ||
    text.includes("سعر")
  ) return r.price;


  if (
    text.includes("stok") ||
    text.includes("stock")
  ) return r.stock;


  if (
    text.includes("kategori") ||
    text.includes("category")
  ) return r.category;


  if (
    text.includes("whatsapp")
  ) return r.whatsapp;


  return r.default;
};

export default laylAI;
