interface DataPenjualan {
  id: number
  tanggal: string
  kopi: number
  gorengan: number
  roti: number
  total_penjualan: number
  total_pembelian: number
  total_keuntungan: number
}

export const dataPenjualan: DataPenjualan[] = [
  {
    id: 1,
    tanggal: '2021-08-01',
    kopi: 50,
    gorengan: 25,
    roti: 15,
    total_penjualan: 1000000,
    total_pembelian: 500000,
    total_keuntungan: 500000,
  },
  {
    id: 2,
    tanggal: '2021-08-02',
    kopi: 40,
    gorengan: 37,
    roti: 10,
    total_penjualan: 2000000,
    total_pembelian: 1000000,
    total_keuntungan: 1000000,
  },
  {
    id: 3,
    tanggal: '2021-08-03',
    kopi: 41,
    gorengan: 29,
    roti: 20,
    total_penjualan: 3000000,
    total_pembelian: 1500000,
    total_keuntungan: 1500000,
  },
  {
    id: 4,
    tanggal: '2021-08-04',
    kopi: 30,
    gorengan: 20,
    roti: 11,
    total_penjualan: 4000000,
    total_pembelian: 2000000,
    total_keuntungan: 2000000,
  },
  {
    id: 5,
    tanggal: '2021-08-05',
    kopi: 31,
    gorengan: 22,
    roti: 15,
    total_penjualan: 5000000,
    total_pembelian: 2500000,
    total_keuntungan: 2500000,
  },
  {
    id: 6,
    tanggal: '2021-08-06',
    kopi: 25,
    gorengan: 20,
    roti: 10,
    total_penjualan: 6000000,
    total_pembelian: 3000000,
    total_keuntungan: 3000000,
  },
  {
    id: 7,
    tanggal: '2021-08-07',
    kopi: 30,
    gorengan: 25,
    roti: 15,
    total_penjualan: 7000000,
    total_pembelian: 3500000,
    total_keuntungan: 3500000,
  },
]
