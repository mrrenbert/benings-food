import { money, type Product } from './products';

export const WHATSAPP_PHONE = '6285119297858';
export const WHATSAPP_PHONE_DISPLAY = '+62 851-1929-7858';

export const DEFAULT_WHATSAPP_ORDER = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  'Halo Benings Food, saya ingin order:\n\nNama: \nNo. HP: \nAlamat Lengkap: \nPesanan:\n1. [Varian Produk] - [Jumlah]\n2. [Varian Produk] - [Jumlah]\n\nMetode Pengiriman: (Instant / Sameday)\nCatatan: \n\nMohon totalan dan rekeningnya ya, terima kasih!'
)}`;

export interface CartItemLike {
  product: Product;
  quantity: number;
}

export function formatWhatsAppOrderMessage(items: CartItemLike[], total: number): string {
  const itemsText = items.length
    ? items
        .map(
          ({ product, quantity }) =>
            `- ${product.name} (x${quantity}) - ${money(product.price * quantity)}`
        )
        .join('\n')
    : '(Keranjang belanja kosong)';

  return `Halo Benings Food, saya ingin konfirmasi pesanan dari website:
${itemsText}
Total: ${money(total)}

Nama: 
Alamat: 
Metode Pengiriman: 

Mohon info rekening untuk pembayaran ya!`;
}

export function getWhatsAppCartUrl(items: CartItemLike[], total: number): string {
  const message = formatWhatsAppOrderMessage(items, total);
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}
