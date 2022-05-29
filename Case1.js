const fruits = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

function Nomor1(fruit) {
  const result = fruit.map((data) => console.log(data.fruitName));
  return result;
}

function Nomor2(fruit) {
  const wadahImport = fruit.filter((data) => data.fruitType === "IMPORT");
  const wadahLocal = fruit.filter((data) => data.fruitType === "LOCAL");

  let jumlahWadahImport = wadahImport.length;
  let MacamBuahImport = wadahImport.map((buah) => buah.fruitName);

  let jumlahWadahLocal = wadahLocal.length;
  let MacamBuahLocal = wadahLocal.map((buah) => buah.fruitName);

  console.log(
    "Jumlah Wadah : " + jumlahWadahImport,
    "\n",
    "Macam-Macam Buah : " + [...MacamBuahImport]
  );
  console.log(
    "Jumlah Wadah : " + jumlahWadahLocal,
    "\n",
    "Macam-Macam Buah : " + [...MacamBuahLocal]
  );
}

function Nomor3(fruit) {
  const totalStock = fruit.reduce((prev, next) => ({
    stock: prev.stock + next.stock,
  }));

  console.log(totalStock);
  return totalStock;
}

// Nomor 4
// Komentar dari saya adalah Seharusnya fruidId pada tiap keranjang harus berbeda karena identifier tiap object tidak boelh sama dan harus unique agar masing - masing keranjang mampu diidentifikasi dengan benar

// Nomor1(fruits);

// Nomor2(fruits);

// Nomor3(fruits);
