'use client'

import { Accordion, AccordionItem } from '@heroui/accordion'

export function Faq() {
  return (
    <section className="container px-8 py-28">
      <h2 className="mb-16 text-center text-5xl font-bold">Pertanyaan Umum</h2>

      <Accordion variant="bordered" className="mx-auto max-w-3xl border">
        <AccordionItem title="Apa itu Sensasi POS?">
          Sensasi POS adalah aplikasi Point of Sale sederhana yang dirancang
          untuk membantu pencatatan penjualan barang pada Warung / Toko / UMKM /
          Stan / Gerai / Swalayan.
        </AccordionItem>

        <AccordionItem title="Apa kelebihan Sensasi POS?">
          Sensasi POS adalah aplikasi POS yang dapat digunakan tanpa koneksi
          internet. Selain itu, aplikasi ini juga gratis dan tidak ada biaya
          berlangganan.
        </AccordionItem>

        <AccordionItem title="Apa saja fitur yang ada di Sensasi POS?">
          Fitur yang ada di Sensasi POS antara lain:
          <ul className="list-disc pl-8">
            <li>Manajemen Produk.</li>
            <li>Manajemen Penjualan.</li>
            <li>Manajemen Stok.</li>
            <li>Laporan Keuangan / Marjin.</li>
            <li>...dan masih banyak lagi</li>
          </ul>
        </AccordionItem>

        <AccordionItem title="Bagaimana cara menggunakan Sensasi POS?">
          Pengguna dapat langsung menggunakan aplikasi tanpa perlu mendaftar.
          Cukup buka aplikasi di browser dan mulai gunakan.
        </AccordionItem>

        <AccordionItem title="Apakah saya perlu internet untuk menggunakan aplikasi ini?">
          Tidak, Sensasi POS bisa digunakan sepenuhnya tanpa jaringan internet.
        </AccordionItem>

        <AccordionItem title="Bagaimana data saya disimpan?">
          Data disimpan secara lokal di browser dan dapat disinkronisasi dengan
          perangkat lain.
        </AccordionItem>
      </Accordion>
    </section>
  )
}
