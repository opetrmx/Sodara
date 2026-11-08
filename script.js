
async function loadPartial(elementId, file) {
  const container = document.getElementById(elementId);

  try {
    const response = await fetch(file);

    if (!response.ok) {
      throw new Error(`Gagal memuat ${file}`);
    }

    container.innerHTML = await response.text();
  } catch (error) {
    console.error(error);
    container.textContent = `Tidak dapat memuat ${file}.`;
  }
}

async function initializeSite() {
  await Promise.all([
    loadPartial("site-header", "header.html"),
    loadPartial("site-footer", "footer.html")
  ]);

  const year = document.getElementById("year");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const menuBtn = document.getElementById("menuBtn");
  const navLinks = document.getElementById("navLinks");

  if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
      menuBtn.textContent = open ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.textContent = "☰";


const WHATSAPP_NUMBER = "6285333007008"; // Ganti dengan nomor bos

function pesanWhatsApp(namaProduk, harga) {
  const pesan = `Halo, saya ingin memesan ${namaProduk} dengan harga ${harga}. Mohon informasi cara pembayarannya.`;

  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");

const WHATSAPP_NUMBER = "6281234567890"; // Ganti nomor bos

const modal = document.getElementById("orderModal");
const productLabel = document.getElementById("selectedProduct");
const priceLabel = document.getElementById("selectedPrice");
const nameInput = document.getElementById("customerName");
const qtyInput = document.getElementById("orderQty");
const totalLabel = document.getElementById("orderTotal");

let currentProduct = "";
let currentPrice = 0;

function formatRupiah(number) {
  return "Rp" + number.toLocaleString("id-ID");
}

function updateTotal() {
  const qty = Math.max(1, parseInt(qtyInput.value, 10) || 1);
  totalLabel.textContent = "Total: " +
    formatRupiah(currentPrice * qty);
}

// Klik tombol pesan pada produk
document.addEventListener("click", function (event) {
  const button = event.target.closest(
    "[data-product][data-price]"
  );

  if (!button) return;

  const price = Number(
    String(button.dataset.price).replace(/[^\d]/g, "")
  );

  if (!button.dataset.product || !Number.isFinite(price) || price <= 0) {
    alert("Data produk atau harga belum benar.");
    return;
  }

  currentProduct = button.dataset.product;
  currentPrice = price;

  productLabel.textContent = currentProduct;
  priceLabel.textContent = formatRupiah(currentPrice);
  qtyInput.value = 1;
  nameInput.value = "";

  updateTotal();
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  nameInput.focus();
});

qtyInput.addEventListener("input", updateTotal);

function closeOrderModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

document.getElementById("closeModal")
  .addEventListener("click", closeOrderModal);

modal.addEventListener("click", function (event) {
  if (event.target === modal) closeOrderModal();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") closeOrderModal();
});

document.getElementById("confirmOrder")
  .addEventListener("click", function () {
    const customerName = nameInput.value.trim();
    const qty = parseInt(qtyInput.value, 10);

    if (!customerName) {
      alert("Silakan isi nama pelanggan.");
      nameInput.focus();
      return;
    }

    if (!Number.isInteger(qty) || qty < 1 || qty > 1000) {
      alert("Jumlah pesanan harus antara 1 dan 1000.");
      qtyInput.focus();
      return;
    }

    if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
      alert("Periksa nomor WhatsApp di script.js.");
      return;
    }

    const total = currentPrice * qty;

    if (!Number.isSafeInteger(total)) {
      alert("Total pesanan terlalu besar.");
      return;
    }

    const message = [
      "Halo, saya ingin memesan:",
      "",
      "Nama: " + customerName,
      "Produk: " + currentProduct,
      "Harga satuan: " + formatRupiah(currentPrice),
      "Jumlah: " + qty,
      "Total: " + formatRupiah(total),
      "",
      "Mohon informasi pembayaran. Terima kasih."
    ].join("\n");

    const url = "https://wa.me/" + 6285333007008 +
      "?text=" + encodeURIComponent(message);

    window.open(url, "_blank");
  });

}

      });
    });
  }
}

initializeSite();
