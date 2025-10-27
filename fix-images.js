const fs = require('fs');

// Baca menu.json
const data = JSON.parse(fs.readFileSync('data/menu.json', 'utf8'));

// Mapping nama menu ke nama file gambar yang tersedia
const imageMapping = {
  // HOT beverages
  'ESPRESSO': 'img/beverages/hot.jpg',
  'AMERICANO': 'img/beverages/amer.jpg',
  'CAPPUCCINO': 'img/beverages/cafe.png',
  'TEA': 'img/beverages/hot.jpg',
  'SOE SOE COKLAT': 'img/beverages/soesoe.png',
  
  // ICED TEA
  'JASMINE TEA': 'img/beverages/jasmine.jpg',
  'LEMON TEA': 'img/beverages/lemon.png',
  'LYCHEE TEA': 'img/beverages/leci.png',
  
  // ICED COFFEE
  'AMERICANO (Iced)': 'img/beverages/amer.jpg',
  'KOPI SOE SOE (Iced)': 'img/beverages/soesoe.png',
  'CAFE LATTE': 'img/beverages/cafe.png',
  'CAFFE LATTE': 'img/beverages/cafe.png',
  'BISCOFF SALTED CARAMEL': 'img/beverages/biscoff salted.png',
  
  // SHAKES
  'BISCOFF': 'img/beverages/biscoff sh.png',
  'OREO': 'img/beverages/oreo.png',
  'MOKA (Shake)': 'img/beverages/moca.png',
  'MATCHA (Shake)': 'img/beverages/MATCHA.jpeg',
  'MILO': 'img/beverages/milo.png',
  'TARO': 'img/beverages/TARO.jpeg',
  
  // MOCKTAIL
  'MAGIC RED': 'img/beverages/magic.jpg',
  'ELDER BERRY': 'img/beverages/elderbr.png',
  
  // ICE CREAM
  'ES COKLAT': 'img/beverages/chocolate.png',
  'CHOCOLATE (Ice Cream)': 'img/beverages/chocolate.png',
  'MATCHA (Ice Cream)': 'img/beverages/MATCHA.jpeg',
  'BERRY': 'img/beverages/berry.png',
  'RUM RAISIN': 'img/beverages/chocolate.png',
  'VANILLA (Ice Cream)': 'img/beverages/chocolate.png',
  'STMJ': 'img/beverages/chocolate.png',
  'MOKA (Ice Cream)': 'img/beverages/moca.png',
  
  // OTHERS
  'TONIC WATER': 'img/beverages/tonic.jpg',
  'SODA WATER': 'img/beverages/soda.webp',
  'COLA': 'img/beverages/cola.webp',
  'PRISTINE': 'img/beverages/pristine.jpg',
  'MINERAL WATER': 'img/beverages/pristine.jpg',
  
  // BOTTLE 1000ml
  'PUNCHY APPLE': 'img/beverages/punchy.jpg',
  'AMERICANO (Bottle 1000ml)': 'img/beverages/bottle.jpg',
  'KOPI SOE SOE (Bottle 1000ml)': 'img/beverages/bottle.jpg',
  'KOPI SUSU GULA AREN (Bottle 1000ml)': 'img/beverages/bottle.jpg',
  'CAFE LATTE (Bottle 1000ml)': 'img/beverages/bottle.jpg',
  'ES CHOCOLATE CLASSIC': 'img/beverages/chocolate.png',
  'MILO (Bottle 1000ml)': 'img/beverages/bottle.jpg',
  
  // RECOMMENDATIONS
  'Mie Ayam Asin': 'img/food/mi ayam asin.jpeg',
  'Kopi Soesoe': 'img/beverages/soesoe.png',
  
  // ROTI PANGGANG
  'ICE CREAM TOAST': 'img/food/ice toas.png',
  
  // BAKERY
  'BRIOCHE TOAST WHOLE': 'img/food/Brioch toast tiramisu.jpeg',
  'SOUR DOUGH WHOLE': 'img/food/Sour dough egg mayo.jpeg',
  'BREAD+': 'img/food/Brioch toast tiramisu.jpeg',
  'CHEESE BUN': 'img/food/Cheese butter.jpeg',
  'PISANG KLASIK': 'img/food/Pisang goreng pak cik.jpeg',
  'CROISSANT & DANISH': 'img/food/Brioch toast tiramisu.jpeg',
  'KOUIGN AMANN': 'img/food/Brioch toast tiramisu.jpeg',
  'NUTELLA DANISH': 'img/food/Nutella.jpeg',
  
  // GAK BIKIN KENYANG
  'PENTOL AJA': 'img/food/PENTOL.jpeg',
  'FRENCH FRIES': 'img/food/french-fries-min-1024x1024.jpg',
  'P4 PLATTER': 'img/food/p4.HEIC',
  
  // NASI
  'NASI CHICKEN SALTED EGG': 'img/food/salted egg.jpg',
  
  // MIE
  'MIE AYAM SPESIAL': 'img/food/mi ayam.jpg',
  'MIE GORENG TELUR': 'img/food/mi ayam.jpg',
  'BAKMI GORENG SEAFOOD': 'img/food/mi ayam.jpg',
  'MIE KUAH': 'img/food/mi ayam.jpg',
  
  // TAMBAHAN
  'SAMBAL': 'img/food/smoor.jpg',
  'SAMBAL MATAH': 'img/food/matah.jpg',
  'SAMBAL TEMPONG': 'img/food/smoor.jpg',
  'SAMBAL TERASI': 'img/food/smoor.jpg',
  'KERING TEMPE KACANG': 'img/food/daun jeruk.png',
  'TELUR CEPLOK MATA SAPI': 'img/food/ceplok.jpg',
  'TELUR DADAR': 'img/food/dadar.jpg',
};

// Update data
let updatedCount = 0;
data.forEach(item => {
  if (item.gambarURL === 'img/food.jpg' && imageMapping[item.nama]) {
    item.gambarURL = imageMapping[item.nama];
    updatedCount++;
    console.log(`✓ Updated: ${item.nama} → ${item.gambarURL}`);
  }
});

// Simpan kembali
fs.writeFileSync('data/menu.json', JSON.stringify(data, null, 2), 'utf8');
console.log(`\n✅ Total ${updatedCount} items updated!`);

// Tampilkan items yang masih belum punya gambar
const remaining = data.filter(item => item.gambarURL === 'img/food.jpg');
if (remaining.length > 0) {
  console.log(`\n⚠️  ${remaining.length} items masih menggunakan img/food.jpg:`);
  remaining.forEach(item => console.log(`   - ${item.kategori}: ${item.nama}`));
}
