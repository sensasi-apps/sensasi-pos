import type { ISODate } from '@/@types/iso-date'

export interface Warehouse {
  id: Readonly<number>
  name: string
  note?: string

  created_at: ISODate
  updated_at: ISODate
  deleted_at?: ISODate
}
