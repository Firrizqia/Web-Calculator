const display = document.querySelector(".display"); // Mendapatkan referensi elemen HTML dengan kelas "display"
const buttons = document.querySelectorAll("button"); // Mendapatkan semua elemen <button> dalam dokumen HTML
const specialChars = ["%", "*", "/", "-", "+", "="]; // Mendefinisikan array yang berisi karakter khusus yang digunakan dalam kalkulator
let output = ""; // Mendefinisikan variabel output yang akan menyimpan ekspresi kalkulator

// Fungsi untuk melakukan perhitungan berdasarkan nilai tombol yang diklik
const calculate = (btnvalue) => {

    display.focus(); // Fokus ke elemen tampilan (display) agar kursor tetap di dalamnya

    // Memeriksa apakah tombol yang diklik adalah tanda sama dengan (=) dan output tidak kosong
    if (btnvalue === '=' && output !== "") {
        // Melakukan evaluasi ekspresi matematika dalam output, menggantikan '%' dengan '/100' jika ada
        output = eval(output.replace("%", "/100"));
    }
    // Memeriksa apakah tombol yang diklik adalah tombol AC (all clear)
    else if (btnvalue === "AC") {
        output = "";   // Mengosongkan output
    }
    // Memeriksa apakah tombol yang diklik adalah tombol DEL (delete)
    else if (btnvalue === "DEL") {
        output = output.toString().slice(0, -1);  // Menghapus karakter terakhir dari output
    }
    // Jika tombol yang diklik bukan tombol spesial (seperti operator), atau jika output kosong
    else {
        // Memeriksa apakah output kosong dan tombol yang diklik adalah karakter khusus
        if (output === "" && specialChars.includes(btnvalue)) return;
        output += btnvalue; // Menambahkan nilai tombol yang diklik ke dalam output
    }

    display.value = output;// Menetapkan nilai output ke dalam elemen tampilan (display) untuk ditampilkan kepada pengguna
};

// Menambahkan event listener pada setiap tombol untuk memanggil fungsi calculate saat tombol diklik
buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.value));
});
