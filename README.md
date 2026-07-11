# LAYL Kozmetik Yönetim Panelli Sürüm

Dosyalar:
- index.html: Müşteri sitesi
- admin.html: Ürün yönetim paneli
- logo.jpeg
- vercel.json
- firestore.rules

Firebase'de iki küçük ayar gerekir:

1) Authentication > Sign-in method > Email/Password özelliğini aç.
2) Authentication > Users > Add user ile kendi e-posta ve şifreni oluştur.
3) Firestore Database > Rules bölümüne firestore.rules dosyasındaki kuralları yapıştır ve Publish'e bas.

Sonra GitHub'a index.html, admin.html, logo.jpeg ve vercel.json dosyalarını yükle.
Vercel otomatik yayınlar.

Admin adresi:
https://layl-kozmetik.vercel.app/admin

Not: Fotoğraflar tarayıcıda küçültülüp Firestore belgesine kaydedilir. Çok büyük fotoğraflarda hata alırsan daha küçük fotoğraf seç.


## Lüks V3
- Ürün arama
- Favoriler
- Editörün seçimi yatay slider
- Stok rozeti desteği
- Türkçe/Arapça uyumlu yeni metinler
