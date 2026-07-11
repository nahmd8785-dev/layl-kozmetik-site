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


## V4 Stok Yönetimi
- Admin panelinde Stokta / Tükendi seçimi
- Stok durumu ürünle birlikte Firebase'e kaydedilir
- Ana sitede rozet ve sipariş butonu otomatik güncellenir


## V6 English
- Main site supports Turkish, Arabic and English
- Admin panel supports Turkish, Arabic and English
- English product name and description fields added
- Existing products fall back to Turkish/Arabic until English text is entered

## V7 Ultimate
- İndirimli eski/yeni fiyat
- Yeni ve En Çok Satan rozetleri
- Stok adedi ve otomatik tükendi durumu
- Bir üründe 4 fotoğrafa kadar galeri
- Ürün video bağlantısı
- 3 dil ve 4 para birimi
- Favoriler, arama, stok, WhatsApp
- Google Maps ve ödeme seçenekleri bölümü
