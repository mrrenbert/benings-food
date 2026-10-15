import { describe, expect, it } from 'vitest';
import {
  WHATSAPP_PHONE,
  formatWhatsAppOrderMessage,
  getWhatsAppCartUrl,
  DEFAULT_WHATSAPP_ORDER,
} from '@/lib/whatsapp';
import { products } from '@/lib/products';

describe('WhatsApp checkout and order helpers', () => {
  it('uses the new phone number 6285119297858', () => {
    expect(WHATSAPP_PHONE).toBe('6285119297858');
    expect(DEFAULT_WHATSAPP_ORDER).toContain('6285119297858');
  });

  it('formats order message dynamically based on cart items', () => {
    const items = [
      { product: products[0], quantity: 2 },
      { product: products[1], quantity: 1 },
    ];
    const total = products[0].price * 2 + products[1].price * 1;
    const message = formatWhatsAppOrderMessage(items, total);

    expect(message).toContain('Halo Benings Food, saya ingin konfirmasi pesanan dari website:');
    expect(message).toContain(`- ${products[0].name} (x2)`);
    expect(message).toContain(`- ${products[1].name} (x1)`);
    expect(message).toContain('Total:');
    expect(message).toContain('Nama:');
    expect(message).toContain('Alamat:');
    expect(message).toContain('Metode Pengiriman:');
    expect(message).toContain('Mohon info rekening untuk pembayaran ya!');
  });

  it('generates wa.me URL with phone number and encoded message', () => {
    const items = [{ product: products[0], quantity: 1 }];
    const url = getWhatsAppCartUrl(items, products[0].price);

    expect(url).toContain('https://wa.me/6285119297858?text=');
    expect(decodeURIComponent(url)).toContain('Halo Benings Food, saya ingin konfirmasi pesanan dari website:');
  });
});
