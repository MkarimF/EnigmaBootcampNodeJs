//switch pembayaran makanan

let metodePembayaran = 'gopay';
let totalPembayaran = 125500;
let kembalian = 0;
switch (metodePembayaran) {
    case 'gopay':
        kembalian = totalPembayaran - 100000;
        console.log(`Kembalian anda ${kembalian}`);
        break;
    case 'ovo':
        kembalian = totalPembayaran - 100000
        console.log(`Kembalian anda ${kembalian}`);
        break;
    case 'dana':
        kembalian = totalPembayaran - 100000
        console.log(`Kembalian anda ${kembalian}`);
        break;
    default:
        console.log('Metode pembayaran tidak tersedia');
        break;
}