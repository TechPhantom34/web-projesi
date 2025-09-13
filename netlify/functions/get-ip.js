// Netlify Functions için ana işleyici (handler) fonksiyonu
exports.handler = async function(event, context) {
  // Gelen isteğin başlıklarını (headers) kontrol ederek kullanıcının IP adresini bulur.
  // Netlify, IP adresini "x-forwarded-for" başlığında sağlar.
  const ip = event.headers['x-forwarded-for'] || 'IP Adresi Bulunamadı';

  // IP adresini bir JSON objesi olarak geri döndürür.
  // Bu, ön taraftaki (index.html'deki) JavaScript'in veriyi kolayca okumasını sağlar.
  return {
    statusCode: 200, // İşlemin başarılı olduğunu gösterir
    body: JSON.stringify({ ipAddress: ip }) // IP adresini içeren JSON verisi
  };
};
