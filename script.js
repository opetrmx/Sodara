/* ====== DATA PRODUK (ubah di sini) ====== */
const LINK_BELI = "https://wa.me/6285333007008?text=Halo%2C%20saya%20ingin%20beli"

const produk = [
  // ---- PRO ----
  { id: 1,  kategori: "pro", nama: "Camfrog Pro 1 Bulan",   harga: 195000,  deskripsi: "Fitur Pro selama 1 bulan.", gambar: "im/pro1.png" },
  { id: 2,  kategori: "pro", nama: "Camfrog Pro 1 Tahun",   harga: 1235000, deskripsi: "Fitur Pro selama 1 tahun.", gambar: "im/pro2.png" },
  { id: 3,  kategori: "pro", nama: "Camfrog Extreme 1 Bulan", harga: 245000,  deskripsi: "Level Extreme selama 1 bulan.", gambar: "im/ext1.png" },
  { id: 4,  kategori: "pro", nama: "Camfrog Extreme 1 Tahun", harga: 1585000, deskripsi: "Level Extreme selama 1 tahun.", gambar: "im/ext2.png" },
  { id: 5,  kategori: "pro", nama: "Camfrog Gold 1 Bulan",   harga: 975000,  deskripsi: "Level Gold selama 1 bulan.", gambar: "im/gold1.png" },
  { id: 6,  kategori: "pro", nama: "Camfrog Gold 1 Tahun",   harga: 6715000, deskripsi: "Level Gold selama 1 tahun.", gambar: "im/gold2.png" },

  // ---- COIN ----
  { id: 7,  kategori: "coin", nama: "Camfrog Coin 25",    harga: 45000,   deskripsi: "25 Coin Camfrog.", gambar: "im/Coin/1-25.png" },
  { id: 8,  kategori: "coin", nama: "Camfrog Coin 100",   harga: 87000,   deskripsi: "100 Coin Camfrog.", gambar: "im/Coin/2-100.png" },
  { id: 9,  kategori: "coin", nama: "Camfrog Coin 350",   harga: 174000,  deskripsi: "350 Coin Camfrog.", gambar: "im/Coin/3-350.png"},
  { id: 10, kategori: "coin", nama: "Camfrog Coin 1050",  harga: 350000,  deskripsi: "1050 Coin Camfrog.", gambar: "im/Coin/4-1050.png"},
  { id: 11, kategori: "coin", nama: "Camfrog Coin 3050",  harga: 870000,  deskripsi: "3050 Coin Camfrog.", gambar: "im/Coin/5-3050.svg"},
  { id: 12, kategori: "coin", nama: "Camfrog Coin 5050",  harga: 1305000, deskripsi: "5050 Coin Camfrog.", gambar: "im/Coin/6-5050.png"},
  { id: 13, kategori: "coin", nama: "Camfrog Coin 7050",  harga: 1740000, deskripsi: "7050 Coin Camfrog.", gambar: "im/Coin/7-7050.png"},
  { id: 14, kategori: "coin", nama: "Camfrog Coin 16000", harga: 3480000, deskripsi: "16000 Coin Camfrog.", gambar: "im/Coin/8-16000.png"},
  { id: 15, kategori: "coin", nama: "Camfrog Coin 25000", harga: 5220900, deskripsi: "25000 Coin Camfrog.", gambar: "im/Coin/9-25000.svg"}
];

/* ====== LOGIKA (umumnya tidak perlu diubah) ====== */
const daftarEl   = document.getElementById("daftarProduk");
const modal      = document.getElementById("modal");
const modalNama  = document.getElementById("modalNama");
const modalHarga = document.getElementById("modalHarga");
const modalDesc  = document.getElementById("modalDeskripsi");
const modalBeli  = document.getElementById("modalBeli");
const closeBtn   = document.getElementById("closeModal");
const searchInput = document.getElementById("searchInput");
const searchBtn   = document.getElementById("searchBtn");

let kategoriAktif = "semua";

function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

function tampilkanProduk(list) {
  daftarEl.innerHTML = "";
  if (list.length === 0) {
    daftarEl.innerHTML = "<p>Produk tidak ditemukan.</p>";
    return;
  }
  list.forEach(p => {
    const kartu = document.createElement("div");
    kartu.className = "kartu-produk";
    kartu.innerHTML = `
      <div class="gambar-produk">
      <img src="${p.gambar}" alt="${p.nama}"> 
      </div>
      <span class="badge">${p.kategori === "pro" ? "PRO" : "COIN"}</span>
      <div class="harga-produk">${formatRupiah(p.harga)}</div>
      <div class="terjual">Original Camfrog</div>
    `;
    kartu.addEventListener("click", () => bukaModal(p));
    daftarEl.appendChild(kartu);
  });
}

function bukaModal(p) {
  modalNama.textContent  = p.nama;
  modalHarga.textContent = formatRupiah(p.harga);
  modalDesc.textContent  = p.deskripsi;
  modalBeli.href = LINK_BELI;
  modal.classList.add("show");
}

function tutupModal() {
  modal.classList.remove("show");
}

function filterProduk() {
  const kata = searchInput.value.trim().toLowerCase();
  const hasil = produk.filter(p =>
    (kategoriAktif === "semua" || p.kategori === kategoriAktif) &&
    p.nama.toLowerCase().includes(kata)
  );
  tampilkanProduk(hasil);
}

/* ====== EVENT ====== */
document.querySelectorAll(".kat-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".kat-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    kategoriAktif = btn.dataset.kategori;
    filterProduk();
  });
});

searchBtn.addEventListener("click", filterProduk);
searchInput.addEventListener("keyup", e => { if (e.key === "Enter") filterProduk(); });

closeBtn.addEventListener("click", tutupModal);
modal.addEventListener("click", e => { if (e.target === modal) tutupModal(); });

/* Inisialisasi */
tampilkanProduk(produk);