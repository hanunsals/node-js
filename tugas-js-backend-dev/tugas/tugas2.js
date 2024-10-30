function sumOfNumbers(...numbers) { // Fungsi untuk menjumlahkan semua angka yang diberikan
    return numbers.reduce((total, number) => total + number, 0); // Menjumlahkan angka dengan reduce
}

const result = sumOfNumbers(1, 2, 3, 4, 5); // Memanggil fungsi angka 1,2,3,4,5
console.log(`The sum of 1, 2, 3, 4, and 5 is: ${result}`); // Menampilkan hasil penjumlahan