import { ISODate } from '@/@types/iso-date'
import { Permission } from '@/enums/permission'
import { UUID } from 'crypto'

type UserRole = 'owner' | 'manager' | 'cashier' | 'stocker'

export interface User {
  uuid: Readonly<UUID>
  email__encrypted: string
  password__encrypted: string
  roles: UserRole[]
  permissions: Permission[]

  created_at: ISODate
  updated_at: ISODate
  deleted_at?: ISODate
}
