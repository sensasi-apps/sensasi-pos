import { ISODate } from '@/@types/iso-date'
import { Permission } from '@/enums/permission'
import { UUID } from 'crypto'

export interface User {
  uuid: Readonly<UUID>
  email__encrypted: string
  password__encrypted: string
  roles: ('owner' | 'manager' | 'cashier' | 'stocker')[]
  permissions: Permission[]

  created_at: ISODate
  updated_at: ISODate
  deleted_at?: ISODate
}
