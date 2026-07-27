// LAYL AI Asistan

const laylAI = (message, lang = "tr") => {
  const text = message.toLowerCase();

  const responses = {
    tr: {
      perfume: "Size uygun parfüm önerebilirim. Erkek, kadın veya unisex seçeneklerimiz var.",
      price: "Ürün fiyatlarını görmek için ürün sayfasını kontrol edebilirsiniz.",
      hello: "Merhaba, LAYL Kozmetik yapay zeka asistanıyım. Size nasıl yardımcı olabilirim?",
      default: "Üzgünüm, bunu anlayamadım. Parfüm, fiyat veya ürün önerisi hakkında sorabilirsiniz."
    },
    ar: {
      perfume: "يمكنني مساعدتك في اختيار العطر المناسب.",
      price: "يمكنك رؤية الأسعار من صفحة المنتجات.",
      hello: "مرحباً، أنا مساعد LAYL للذكاء الاصطناعي.",
      default: "لم أفهم، يمكنك السؤال عن العطور أو الأسعار."
    },
    en: {
      perfume: "I can help you choose the right perfume.",
      price: "You can check prices on the product page.",
      hello: "Hello, I am LAYL AI assistant.",
      default: "I didn't understand. Ask about perfumes or prices."
    }
  };

  const r = responses[lang] || responses.tr;

  if (text.includes("parfüm") || text.includes("perfume") || text.includes("عطر")) {
    return r.perfume;
  }

  if (text.includes("fiyat") || text.includes("price") || text.includes("سعر")) {
    return r.price;
  }

  if (text.includes("merhaba") || text.includes("hello") || text.includes("مرحبا")) {
    return r.hello;
  }

  return r.default;
};

export default laylAI;
