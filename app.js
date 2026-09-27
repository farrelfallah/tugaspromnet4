/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */

// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"
console.log("=== Selamat datang di kedai kopi farrel");
console.log("Script Javascript Telah Terhubung");

// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().
const Nama_kedai = "kedai kopi farrel";

// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.
let namakasir = "farrel";

// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.
alert("selamat datang di aplikasi kedai kopi farrel");
let nama_pelanggan = prompt("halo! masukkan nama kamu untuk memulai: ");

if (nama_pelanggan) {
  alert(
    "halo, " +
      nama_pelanggan +
      "! Yuk kita mulai memilih berbagai menu disini.",
  );
  console.log("pelanggan terhormat : " + nama_pelanggan);
} else {
  alert("kamu tidak memasukkan nama. kamu akan di panggil anymous");
  nama_pelanggan = "pelanggan yg baik";
  console.log("pelanggan yang baik: " + nama_pelanggan);
}

// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).
let Kopi_latte = 45;
let kopi_aren = 37;
let rice_bowl = 38;

let jumlah_nilai = Kopi_latte + kopi_aren + rice_bowl;

let nilai_ratarata = jumlah_nilai / 3;
// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
console.log("=== Nilai " + nama_pelanggan + "===");
console.log("kopi latte : " + Kopi_latte);
console.log("kopi aren : " + kopi_aren);
console.log("rice bowl : " + rice_bowl);

console.log("jumlah kopi anda adalah " + jumlah_nilai);
console.log("rata rata kopi anda adalah " + nilai_ratarata);

// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================
let tier_member = "";
let benefit_diskon = "";

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().

if (jumlah_nilai >= 100) {
  tier_member = "Platinum";
  benefit_diskon = "Gratis Matcha per minggu";
} else if (jumlah_nilai >= 70) {
  tier_member = "Gold";
  benefit_diskon = "Diskon 10% setiap pembelian";
} else if (jumlah_nilai >= 40) {
  tier_member = "Silver";
  benefit_diskon = "Diskon 20% untuk Menu Matcha";
} else if (jumlah_nilai <= 40) {
  tier_member = "Bronze";
  benefit_diskon = "Member reguler";
}

console.log(
  "tier member anda adalah " +
    tier_member +
    "benefit diskon : " +
    benefit_diskon,
);

alert(
  "hasil member : " +
    nama_pelanggan +
    ":\n" +
    "jumlah nilai : " +
    jumlah_nilai +
    ":\n" +
    "tier member :" +
    tier_member +
    "benefit diskon : " +
    benefit_diskon,
);

// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.

function hitung_jumlahnilai(point1, point2, point3) {
  let jumlah = point1 + point2 + point3;
  return jumlah / 3;
}

// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.

function tentukan_member(tier_member) {
  if (tier_member >= 100) return "platinum - gratis matcha perminggu";
  if (tier_member >= 70) return "gold - diskon 10% setiap pembelian";
  if (tier_member >= 40) return "silevr - diskon 20% setiap pembelian matcha";
  if (tier_member <= 40) return "bronze - member reguler";
}

// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.

let poin_pelanggan_A = hitung_jumlahnilai(45, 37, 38);

let tier_member_pelanggan_A = tentukan_member(poin_pelanggan_A);

console.log("=== Data pelanggan A");
console.log("jumlah poinnya adalah " + poin_pelanggan_A);
console.log("tier membernya adalah " + tier_member_pelanggan_A);

// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.
let Daftar_menu_favorit = [
  "ricebowl",
  "matcha",
  "latte",
  "chiken katsu",
  "indomie aceh",
];

console.log("=== Daftar menu favorite " + Daftar_menu_favorit + "===");

// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.
for (let i = 0; i < Daftar_menu_favorit.length; i++) {
  console.log(i + 1 + ". " + Daftar_menu_favorit[i]);
}

// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===");
console.log("total pelanggan : " + Daftar_menu_favorit.length);
console.log("Akhirnya selesai");
