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

  answer(message){

    const found = this.searchProduct(message);

    if(found.length){
      let p = found[0];

      return `
${p.nameTr}

Fiyat: ${p.price || "Belirtilmemiş"} ${p.currency || ""}
Stok: ${p.stockQty || 0} adet

Ürün hakkında:
${p.descTr || ""}
`;
    }

    return "Ürün, fiyat, stok veya sipariş konusunda yardımcı olabilirim.";
  }
};
