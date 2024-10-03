export interface User {
  id: number
  name: string
}

/**
 * Data dummy untuk pengembangan UI
 *
 * @todo Hapus data dummy ini ketika sudah terhubung dengan API
 */
export const users: User[] = [
  {
    id: 1,
    name: 'Pengguna 1',
  },
  {
    id: 2,
    name: 'Pengguna 2',
  },
  {
    id: 3,
    name: 'Pengguna 3',
  },
  {
    id: 4,
    name: 'Pengguna 4',
  },
  {
    id: 5,
    name: 'Pengguna 5',
  },
]
